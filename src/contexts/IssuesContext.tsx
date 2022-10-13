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
}

interface IssueContextType {
  profile: Profile
  issues: Issue[]
  fetchIssues: (query: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssuesProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    api.get<Profile>('/users/Behenck').then((response) => {
      setProfile(response.data)
    })
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:Behenck/desafio03-github-blog`,
      },
    })
    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssueContext.Provider value={{ profile, issues, fetchIssues }}>
      {children}
    </IssueContext.Provider>
  )
}
