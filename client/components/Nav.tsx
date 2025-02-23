import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => {
    logout()
    console.log('sign out')
  }

  const handleSignIn = () => {
    loginWithRedirect()
    console.log(user)
    console.log('sign in')
  }

  return (
    <>
      <div className="placeholder-nav-bar">
        <img src='/images/logo.png' alt='troll patrol logo' />

        <div className="menu-button">
          <Link to={``}>Bridges</Link>
        </div>

        <IfAuthenticated>
          <button className="button-text" onClick={handleSignOut}>Sign out</button>
          <img width='200px'  className="profile-thumbnail" src='/images/Profile_pic_placeholder.png' alt='active troll' />
          {user && <p>You are signed in as {user?.nickname}</p>}
        </IfAuthenticated>
        
        <IfNotAuthenticated>
          <p>The user is NOT logged in !!!!!!</p>
          <button className="button-text" onClick={handleSignIn}>Please sign in here</button>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Nav
