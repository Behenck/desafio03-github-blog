import { SearchPostContainer } from './styles'

export function SearchPost() {
  return (
    <SearchPostContainer>
      <div>
        <label htmlFor="">Publicações</label>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchPostContainer>
  )
}
