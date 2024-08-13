import { Route, Routes } from 'react-router-dom'
import { Header } from './components/header/header'
import Index from './pages/index/index.tsx'
import Tournament from './pages/tournament/tournament.tsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/tournament' element={<Tournament />}/>
      </Routes>
    </>
  )
}

export default App
