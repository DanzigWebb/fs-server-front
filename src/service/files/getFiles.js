import server from '@/service/config'
import { FSResponse } from '@/service/files/File'

export const getFiles = async (path) => {
  const body = {
    hasJunk: false,
    path
  }
  const resp = await fetch(server.host + 'files', {
    method:  'POST',
    body:    JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const toJSON = await resp.json()
  return new FSResponse(toJSON)
}
