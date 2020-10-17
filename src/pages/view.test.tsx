import React from 'react'
import { act, render, fireEvent, screen } from '@testing-library/react'

import View from './view'

test('should ', async () => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => {
      console.log('res :>> ', res)
    })
    .catch((e) => console.log('e :>> ', e))
  console.log('dd', data)
  render(<View />)
  // fireEvent.click(screen.getByText('view'))
  // expect(screen.queryByText(/home/)).toBeNull()
})
