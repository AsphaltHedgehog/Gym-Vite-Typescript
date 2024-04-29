import NavBar from "@/scenes/navbar"
import { useState } from "react"


function App() {
  const [ selectedPage, setSelectedPage ] = useState('')

  return (
    <div className="app bg-gray-20">
      <NavBar />
      </div>
  )
}

export default App
