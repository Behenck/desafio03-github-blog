import styled from 'styled-components'
import cover from '../../assets/cover.svg'

export const Container = styled.div`
  width: 100%;
  height: 296px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
`
