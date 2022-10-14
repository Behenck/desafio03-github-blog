import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IssueContext } from '../../contexts/IssuesContext'
import { distanceToNowConverter } from '../../utils/formatDistanceToNow'
import { Profile } from './components/Profile'
import { SearchPost } from './components/SearchPosts'
import { Issue, Issues } from './styles'

export function Blog() {
  const { issues } = useContext(IssueContext)
  return (
    <>
      <Profile />

      <SearchPost />

      <Issues>
        {issues.map((issue) => {
          console.log(issue)
          return (
            <Link to={`post/${issue.id}`} target="_blank" key={issue.id}>
              <Issue>
                <header>
                  <h3>{issue.title}</h3>
                  <span>{distanceToNowConverter(issue.created_at)}</span>
                </header>

                <p>
                  {issue.body.slice(0, 150)}
                  {'...'}
                </p>
              </Issue>
            </Link>
          )
        })}
      </Issues>
    </>
  )
}
