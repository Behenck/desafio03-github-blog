import { Header, Info, ProfileContainer, ProfileContent } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { HiUsers, HiOfficeBuilding } from 'react-icons/hi'
import { useContext } from 'react'
import { IssueContext } from '../../../../contexts/IssuesContext'

export function Profile() {
  const { profile } = useContext(IssueContext)

  return (
    <ProfileContainer>
      <img src="https://github.com/behenck.png" alt="" />

      <ProfileContent>
        <Header>
          <h1>{profile.name}</h1>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <BiLinkExternal size={16} />
          </a>
        </Header>
        <p>{profile.bio}</p>
        <Info>
          <div>
            <AiFillGithub size={18} />
            {profile.login}
          </div>
          <div>
            <HiOfficeBuilding size={18} />
            {profile.company}
          </div>
          <div>
            <HiUsers size={18} />
            {profile.followers} seguidores
          </div>
        </Info>
      </ProfileContent>
    </ProfileContainer>
  )
}
