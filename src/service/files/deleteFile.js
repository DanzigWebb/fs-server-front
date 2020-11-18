import server from '@/service/config'

export const deleteFile = async (path) => {
  const body = {
    path
  }

  return await fetch(server.host + 'files', {
    method:  'DELETE',
    body:    JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
