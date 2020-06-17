import React from 'react'

import Header from '~/components/Header'
import Coupon from '~/components/Coupon'
import Category from '~/components/Category'

import {
  Container
} from './styles'

export default function Main() {
  return (
    <Container>
      <Header />
      <Coupon />
      <Category />
    </Container>
  )
}
