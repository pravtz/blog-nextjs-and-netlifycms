import AsidePost from '../AsidePost'
import Footer from '../Footer'
import HeaderBar from '../HeaderBar'
import { Wrapper, Content, Posts, Banners, ContentBanner } from './styled'

type LayoutProps = {
  children: React.ReactNode | any
}
const LayoutPost = ({ children }: LayoutProps) => {
  const TypeCategory = children.props.attributes.category || ''
  const TypeTitle = children.props.attributes.title || ''

  return (
    <Wrapper>
      <HeaderBar />
      <Content>
        <Posts>{children}</Posts>
        <Banners>
          <ContentBanner>
            <AsidePost categoryType={TypeCategory} TypeTitle={TypeTitle} />
          </ContentBanner>
        </Banners>
      </Content>

      <Footer />
    </Wrapper>
  )
}

export default LayoutPost
