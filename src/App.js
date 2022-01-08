import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllUser from './components/AllUser';
import EditPost from './components/EditPost';
import Home from './components/Home';
import Login from './components/Login';
import UsersProfile from './components/UsersProfile';
import YourProfile from './components/YourProfile';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<YourProfile/>} />
            <Route path="/edit/:id" element={<EditPost/>} />
            <Route path="/alluser" element={<AllUser/>} />
            <Route path="/users/:id" element={<UsersProfile/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
