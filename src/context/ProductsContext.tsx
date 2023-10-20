import { ReactNode, createContext, useEffect, useState } from 'react'
import { DataType, data } from '../db'
import { formDeliveryData } from '../pages/checkout'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export interface ProductType extends DataType {
  qtd: number
}
interface ProductRequestType {
  id: string
  qtd: number
}
interface ProductsContextType {
  products: ProductType[]
  adress: formDeliveryData | null
  addInCart: (product: ProductRequestType) => void
  removeItemInCart: (id: string) => void
  updateQuantity: (item: ProductRequestType) => void
  addNewAdress: (data: formDeliveryData) => void
  newOrder: (data: formDeliveryData) => void
}
export const ProductsContext = createContext({} as ProductsContextType)
interface ProductsContextProviderProps {
  children: ReactNode
}
export function ProductsContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<ProductType[]>(() => {
    const storedProducts = localStorage.getItem('Coffe-Delivery-Products')
    if (storedProducts) {
      return JSON.parse(storedProducts)
    }
    return []
  })
  const [adress, setAdress] = useState<formDeliveryData | null>(() => {
    const storedAdress = localStorage.getItem('Coffe-Delivery-Adress')
    if (storedAdress) {
      return JSON.parse(storedAdress)
    }
    return null
  })
  const navigate = useNavigate()

  useEffect(() => {
    const stateJSON = JSON.stringify(products)

    localStorage.setItem('Coffe-Delivery-Products', stateJSON)
  }, [products])

  useEffect(() => {
    const stateJSON = JSON.stringify(adress)

    localStorage.setItem('Coffe-Delivery-Adress', stateJSON)
  }, [adress])

  function addNewAdress(data: formDeliveryData) {
    setAdress(data)
  }
  function addInCart(product: ProductRequestType) {
    const isInCart = products.find((item) => product.id === item.id)
    if (isInCart) {
      const newArrayProducts = products.map((item) => {
        if (isInCart.id === item.id)
          return { ...isInCart, qtd: isInCart.qtd + 1 }
        return item
      })
      setProducts(newArrayProducts)
      toast(`☕ ${isInCart.name} adicionado ao carrinho`)
    } else {
      const ProductData = data.find((current) => current.id === product.id)
      if (ProductData) {
        const newProduct = Object.assign(ProductData, product)
        setProducts((state) => [...state, newProduct])
        toast(`☕ ${newProduct.name} adicionado ao carrinho`)
      }
    }
  }
  function newOrder(data: formDeliveryData) {
    navigate('/checkout/success')
    addNewAdress(data)
    setProducts([])
    toast.success('Compra realizada ')
  }

  function removeItemInCart(id: string) {
    const ProductsWithOutCurrent = products.filter((item) => item.id !== id)
    setProducts(ProductsWithOutCurrent)
    toast.error(`Produto retirado do carrinho`)
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
        addNewAdress,
        newOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
