import React, { useState, useEffect } from 'react'
import Data from './data'

import {
  Container, CategoryCard,
  Image, Text
} from './styles'

export default function Category() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    setCategory(Data)
  }, [category])

  return (
    <Container>
      {category.map((item, index) => (
        <CategoryCard key={index}>
          <Image source={item.image} />
          <Text>{item.name}</Text>
        </CategoryCard>
      ))}
    </Container>
  )
}
