import React, { useContext, createContext, useEffect, useState } from 'react';

const WithoutShippingContext = createContext({})

export function WithoutShippingProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./resources/acima-10-reais.json')
      const data = await response.json()
      
      setData(data)
    }
   fetchData()
  }, [])

  return (
    <WithoutShippingContext.Provider value={{ data }}>
      {children}
    </WithoutShippingContext.Provider>
  )
}

export function useWithoutShipping() {
  const context = useContext(WithoutShippingContext)

  return context
}