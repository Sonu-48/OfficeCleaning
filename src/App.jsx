
// import './App.css'
import { Box} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import About_us from './pages/Home/AboutUs/About_Us';

function App() {


  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeLayout/>}/>
          <Route exact path='/about-us' element={<About_us/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </Box>
  )
}

export default App
