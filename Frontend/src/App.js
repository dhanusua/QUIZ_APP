
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './component/login';

import WelcomePage from './component/WelocomePage';
import SignUpPage from './component/SignupPage';
import Quizpage from './component/quiz/Quizpage';
import Result from './component/quiz/result';
import Adminques from './component/quiz/AdminPage/AdminQues';
import Adminpage from './component/quiz/AdminPage/adminpage';
import Updateques from './component/quiz/AdminPage/UpdateQues';
import Addques from './component/quiz/AdminPage/Addque';

function App() {
 
  
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/adminpage' element={<Adminpage/>}/>
        <Route path='/signup' element ={<SignUpPage/>}/>
        <Route path='/QuizPage' element={<Quizpage/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/admin/questionpage' element={<Adminques/>}/>
        <Route path='/update' element={<Updateques/>}/>
        <Route path='/addQues' element={<Addques/>}/>
        </Routes></BrowserRouter>
      
 
  );
}

export default App;
