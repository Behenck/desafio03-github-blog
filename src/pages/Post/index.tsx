import { AiFillGithub, AiOutlineLeft } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { BsFillCalendarEventFill } from 'react-icons/bs'
import { FaComment } from 'react-icons/fa'
import {
  Code,
  Info,
  PostContainer,
  PostContent,
  PostInfo,
  Text,
} from './styles'

export function Post() {
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

        <h1>JavaScript data types and data structures</h1>

        <Info>
          <div>
            <AiFillGithub size={18} />
            Behenck
          </div>
          <div>
            <BsFillCalendarEventFill size={18} />
            Há 1 dia
          </div>
          <div>
            <FaComment size={18} />5 comentários
          </div>
        </Info>
      </PostInfo>

      <PostContent>
        <Text>
          <p>
            <strong>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </strong>{' '}
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
          </p>
          <a href="">Dynamic typing</a>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
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
