export const productsData = [
    {
        id:"price_1MvghWSGe4R2pBzo5LGVDHQB",
        title:'Coffee',
        price:50.00
    },
    {
        id:"price_1MvgijSGe4R2pBzouh7hfxgF",
        title:'Sunglasses',
        price:800.00
    },
    {
        id:"price_1MvgjcSGe4R2pBzoFRklxT3A",
        title:'Camera',
        price:500.00
    }
]
export const getProductsData = (id)=>{
    return productsData.find(product=>product.id === id)
}