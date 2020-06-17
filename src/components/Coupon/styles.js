import { StyleSheet } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  margin: 20px 0 20px 0;
`

const Card = styled.View`
  padding: 15px 25px 15px 15px;
  border: ${StyleSheet.hairlineWidth}px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`

const Image = styled.Image`
  width: 45px;
  height: 45px;
`

const Information = styled.View`
  margin-left: 10px;
`

const Text = styled.Text`
  color: ${props => props.clr ? props.clr : '#000'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export {
  Container, Card, Content,
  Image, Information, Text
}
