import React, { useContext } from 'react'
import { Card, Button, Form, Col, Row } from 'react-bootstrap'
import { CartContext } from '../CartContext';

const ProductCard = (props) => {
    const { title, price, id } = props;
    const { addOneToCart, getProductQuantity,deleteFromCart,removeOneFromCart } = useContext(CartContext);
    const productQuantity = getProductQuantity(id);

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Price:{price}
                </Card.Text>
                {
                    productQuantity > 0 ?
                        <>
                            <Form as={Row}>
                                <Form.Label column="true" sm="6">In Cart:{productQuantity}</Form.Label>
                                <Col sm="6">
                                    <Button variant="primary" className='mx-2' onClick={() => addOneToCart(id)}>
                                        +
                                    </Button>
                                    <Button variant="primary" className='mx-2' onClick={() => removeOneFromCart(id)}>
                                        -
                                    </Button>
                                </Col>
                            </Form>
                            <Button className='mt-2' sm="6" variant="danger" onClick={() => deleteFromCart(id)}>Remove from cart</Button>
                        </>
                        :
                        <Button variant="primary" onClick={() => addOneToCart(id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard