const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY)


app.use(express.json());
app.use(cors());


app.post("/checkout",async(req,res)=>{
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=>{
        lineItems.push({
            price:item.id,
            quantity:item.quantity
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/cancel`,
    })

    res.send(JSON.stringify({
        url:session.url
    }))
})



app.listen(process.env.PORT,()=>{
    console.log('server listening on '+process.env.PORT);
})