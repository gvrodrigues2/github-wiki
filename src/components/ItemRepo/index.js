import React from 'react'
import { ItemContainer } from './style'

function ItemRepo({repo, onRemove }) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noopener noreferrer" target='_blank'>Ver repositorio</a>
        <br />
        <a href="2" onClick={() => onRemove(repo.id)} className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
