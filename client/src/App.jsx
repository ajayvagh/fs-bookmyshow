import './App.css'
import Login from './pages/Login';
import Home from './pages/Home'
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>

          <Routes>

            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />

            <Route path='/profile' element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />

            <Route path='/admin' element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/register' element={<Register />} />  */}

          </Routes>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
