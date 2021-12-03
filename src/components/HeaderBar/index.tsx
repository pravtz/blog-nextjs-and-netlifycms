import {
  Wrapper,
  Brand,
  NavBar,
  SocialMedia,
  Content,
  ButtonResponsive
} from './styled'
import { Twitter, Instagram, Github, Menu } from '@styled-icons/feather'
import Link from 'next/link'

const HeaderBar = () => {
  return (
    <Wrapper>
      <Content>
        <Brand>
          <h1>Pravtz</h1>
        </Brand>
        <NavBar>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </NavBar>
        <SocialMedia>
          <ul>
            <li>
              <a href="https://twitter.com/pravtz">
                <i>
                  <Twitter size={28} />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pravtz/">
                <i>
                  <Instagram size={28} />
                </i>
              </a>
            </li>
            <li>
              <a href="https://github.com/pravtz">
                <i>
                  <Github size={28} />
                </i>
              </a>
            </li>
          </ul>
        </SocialMedia>
        <ButtonResponsive>
          <button>
            <i>
              <Menu size={28} />
            </i>
          </button>
        </ButtonResponsive>
      </Content>
    </Wrapper>
  )
}

export default HeaderBar
