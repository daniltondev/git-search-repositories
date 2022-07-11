import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import * as S from './styled'

function App(props) {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('Lakshimi')
  const [erro, setErro] = useState(false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data
      const repositoriesNames = []
      repositories.map((repository) => {
        repositoriesNames.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesNames))
      setErro(false)
      navigate('./repositories')
    })
      .catch(err => {
        setErro(true)
      })
  }

  return (

    <S.Container>
      <S.Title>Pesquisar: {usuario}</S.Title>
      <S.Search>
        <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Search>
      {erro ? <S.Error>Ocorreu um erro. Tente Novamente!</S.Error> : ''}
    </S.Container>
  )
}

export default App