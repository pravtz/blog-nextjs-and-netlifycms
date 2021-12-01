import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from '.'
//import ImgCard from '../../../public/static/img/photo01.jpg'
import { CardPostProps } from '../../types/type'

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

const args: CardPostProps = {
  imageHeader: 'static/media/public/static/img/photo01.jpg',
  dataPost: '26 de novembro de 2020',
  title: 'New site design made with Nextjs',
  descriptionPost:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed scelerisque metus, eu scelerisque dui. Etiam porta elit eget egestas ultrices.',
  linkAs: '/blog/example'
}

export const Basic = Template.bind({})
export const Small = Template.bind({})
export const Medium = Template.bind({})
export const Large = Template.bind({})
export const huge = Template.bind({})

Small.parameters = {
  viewport: {
    defaultViewport: 'small'
  }
}
Medium.parameters = {
  viewport: {
    defaultViewport: 'medium'
  }
}
Large.parameters = {
  viewport: {
    defaultViewport: 'large'
  }
}
huge.parameters = {
  viewport: {
    defaultViewport: 'huge'
  }
}
Basic.args = args
Small.args = args
Medium.args = args
Large.args = args
huge.args = args
