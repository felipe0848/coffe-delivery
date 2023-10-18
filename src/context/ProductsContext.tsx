import { ReactNode, createContext, useState } from 'react'
import { DataType, data } from '../db'

export interface ProductType extends DataType {
  qtd: number
}
interface ProductRequestType {
  id: string
  qtd: number
}
interface ProductsContextType {
  products: ProductType[]
  addInCart: (product: ProductRequestType) => void
  removeItemInCart: (id: string) => void
}
export const ProductsContext = createContext({} as ProductsContextType)
interface ProductsContextProviderProps {
  children: ReactNode
}
export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([])

  function addInCart(product: ProductRequestType) {
    const ProductData = data.find((current) => current.id === product.id)
    if (ProductData) {
      const newProduct = Object.assign(ProductData, product)
      setProducts((state) => [...state, newProduct])
    }
  }
  function removeItemInCart(id: string) {
    const ProductsWithOutCurrent = products.filter((item) => item.id !== id)
    setProducts(ProductsWithOutCurrent)
  }
  return (
    <ProductsContext.Provider value={{ products, addInCart, removeItemInCart }}>
      {children}
    </ProductsContext.Provider>
  )
}
