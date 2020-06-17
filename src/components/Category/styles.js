import styled from 'styled-components'

const Container = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false
})``

const CategoryCard = styled.View`
  margin-right: 10px;
`

const Image = styled.Image`
  width: 132px;
  height: 60px;
  border-radius: 6px;
`

const Text = styled.Text`
  margin-top: 5px;
  color: #717171;
  text-align: center;
`

export {
  Container, CategoryCard,
  Image, Text
}
