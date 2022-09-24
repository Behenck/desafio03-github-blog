import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  display: flex;
  gap: 2rem;
  margin-top: -5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
  padding: 2.5rem 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    line-height: 1.6;
    color: ${(props) => props.theme['gray-300']};
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }

  a {
    display: flex;
    color: ${(props) => props.theme['blue-500']};
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.6;
  gap: 1.5rem;
  margin-top: 1.5rem;
  color: ${(props) => props.theme['gray-200']};

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
