export type CardPostProps = {
  imageHeader: string
  dataPost: string
  title: string
  descriptionPost?: string
  link?: string
  linkAs?: string
}
export type AttributesProps = {
  title: string
  date: string
  thumbnail: string
  category?: string
}
export type postProps = {
  html: string
  attributes: AttributesProps
  slug: string
}
