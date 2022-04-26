import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiRick from '../../services/apiRick'

const EpisodiosDetalhes = () => {

    const params = useParams()
    const [episode, setEpisodes] = useState({})
    const [personagemm, setPersonagens] = useState([])
   


    useEffect(() => {
        apiRick.get('episode/' + params.id + '?language=pt-BR').then(resultado => {
            setEpisodes(resultado.data)
        })

        apiRick.get('episode/' + params.id + '/characters?language=pt-BR').then(resultado => {
            setPersonagens(resultado.data.character);
        })
        
    }, [])

    return (
        <div>
            {!episode.id && <h1>Carregando... Aguarde!</h1>}

            {episode.id &&
                <div>
                    <h1>{episode.name}</h1>
                    <Row>
                        
                            
                        <Col md={8}>
                            <p><strong>Nome: </strong>{episode.name}</p>
                            <p><strong>Data de lançamento: </strong>{episode.air_date}</p>
                            <p><strong>Criado: </strong>{episode.created}</p>
                            <br></br>
                            <Link className='btn btn-primary' to={-1}>Voltar</Link>
                        </Col>
                        <br></br>
                        <Col md={12} className="mt-3">
                            <h1>Personagens</h1>
                        </Col>
                        <Row>
                            {personagemm.map(item => (
                                <Col className="mb-3" md={2} key={item.id}>
                                    <Link to={'/personagens/' + item.id}>
                                        <Card title={item.name}>
                                            <Card.Img variant="top" src={item.image} />
                                            
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>                        
                    </Row>
                </div>
            }
        </div>
    )
                        
}


export default EpisodiosDetalhes