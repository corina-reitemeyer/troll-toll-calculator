import request from 'superagent'
import { Bridge } from '../../models/bridge.ts'

const bridgeURL = '/api/v1/bridges'

export async function getBridges(): Promise<Bridge[]> {
  const res = await request.get(bridgeURL)
  return res.body
}

export async function getSingleBridge(name: string): Promise<Bridge>{
  const res = await request.get(`${bridgeURL}/${name}`)

  return res.body
} 