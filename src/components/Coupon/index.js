import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import voucher from '~/tmp/images/icon/voucher.jpg'

import {
  Container, Card, Content,
  Image, Information, Text
} from './styles'

export default function Coupon() {
  return (
    <Container>
      <Card>
        <Content>
          {/* <Icon name="tag" size={25} color="#EA1D2C" /> */}
          <Image source={voucher} />

          <Information>
            <Text bold>Cupom de R$ 15 para Restaurantes</Text>
            <Text clr="#717171">Válido até 20/06</Text>
          </Information>
        </Content>

        <Icon name="angle-right" size={25} color="#EA1D2C" />
      </Card>
    </Container>
  )
}
