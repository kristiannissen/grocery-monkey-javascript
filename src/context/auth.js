/**
 *
 */
import { createContext } from "react"

export const AuthState = {
  token: "",
  hasToken: false
}

export const AuthContext = createContext(AuthState)
