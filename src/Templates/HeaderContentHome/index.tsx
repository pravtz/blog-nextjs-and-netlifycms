import Image from 'next/image'
import { HeaderContentHomeProps } from '../../types/type'

import {
  Wrapper,
  Content,
  Title,
  Description,
  ImageWrapper,
  ContentHtml
} from './styled'

type attribPropos = {
  attrib: HeaderContentHomeProps
}

const HeaderContentHome = ({ attrib }: attribPropos) => (
  <Wrapper>
    <Content>
      <Title>{attrib.title}</Title>
      <Description>{attrib.description}</Description>
      <div className="whapper-profile">
        <ImageWrapper>
          <div>
            <Image
              className="image-profile"
              width={500}
              height={500}
              src={attrib.thumbnail}
            />
          </div>
        </ImageWrapper>
        <ContentHtml>
          <h2>
            Eu sou <strong>Ederson Pravtz</strong>, eterno estudante e
            apaixonado por <strong>técnologia</strong>.
          </h2>
          <p>
            Acredito que como seres evolutivos, temos a obrigação de
            desenvolvermos como pessoa de forma intelectual, financeira e
            emocional, compartilhando as conquistas, aprendendo com as
            dificuldades e melhor..{' '}
            <strong>&quot;vendo a máquina chamada VIDA copilar&quot;</strong>.
          </p>
        </ContentHtml>
      </div>
    </Content>
  </Wrapper>
)

export default HeaderContentHome
