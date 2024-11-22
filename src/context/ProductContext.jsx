import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const ProductContext = createContext({
    data: [],
    handleIncrement: ()=>{},
    handleDecrement: ()=>{},
    subtotal: 0,
    items: 0,
    setItems: ()=>{},
})

export default function ProductContextProvider({children}) {

    const [data, setData] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [items, setItems] = useState(0)

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sandhyachan/JSON-Files/refs/heads/main/contextApi/products.json')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(err => console.log(`Error fetching data ${err}`))
    },[])

    function handleIncrement(index){
        const dataCopy = [...data]
        dataCopy[index].quantity +=1
        setItems(items+1)
        setData(dataCopy)
    }

    function handleDecrement(index) {
        const dataCopy = [...data]
        if (dataCopy[index].quantity <= 0){
            return
        }
        dataCopy[index].quantity -=1
        setItems(items-1)
        setData(dataCopy)
     }

     useEffect(() => {
        const newSubtotal = data.reduce((acc, product) => acc + product.price * product.quantity, 0)
        setSubtotal(newSubtotal)
    }, [data])
    
    return <ProductContext.Provider value={{data, handleIncrement, handleDecrement, subtotal, items}}>
        {children}
    </ProductContext.Provider>
}

ProductContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}