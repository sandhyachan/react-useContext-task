import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext([])

export default function ProductContextProvider({children}) {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5173/products.json')
        .then(response => response.json())
        .then(result => setData(result))
        .catch(err => console.log(`Error fetching data ${err}`))
    },[])

    console.log(data)

    return <ProductContext.Provider value={{data}}>
        {children}
    </ProductContext.Provider>
}