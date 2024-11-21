import { createContext, useEffect, useState } from "react";

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
        fetch('http://localhost:5173/products.json')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(err => console.log(`Error fetching data ${err}`))
    },[])

    function handleIncrement(index){
        const dataCopy = [...data]
        dataCopy[index].quantity +=1
        setSubtotal(subtotal+dataCopy[index].price)
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
        setSubtotal(subtotal-dataCopy[index].price)
        setData(dataCopy)
     }
    
    return <ProductContext.Provider value={{data, handleIncrement, handleDecrement, subtotal, items, setItems}}>
        {children}
    </ProductContext.Provider>
}