import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;

  a {
    margin-top: 1rem;
    color: ${(props) => props.theme['blue-500']};
  }
`
