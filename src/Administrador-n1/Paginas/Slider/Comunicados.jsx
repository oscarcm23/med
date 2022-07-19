import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import medida from '../../../images/mision.png'
import consultorias from '../../../images/vision.png'
import appsMovil from '../../../images/img1.png'


function Comunicados() {
  return (
    <div  id='content'>  

        <div  className='comunicados'>
         <h2>Comunicados</h2>
        </div>
  
<CardGroup>
  <Card>
    <Card.Img variant="top" src={medida} alt="Desarrollo de Software" />
    <Card.Body>
      <Card.Title>Comunicado 1</Card.Title>
      <Card.Subtitle>17/06/2022</Card.Subtitle>
      <Card.Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='#'  className='links'>
                    <h3 className="pricingTable-firstTable_table__getstart">Más Información</h3>
                </Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={appsMovil} alt="Desarrollo de Apps" />
    <Card.Body>
      <Card.Title>Comunicado 2</Card.Title>
      <Card.Subtitle>17/06/2022</Card.Subtitle>
      <Card.Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='#'  className='links'>
                    <h3 className="pricingTable-firstTable_table__getstart">Más Información</h3>
                </Link>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Img variant="top" src={consultorias} alt="Consultoría Personalizada" />
    <Card.Body>
      <Card.Title>Comunicado 3</Card.Title>
      <Card.Subtitle>17/06/2022</Card.Subtitle>
      <Card.Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to='#'  className='links'>
                    <h3 className="pricingTable-firstTable_table__getstart">Más Información</h3>
                </Link>
    </Card.Footer>
  </Card>

</CardGroup>








    </div>
  )
}

export default Comunicados