import { useContext } from 'react'
import { AiFillGithub, AiOutlineLeft } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { IssueContext } from '../../contexts/IssuesContext'
import ReactMarkdown from 'react-markdown'
import {
  Code,
  Info,
  PostContainer,
  PostContent,
  PostInfo,
  Text,
} from './styles'

export function Post() {
  const { issues } = useContext(IssueContext)

  const { slug } = useParams()
  const issue = issues.find((issue) => {
    return issue.id === Number(slug)
  })

  return (
    <PostContainer>
      <PostInfo>
        <header>
          <div>
            <a href="">
              <AiOutlineLeft />
              VOLTAR
            </a>
          </div>
          <div>
            <a href="#">
              VER NO GITHUB
              <BiLinkExternal size={16} />
            </a>
          </div>
        </header>

        <h1>{issue?.title}</h1>

        <Info>
          <div>
            <AiFillGithub size={18} />
            {issue?.user.login}
          </div>
          <div>
            <BsFillCalendarEventFill size={18} />
            Há 1 dia
          </div>
          <div>
            <FaComment size={18} />
            {issue?.comments} comentários
          </div>
        </Info>
      </PostInfo>

      <PostContent>
        <Text>
          <ReactMarkdown>{issue?.body}</ReactMarkdown>
        </Text>

        <Code>
          <p>let foo = 42; // foo is now a number</p>
          <p>foo = ‘bar’; // foo is now a string</p>
          <p>foo = true; // foo is now a boolean</p>
        </Code>
      </PostContent>
    </PostContainer>
  )
}
