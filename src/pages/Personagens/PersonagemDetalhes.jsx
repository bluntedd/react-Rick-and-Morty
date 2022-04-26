import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiRick from '../../services/apiRick'




const PersonagemDetalhes = () => {

  
  
  const params = useParams()

  
  const [personagemm, setPersonagens] = useState({})

  const  [episode, setEpisodes] = useState([])

  useEffect(() => {
     
     apiRick.get('character/' + params.id + '?language=pt-BR').then(resultado =>{
      
      setPersonagens(resultado.data) 
     })

    
  }, [])


  useEffect(()=>{

    apiRick.get('episode/').then(resultado=>{
        setEpisodes(resultado.data.results)    
    })
 
 },[])
  return (
    <div>
      {!personagemm.id && <h1>Carregando... Aguarde!</h1>}

{personagemm.id &&
<div>
  <Container>
  <h1>{personagemm.name}</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src= {personagemm.image} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>Status:</h2>
          <p>{personagemm.status}</p>
          <h2>Species:</h2>
          <p>{personagemm.species}</p>
          <h2>Gender: </h2>
          <p>{personagemm.gender}</p>
          

          <h2>Type:</h2>
          <p>{personagemm.type}</p>
          

          <Link className='btn btn-primary' to={-1}>Voltar</Link>
          
          
        </Col>
        <Col md={12} className='mt-3'>
                <h1>Episodios</h1>
              </Col>
              
              <Row>
              {episode.map(item=>(
               <Col className='mb-3' md={2} key={item.id}>
                  
                   {item.name}
                
                <Link to={'/episodios/' + item.id}>
                <Card title = {item.name}></Card>
                  
                </Link>
               </Col>
              ))}
             </Row>
            </Row>
        </Container>
      </div>
    }
    </div>
  )
}


export default PersonagemDetalhes