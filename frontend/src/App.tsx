import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/header'
import Index from './pages/index/index.tsx'
import Tournament from './pages/tournament/tournament.tsx'
import NotFound from './pages/notFound/NotFound.tsx'
import Bracket from './pages/tournament/bracket/Bracket.tsx'
import TournamentTeams from './pages/tournament/tournamentTeams/tournamentTeams.tsx'
import TournamentResults from './pages/tournament/tournamentResults/tournamentResults.tsx'
import TournamentRules from './pages/tournament/tournamentRules/tournamentRules.tsx'
import { BracketType } from './pages/tournament/bracket/types.ts'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='tournament' element={<Tournament />}>
          <Route index element={<Navigate to="upper-bracket" replace />} />
          <Route path='upper-bracket' element={<Bracket type={BracketType.upperBracket} />}/>
          <Route path='lower-bracket' element={<Bracket type={BracketType.lowerBracket} />}/>
          <Route path='teams' element={<TournamentTeams />}/>
          <Route path='results' element={<TournamentResults />}/>
          <Route path='rules' element={<TournamentRules />}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
