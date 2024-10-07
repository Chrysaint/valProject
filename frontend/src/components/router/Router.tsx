import { Navigate, Route, Routes } from "react-router-dom";
import Index from "../../pages/index/Index";
import Tournament from "../../pages/tournament/Tournament";
import Bracket from "../../pages/tournament/bracket/Bracket";
import TournamentTeams from "../../pages/tournament/tournamentTeams/TournamentTeams";
import { BracketType } from "../../pages/tournament/bracket/types";
import TournamentResults from "../../pages/tournament/tournamentResults/TournamentResults";
import TournamentRules from "../../pages/tournament/tournamentRules/TournamentRules";
import SignUp from "../../pages/auth/signup/SignUp";
import SignIn from "../../pages/auth/signin/SingIn";
import Account from "../../pages/auth/account/Account";
import NotFound from "../../pages/notFound/NotFound";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="tournament" element={<Tournament />}>
          <Route index element={<Navigate to="upper-bracket" replace />} />
          <Route
            path="upper-bracket"
            element={<Bracket type={BracketType.upperBracket} />}
          />
          <Route
            path="lower-bracket"
            element={<Bracket type={BracketType.lowerBracket} />}
          />
          <Route path="teams" element={<TournamentTeams />} />
          <Route path="results" element={<TournamentResults />} />
          <Route path="rules" element={<TournamentRules />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
