import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Index from './index'

test('should ', async () => {
  render(<Index />)
  fireEvent.click(screen.getByText('view'))
  expect(screen.queryByText(/home/)).toBeNull()
})
