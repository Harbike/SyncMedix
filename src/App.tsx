import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [] = useState(0)

  return (
    <>
       <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<Login />} /> */}
        </Routes>
      </main>
    </>
  )
}

export default App
