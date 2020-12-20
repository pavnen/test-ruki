import React from 'react'
import {render} from '@testing-library/react'
import {Field} from './Field'

it('should match snapshot', () => {
  expect(render(<Field cells={[]} addNewCell={() => {}}/>)).toMatchSnapshot()
})
