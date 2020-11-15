import server from '@/service/server'
import { FileItem } from '@/service/files/File'

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
  return {
    ...toJSON,
    list: toJSON.list.map(item => new FileItem(item))
  }
}
