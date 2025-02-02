import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";


function App() {
  
  return (
    <Router>
        <Routes>
          <Route path = "/" element={<HomePage/>}/>
          <Route path = "/signup" element={<SignupPage/>}/>
          <Route path = "/login" element={<LoginPage/>} />
          <Route path = "*" element={<Oops/>}/>
        </Routes>
    </Router>
  )
}

export default App
