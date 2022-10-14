import { useContext } from 'react'
import { AiFillGithub, AiOutlineLeft } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { IssueContext } from '../../contexts/IssuesContext'
import { distanceToNowConverter } from '../../utils/formatDistanceToNow'
import { PostContent } from './PostContent'
import { Info, PostContainer, PostInfo } from './styles'

export function Post() {
  const { issues } = useContext(IssueContext)
  console.log(issues)

  const { slug } = useParams()

  const issue = issues.find((issue) => issue.id === Number(slug))

  return (
    <PostContainer>
      {issue && (
        <>
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

            <h1>{issue.title}</h1>

            <Info>
              <div>
                <AiFillGithub size={18} />
                {issue.user.login}
              </div>
              <div>
                <BsFillCalendarEventFill size={18} />
                {distanceToNowConverter(issue.created_at)}
              </div>
              <div>
                <FaComment size={18} />
                {issue.comments} comentários
              </div>
            </Info>
          </PostInfo>

          <PostContent content={issue.body} />
        </>
      )}
    </PostContainer>
  )
}
