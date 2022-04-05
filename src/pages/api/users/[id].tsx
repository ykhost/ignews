import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query

  const users = [
    { id: 1, name: 'Andre'},
    { id: 2, name: 'Drede'},
    { id: 3, name: 'Heit'},
  ]

  return response.json(users)
}