import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
  Container, Head, Top,
  Title, Endereco, Text
} from './styles'

export default function Header() {
  return (
    <Container>
      <Head>
        <Top>
          <Title selected>Entrega</Title>
          <Title>Retirada</Title>
        </Top>

        <Icon name="qrcode" size={25} color="#EA1D2C" />
      </Head>

      <Endereco>
        <Text>R. Ribeirão, 100</Text>

        <Icon name="angle-down" size={20} color="#EA1D2C" />
      </Endereco>
    </Container>
  )
}
