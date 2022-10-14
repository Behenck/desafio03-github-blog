import { useForm } from 'react-hook-form'
import { SearchPostContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IssueContext } from '../../../../contexts/IssuesContext'
import { useContext } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchPost() {
  const { fetchIssues, totalPublications } = useContext(IssueContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchIssues(data: SearchFormInputs) {
    fetchIssues(data.query)
    reset()
  }

  return (
    <SearchPostContainer>
      <div>
        <label htmlFor="">Publicações</label>
        <span>{totalPublications} publicações</span>
      </div>

      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchPostContainer>
  )
}
