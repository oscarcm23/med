import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Comunicados from './Comunicados'
import Sli from "../../../images/slider.jpg"


function Slider() {
  return (

    <div  id='expand'>
    <div className='contenido slider'>

<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100   h-100"
      src={Sli}
      alt="Primer Slider"
    />
    <Carousel.Caption>
      <h5>Primer Slider</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100  h-100"
      src={Sli}
      alt="Segundo Slider"
    />
    <Carousel.Caption>
      <h5>Segundo Slider</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100   h-100"
      src={Sli}
      alt="ercer Sldier"
    />
    <Carousel.Caption>
      <h5>Tercer Slider</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


</div>


<  Comunicados />


    </div>
  )
}

export default Slider