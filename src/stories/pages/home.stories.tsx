import { ComponentMeta, ComponentStory } from '@storybook/react'
import Home from '../../pages/index'

export default {
  title: 'Pages/Home',
  Component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home postsList={[]} />

export const HomePage = Template.bind({})
