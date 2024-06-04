import React, { createContext, useReducer } from "react"
import { mockProfiles } from "../components/consts/consts"
// import { mockProfiles } from '../consts/consts';

const MainContext = createContext()

const initialState = {
  profiles: mockProfiles,
  currentIndex: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT_PROFILE":
      const newIndex = state.currentIndex + 1
      return {
        ...state,
        currentIndex: newIndex,
        profiles: newIndex >= state.profiles.length ? [] : state.profiles,
      }
    default:
      return state
  }
}

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainProvider }
