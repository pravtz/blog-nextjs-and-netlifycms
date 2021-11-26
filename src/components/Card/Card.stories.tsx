import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from '.'
import ImgCard from '../../../public/static/img/photo01.jpg'

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})

Basic.args = {
  imageHeader: ImgCard,
  dataPost: '20-20-20',
  title: 'Example',
  descriptionPost:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis mattis tortor. ',
  linkAs: '/blog/example'
}
