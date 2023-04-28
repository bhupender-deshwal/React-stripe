import React, { useState, useContext } from 'react'
import { Button, Navbar, Modal } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { getProductsData } from '../productsDummy';


const NavbarComponent = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const { items, getTotalCost } = useContext(CartContext);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = ()=>{
        fetch('http://localhost:8000/checkout',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items})
        }).then(res=>{
            return res.json();
        }).then(res=>{
            console.log({res})
            if(res.url){
                window.location.assign(res.url);
            }
        })
        
    }

    return (
        <>
            <Navbar expand="sm">
                <Navbar.Brand href="#home">Ecommerce Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Button onClick={handleShow}>Cart {items.length} items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {items.length > 0 ?
                        items.map(item => {
                            const product = getProductsData(item.id)
                            return <div key={item.id}>
                                <h2>{product.title}</h2>
                                <p>Price:{product.price} Quantity:{item.quantity}</p>
                            </div>
                        }) :
                        <h1> Please add items!</h1>
                    }
<Button variant="primary" onClick={()=>setShow2(true)}>
                        open2
                    </Button>
                </Modal.Body>
                {items.length > 0 ?
                <Modal.Footer>
                    <p><b>Total Amount :</b> {getTotalCost()}</p>
                    <Button variant="primary" onClick={checkout}>
                        Checkout
                    </Button>
                </Modal.Footer>:null}
                
            </Modal>
            <Modal show={show2} onHide={()=>setShow2(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>modal 2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h1> Please add items!</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>setShow2(false)}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={()=>setShow2(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>modal 2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h1> Please add items!</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>setShow2(false)}>
                        close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default NavbarComponent