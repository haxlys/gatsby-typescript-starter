import '@testing-library/jest-dom/extend-expect'
import { polyfill } from 'es6-promise'
import 'isomorphic-fetch'

import { server } from './__mocks__/server'

polyfill()

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
afterEach(() => server.resetHandlers())

// // Clean up after the tests are finished.
afterAll(() => server.close())
