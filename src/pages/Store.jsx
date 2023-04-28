import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { productsData } from '../productsDummy'
import ProductCard from '../components/ProductCard'

const Store = () => {

  return (
    <>
    <h1 align="center" className='p-3'>Welcome to the Store!</h1>
        <Row xs={1} md={3} className='g-4'>
       {productsData.map((product,ind) => 
        <Col key={ind} align="center">
       <ProductCard {...product} /> 
       </Col>   
       )}
        </Row>
    </>
  )
}

export default Store