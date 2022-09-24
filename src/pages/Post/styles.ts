import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const PostInfo = styled.div`
  background-color: ${(props) => props.theme['gray-800']};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: -5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
  padding: 2.5rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    div a {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      gap: 0.5rem;
      color: ${(props) => props.theme['blue-500']};
      text-decoration: none;
    }
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.6;
  gap: 1.5rem;
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

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;

  a {
    margin-top: 1rem;
    color: ${(props) => props.theme['blue-500']};
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.6;
`
export const Code = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-700']};
  border-radius: 2px;
`
