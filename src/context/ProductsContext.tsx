import { ReactNode, createContext, useState } from 'react'
import { DataType, data } from '../db'
import { formDeliveryData } from '../pages/checkout'

export interface ProductType extends DataType {
  qtd: number
}
interface ProductRequestType {
  id: string
  qtd: number
}
interface ProductsContextType {
  products: ProductType[]
  adress: formDeliveryData | undefined
  addInCart: (product: ProductRequestType) => void
  removeItemInCart: (id: string) => void
  updateQuantity: (item: ProductRequestType) => void
  AddNewAdress: (data: formDeliveryData) => void
}
export const ProductsContext = createContext({} as ProductsContextType)
interface ProductsContextProviderProps {
  children: ReactNode
}
export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([])
  const [adress, setAdress] = useState<formDeliveryData | undefined>(undefined)

  function AddNewAdress(data: formDeliveryData) {
    setAdress(data)
  }
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

  function updateQuantity({ id, qtd }: ProductRequestType) {
    const updatedProducts = products.map((item) => {
      if (item.id === id) return { ...item, qtd }
      else return item
    })

    setProducts(updatedProducts)
  }
  return (
    <ProductsContext.Provider
      value={{
        products,
        addInCart,
        removeItemInCart,
        updateQuantity,
        adress,
        AddNewAdress,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
