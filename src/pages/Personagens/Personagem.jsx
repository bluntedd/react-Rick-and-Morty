import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiRick from '../../services/apiRick'

const Personagem = () => {

   

    const [personagemm, setPersonagens] = useState([])


    useEffect(() => {
       
       apiRick.get('character/?language=pt-BR').then(resultado =>{
        
        setPersonagens(resultado.data.results) 
       })

      
    }, [])



  return (
    <div>
        
    <Row>
          {personagemm.map(item => (
          <Col md={2} className="md-3">
            <Card>
            <Card.Body>
            <Card.Img variant="top" src={item.image} />
              <Card.Title>{item.name}</Card.Title>
              <Link className="btn btn-danger" to={"/personagens/" + item.id} >Ver Detalhes</Link>
            </Card.Body>
          </Card>
          </Col>
          ))}
          </Row>

      </div>
          
          
  )
}
export default Personagem