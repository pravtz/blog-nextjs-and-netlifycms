import { Wrapper, Content, Copyright, Contact, Projects } from './styled'

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <div className="content-main">
          <Contact>
            <h4>Contatos</h4>
            <ul>
              <li>edersonpravtz@gmail.com</li>
            </ul>
          </Contact>
          <Projects>
            <h4>Projetos</h4>
            <ul>
              <li>Tour Pravtz</li>
            </ul>
          </Projects>
        </div>
      </Content>
      <Copyright>
        2021 - Ederson Pravtz - Todos os direitos reservados
      </Copyright>
    </Wrapper>
  )
}
export default Footer
