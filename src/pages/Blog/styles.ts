import styled from 'styled-components'

export const Issues = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  a {
    text-decoration: none;
  }
`
export const Issue = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  line-height: 1.6;
  gap: 1.25rem;
  border: 2px solid ${(props) => props.theme['gray-700']};
  transition: background-color 0.2s, border 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['gray-800']};
    border: 2px solid ${(props) => props.theme['gray-500']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['gray-300']};
      max-width: 15rem;
    }

    span {
      color: ${(props) => props.theme['gray-400']};
      font-size: 0.875rem;
    }
  }
`
