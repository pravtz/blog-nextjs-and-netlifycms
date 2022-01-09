/* eslint-disable @typescript-eslint/no-explicit-any */
export type CardPostProps = {
  width: number
  height: number
  imageHeader: string
  dataPost: string
  title: string
  descriptionPost?: string
  link?: string
  linkAs?: string
  category: string
  firstCard: boolean
  layoutImage: any
}
export type AttributesProps = {
  title: string
  date: string
  description: string
  category?: string
  thumbnail: string
}

export type ListPostPromisse = {
  title: string
  date: string
  description: string
  category?: string
  thumbnail: string
  slug: string
}
export type postProps = {
  html: string
  attributes: AttributesProps
  slug: string
}
export type HeaderContentHomeProps = {
  title: string
  description: string
  thumbnail: string
  date?: string
}
