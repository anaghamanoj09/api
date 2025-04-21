import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import photo from '../Components/assets/img.jpg'
import pic from '../Components/assets/images.jpg'
import imag from '../Components/assets/dress.jpg'
import Items from './Items';
import request from './request';



function Home() {
  return (
    <>
    <div></div>
    <Carousel className='mt-3'>
       <Carousel.Item>
        <img src={pic} height={'400px'} width={'2000px'} alt="" /> 
        <Carousel.Caption> 
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={photo} height={'400px'} width={'1500px'} alt="" />
      <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imag} height={'400px'} width={'2000px'} alt="" />
      <Carousel.Caption>
          <h3></h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Items fetchUrl={request.fetchitems2} title='Mensclothing'/>
      <Items fetchUrl={request.fetchitems3} title='Jewelery'/>
      <Items fetchUrl={request.fetchitems4} title='Womensclothing'/>
      <Items fetchUrl={request.fetchitems5} title='Electronics'/>
   
    </>
  )
}

export default Home