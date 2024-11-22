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
        fetch('https://github.com/sandhyachan/react-useContext-task/blob/4a42b03b44f263748581a3ecee95f3e779867307/public/products.json')
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