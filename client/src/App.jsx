import './App.css'
import Login from './pages/Login';
import Home from './pages/Home'
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import SingleMovie from './pages/SingleMovie';
import BookShow from "./pages/BookShow";

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

            <Route path='/movie/:id' element={
              <ProtectedRoute>
                <SingleMovie />
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
            <Route path="/book-show/:id" element={<ProtectedRoute><BookShow /></ProtectedRoute>} />
            {/* <Route path='/register' element={<Register />} />  */}

          </Routes>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
