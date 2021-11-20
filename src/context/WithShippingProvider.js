import React, { useContext, createContext, useEffect, useState } from 'react';

const WithShippingContext = createContext({})

export function WithShippingProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./resources/abaixo-10-reais.json')
      const data = await response.json()

      setData(data)
    }
   fetchData()
  }, [])

  return (
    <WithShippingContext.Provider value={{ data }}>
      {children}
    </WithShippingContext.Provider>
  )
}

export const useWithShipping = () => {
  const context = useContext(WithShippingContext)

  return context
}