
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Wallet from './Components/Wallet';
import Test from './Components/Test';
import TrendingBet from './Components/TrendingBet';
import Latest from './Components/Latest';
import NewChallenge from './Components/NewChallenge';
import ChallengeDetail from './Components/ChallengeDetail';
import WithdrawFund from './Components/WithdrawFund';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/trendingBet' element={<TrendingBet/>}/>
        <Route path='/latest' element={<Latest/>}/>
        <Route path='/newChallenge' element={<NewChallenge/>}/>
        <Route path='/challengeDetail' element={<ChallengeDetail/>}/>
        <Route path='/withdrawFund' element={<WithdrawFund/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
