import styled from 'styled-components'

export const SearchPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme['gray-200']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['gray-400']};
    }
  }

  input[type='text'] {
    border: 6px;
    line-height: 1.6;
    color: ${(props) => props.theme['gray-500']};
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme['gray-900']};

    border: 1px solid ${(props) => props.theme['gray-600']};
    border-radius: 6px;
  }
`
