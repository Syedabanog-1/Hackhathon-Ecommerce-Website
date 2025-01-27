"use client"

import type React from "react"
import { useState, createContext, useContext, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  toastType?: "success" | "error" | "info"
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose, toastType }) => {
  const pathname = usePathname()

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <div
      className={`fixed top-4 right-4 z-50 shadow-lg rounded-lg p-4 min-w-[300px] ${
        toastType === "success" ? "bg-white text-black" : toastType === "error" ? "bg-red-500 text-white" : "bg-white"
      }`}
    >
      <button onClick={onClose} className="absolute top-2 right-2 text-current hover:opacity-70" aria-label="Close">
        ×
      </button>
      <div className="text-center mb-4">{message}</div>
      <div className="flex justify-center gap-4">
        <Link
          href="/product"
          onClick={handleLinkClick}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          Continue Shopping
        </Link>
        <Link
          href="/cart"
          onClick={handleLinkClick}
          className="px-4 py-2 bg-[#029FAE] hover:bg-[#076068] text-white rounded-lg transition-colors"
        >
          {pathname === "/cart" ? "Stay in Cart" : "Visit Cart"}
        </Link>
      </div>
    </div>
  )
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; isVisible: boolean; type?: "success" | "error" | "info" }>({
    message: "",
    isVisible: false,
  })

  const showToast = (message: string, type?: "success" | "error" | "info") => {
    setToast({ message, isVisible: true, type })
  }

  const hideToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast message={toast.message} isVisible={toast.isVisible} onClose={hideToast} toastType={toast.type} />
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export default Toast
