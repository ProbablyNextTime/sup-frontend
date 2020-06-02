import React, { useReducer } from "react"
import { IUser } from "@jetkit/react"

export interface IUserContext {
  user: IUser
  handleSettingUser: (user: IUserState) => void
}

export interface IUserState {
  user?: IUser
}

const initialUser: IUser = {
  id: localStorage.getItem("userId") || "none",
  email: localStorage.getItem("username") || "guest@guest.guest",
}

const initialUserContext: IUserContext = {
  user: initialUser,
  handleSettingUser: (user: IUserState) => {
    throw new Error("Method not implemented.")
  },
}

const reducer = (state: IUserContext, action: any) => {
  switch (action.type) {
    case "handleSettingUser":
      return {
        ...state,
        user: action.payload.user,
      }
    default:
      return state
  }
}

const UserContext: React.Context<IUserContext> = React.createContext(initialUserContext)

const UserContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialUserContext)

  return (
    <UserContext.Provider
      value={{
        ...state,
        handleSettingUser: (user: IUserState) => {
          dispatch({ type: "handleSettingUser", payload: user })
          localStorage.setItem("username", user.user?.email || "guest@guest.guest")
          localStorage.setItem("userId", (user.user?.id || "none") as string)
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContextProvider, UserContext }
