import server from '@/service/server'

export const getFiles = async (path) => {
  const body = {
    path
  }
  const resp = await fetch(server.host + 'files', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return resp.json()
}
