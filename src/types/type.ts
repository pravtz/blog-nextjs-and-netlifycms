export type CardPostProps = {
  imageHeader: string
  dataPost: string
  title: string
  descriptionPost?: string
  link?: string
  linkAs?: string
  category: string
  firstCard: boolean
}
export type AttributesProps = {
  title: string
  date: string
  description: string
  category?: string
  thumbnail: string
}
export type postProps = {
  html: string
  attributes: AttributesProps
  slug: string
}
