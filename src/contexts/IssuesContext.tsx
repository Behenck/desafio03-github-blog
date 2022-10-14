import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'

interface Profile {
  id: number
  html_url: string
  name: string
  company: string
  followers: number
  bio: string
  avatar_url: string
  login: string
}

interface Issue {
  url: string
  id: number
  title: string
  body: string
  user: {
    login: string
  }
  comments: number
  created_at: string
}

interface IssueContextType {
  profile: Profile
  issues: Issue[]
  fetchIssues: (query: string) => Promise<void>
  totalPublications: number
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssuesProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [issues, setIssues] = useState<Issue[]>([])
  const [totalPublications, setTotalPublications] = useState(0)

  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repository = import.meta.env.VITE_GITHUB_REPOSITORY

  const fetchProfile = useCallback(async () => {
    api.get<Profile>(`/users/${username}`).then((response) => {
      setProfile(response.data)
    })
  }, [username])

  const fetchIssues = useCallback(
    async (query: string = '') => {
      try {
        const response = await api.get('/search/issues', {
          params: {
            q: `${query}repo:${username}/${repository}`,
          },
        })
        setIssues(response.data.items)
        setTotalPublications(response.data.items.length)
      } catch (err) {
        console.log(err)
      }
    },
    [repository, username],
  )

  useEffect(() => {
    fetchIssues()
    fetchProfile()
  }, [fetchIssues, fetchProfile])

  return (
    <IssueContext.Provider
      value={{ profile, issues, fetchIssues, totalPublications }}
    >
      {children}
    </IssueContext.Provider>
  )
}
