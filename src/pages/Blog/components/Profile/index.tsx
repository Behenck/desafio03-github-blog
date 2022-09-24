import { Header, Info, ProfileContainer, ProfileContent } from './styles'
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { HiUsers, HiOfficeBuilding } from 'react-icons/hi'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/behenck.png" alt="" />

      <ProfileContent>
        <Header>
          <h1>Denilson Behenck</h1>
          <a href="#">
            GITHUB
            <BiLinkExternal size={16} />
          </a>
        </Header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <Info>
          <div>
            <AiFillGithub size={18} />
            Behenck
          </div>
          <div>
            <HiOfficeBuilding size={18} />
            Santa Casa
          </div>
          <div>
            <HiUsers size={18} />
            32 seguidores
          </div>
        </Info>
      </ProfileContent>
    </ProfileContainer>
  )
}
