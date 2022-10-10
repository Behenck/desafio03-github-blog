import { createContext, ReactNode, useEffect, useState } from 'react'
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
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssuesProviderProps) {
  const [profile, setProfile] = useState<Profile>({} as Profile)
  const [issues, setIssues] = useState([])

  useEffect(() => {
    api.get<Profile>('/users/Behenck').then((response) => {
      setProfile(response.data)
    })
  }, [])

  useEffect(() => {
    api.get('repos/Behenck/desafio03-github-blog/issues').then((response) => {
      setIssues(response.data)
    })
  }, [])

  return (
    <IssueContext.Provider value={{ profile, issues }}>
      {children}
    </IssueContext.Provider>
  )
}
