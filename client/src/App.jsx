import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Signin';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (
  <BrowserRouter>
  <header />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Sign-in" element={<Signin />} />
      <Route path="/Sign-up" element={<SignUp />} />
      <Route path="/About" element={<About />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  </BrowserRouter>
  )
}