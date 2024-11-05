import { useState } from 'react';
import gitLogo from '../assets/images/icons8-github-100.png'
import Input from '../components/input';
import Button from '../components/button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api'

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id)

      if(!isExist){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== id));
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="logo github"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => (<ItemRepo key={repo.id} repo={repo} onRemove={handleRemoveRepo} />
      ))}
    </Container>
  );
}

export default App;
