import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import { Box } from "@chakra-ui/react"
import HomePage from "./pages/homePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"

function App() {

  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </Box>
  )
}

export default App
