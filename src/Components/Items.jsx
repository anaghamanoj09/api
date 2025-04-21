import React, { useEffect, useState } from 'react'
import axiosinstance from './axios'
import Card from 'react-bootstrap/Card';

function Items({fetchUrl,title}) {

    const[product,setProduct]=useState([])
    const datas=async()=>{
        const result=await axiosinstance.get(fetchUrl)
        console.log(result.data)
        setProduct(result.data)
    }
    useEffect(()=>{
        datas()
    },[])
  return (
    <>
     <h2 style={{fontWeight:'bolder',color:'burlywood'}} className='m-3'>{title}</h2>
     <div className='container bg-light'>
      <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
        {product.map((item) => (
          <Card  style={{ width: '150px' }} className='border shadow m-3'>
            <Card.Img  src={item.image} height={'200px'} width={'900px'}  />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
     
    </>
  )
}
export default Items