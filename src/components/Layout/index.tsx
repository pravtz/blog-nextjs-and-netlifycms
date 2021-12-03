import Footer from '../Footer'
import HeaderBar from '../HeaderBar'
import { Wrapper, Content } from './styled'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <Wrapper>
    <HeaderBar />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
)

export default Layout
