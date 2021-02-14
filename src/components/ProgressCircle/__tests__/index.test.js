import React from 'react'

import { render } from 'utils/helperRtl'

import ProgressCircle from '../'

describe('ProgressCircle Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<ProgressCircle />)
    expect(container).toMatchSnapshot()
  })

  it('should render child element', () => {
    const { container } = render(<ProgressCircle />)
    expect(container.firstChild).toBeDefined()
  })
})
