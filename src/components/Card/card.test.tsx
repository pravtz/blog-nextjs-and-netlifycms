import { render, screen } from '@testing-library/react'
import Card from '.'

describe('<Card>', () => {
  it('should render card component', () => {
    render(
      <Card
        imageHeader={'/static/img/photo01.jpg'}
        dataPost={'11-11-20'}
        title={'any title'}
        descriptionPost={'any description'}
        linkAs={'/blog/fake_article'}
      />
    )
    // eslint-disable-next-line no-useless-escape
    const date = screen.getByText(/11\-11\-20/i)
    const descripition = screen.getByText(/any description/i)
    const title = screen.getByRole('heading', {
      name: /any title/i
    })

    expect(date).toBeInTheDocument()
    expect(descripition).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
