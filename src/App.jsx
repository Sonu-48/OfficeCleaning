
// import './App.css'
import { Box} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import About_us from './pages/Home/AboutUs/About_Us';
import Cleaning_Services from './pages/Home/CleaningServices/Cleaning_Services';
import FAQs from './pages/Home/Faq/FAQs';
import Contact_Us from './pages/Home/ContactUs/Contact_Us';
import How_It_Works from './pages/Home/How-It-Works/How_It_Works';
import Why_Us from './pages/Home/Why Us/Why_Us';
import Feedback from './pages/Home/Feedback/Feedback';
import Blogs from './pages/Home/Blogs/Blogs';
import Get_Your_Quote from './pages/Home/Get-Your-Quote/Get_Your_Quote';

function App() {


  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomeLayout/>}/>
          <Route exact path='/about-us' element={<About_us/>}/>
          <Route exact path='/cleaning-service' element={<Cleaning_Services/>}/>
          <Route exact path='/faqs' element={<FAQs/>}/>
          <Route exact path='/contact-us' element={<Contact_Us/>}/>
          <Route exact path='/how-it-works' element={<How_It_Works/>}/>
          <Route exact path='/why-us' element={<Why_Us/>}/>
          <Route exact path='/feedback' element={<Feedback/>}/>
          <Route exact path='/blog' element={<Blogs/>}/>
          <Route exact path='/get-your-quote-now' element={<Get_Your_Quote/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </Box>
  )
}

export default App
