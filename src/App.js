import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllUser from './components/AllUser';
import EditPost from './components/EditPost';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
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
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><YourProfile/></PrivateRoute>} />
            <Route path="/edit/:id" element={<PrivateRoute><EditPost/></PrivateRoute>} />
            <Route path="/alluser" element={<PrivateRoute><AllUser/></PrivateRoute>} />
            <Route path="/users/:id" element={<PrivateRoute><UsersProfile/></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
