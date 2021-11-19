import { Wrapper } from './styled'

type LayoutProps = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => <Wrapper>{children}</Wrapper>

export default Layout
