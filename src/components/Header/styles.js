import { StyleSheet } from 'react-native'
import styled from 'styled-components'
// #EA1D2C
// #717171

const Container = styled.View``

const Head = styled.View`
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #717171;
  flex-direction: row;
  justify-content: space-between;
`

const Top = styled.View`
  flex-direction: row;
`

const Title = styled.Text`
  padding-bottom: 15px;
  margin-right: 30px;
  font-size: 18px;
  color: ${(props) => (props.selected ? '#EA1D2C' : '#000')};
  ${(props) => (props.selected ? 'border-bottom-width: 1px' : '')};
  ${(props) => (props.selected ? 'border-bottom-color: #EA1D2C' : '')};
`

const Endereco = styled.View`
  margin-top: 15px;
  flex-direction: row;
`

const Text = styled.Text`
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
`

export {
  Container, Head,
  Top, Title,
  Endereco, Text,
}
