import { setupServer } from 'msw/node'
import { rest } from 'msw'

// import { handlers } from './handlers'

export const server = setupServer([
  rest.get('https://pokeapi.co/api/v2/pokemon/ditto', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: 'mocked_user_token' }))
  }),
])
