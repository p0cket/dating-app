import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import SignUp from "./components/auth/SignUp"
import SignIn from "./components/auth/SignIn"
import Profile from "./pages/Profile"
import SwipeContainer from "./components/swiping/SwipeContainer"
import Submission from "./components/conversation/Submission"
import Chat from "./components/messaging/Chat"
import { MainProvider } from "./context/MainContext"

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/swipe" element={<SwipeContainer />} />
            <Route path="/chat/:matchId" element={<Chat />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </Router>
      </MainProvider>
    </ThemeProvider>
  )
}

export default App
