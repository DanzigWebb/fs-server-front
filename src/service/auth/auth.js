import server from '@/service/config'
import { AuthResponse } from '@/service/models/auth/login'

export const loginUser = async (login, password) => {
  const body = {
    login, password
  }

  const resp = await fetch(server.host + 'authorization', {
    method:  'POST',
    body:    JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const toJSON = await resp.json()
  return new AuthResponse(toJSON)
}
