import { Meta } from '@storybook/react'
import About from '../../pages/about'

export default {
  title: 'Pages/About',
  Component: About
} as Meta

export const HomePage = () => <About />
