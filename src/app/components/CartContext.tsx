"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"
import type { StaticImageData } from "next/image"

export interface CartItem {
  id: number
  image: string | StaticImageData
  name: string
  color: string
  size: string
  quantity: number
  price: number
}

interface CartContextType {
  cartItems: CartItem[]
  addItem: (item: CartItem) => void
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cartItems")
      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
    }
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
      } catch (error) {
        console.error("Error saving cart to localStorage:", error)
      }
    }
  }, [cartItems, isInitialized])

  const addItem = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        // Only update quantity if explicitly provided
        const newQuantity = item.quantity || existingItem.quantity + 1
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: newQuantity } : i))
      }
      // Ensure new items have a quantity of 1 if not specified
      return [...prevItems, { ...item, quantity: item.quantity || 1 }]
    })
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
    localStorage.removeItem("cartItems")
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isInitialized) return null

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export default CartContext

