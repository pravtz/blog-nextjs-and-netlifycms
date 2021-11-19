import Layout from '.'
import { render, screen } from '@testing-library/react'

describe('<Layout>', () => {
  it('should render layout default', () => {
    render(
      <Layout>
        <p>Anything</p>
      </Layout>
    )
    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    // screen.logTestingPlaygroundURL()
  })
})
