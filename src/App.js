
import { useState } from 'react';
import './App.css';
import AppNav from './components/AppNav';
import AppRouters from './routes/AppRoutes';
import axios from 'axios';


function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common['Authorization'] = "Bearer" + (user ? user.jwt_token : "")

  return (
    <div className="App">
      <AppNav user={user} setUser={setUser}/>
      <AppRouters user={user} setUser={setUser}/>
   </div>
  );
}

export default App;
