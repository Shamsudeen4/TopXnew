
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Wallet from './Components/Walletn';
import Test from './Components/Test';

import Latest from './Components/Latest';

import ChallengeD from './Components/ChallengeD.js';
import Home from './Components/Home';
import Trending from './Components/Trending';
import NewChallenges from './Components/NewChallenges';
import User from './Components/User';
import Update from './Components/Update'
import Fund from './Components/Fund'
import WithdrawFund from './Components/WithdrawFund.js';


import Latestt from './Components/Latestt.js';
import ForgetPassword from './Components/ForgetPassword.js';
import Loginp from './Components/Loginp.js';
import MessageT from './Components/MessageT.js';
import ResetPassword from './Components/ResetPassword.js';
import SignUpp from './Components/SignUpp.js';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       
   
        <Route path='/wallet' element={<Wallet/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/user' element={<User/>}/>
        
        <Route path='/latest' element={<Latest/>}/>
        <Route path='/newChallenge' element={<NewChallenges/>}/>
        <Route path='/challengeDetail' element={<ChallengeD/>}/>

        <Route path='/' element={<Home/>}/>
        <Route path='/trend' element={<Trending/>}/>
        <Route path='/update' element={<Update/>}/>
        <Route path='/fund' element={<Fund/>}/>
        <Route path='/withdraw' element={<WithdrawFund/>}/>
        <Route path='/signup' element={<SignUpp/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
        <Route path='/message' element={<MessageT/>}/>
        <Route path='/login' element={<Loginp/>}/>
        <Route path='/forget' element={<ForgetPassword/>}/>
        <Route path='/latestt' element={<Latestt/>}/>
  


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
