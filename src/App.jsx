
// import './App.css'
import { Box} from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './HomeLayout'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import About_us from './pages/Home/AboutUs/About_Us';
// import Cleaning_Services from './pages/Home/CleaningServices/Cleaning_Services';
// import Get_Your_Quote from './pages/Home/Get-Your-Quote/Get_Your_Quote';
// import Blogs from './pages/Home/Blogs/Blogs';
// import FAQs from './pages/Home/Faq/FAQs';
// import Contact_Us from './pages/Home/ContactUs/Contact_Us';
// import How_It_Works from './pages/Home/How-It-Works/How_It_Works';
// import Why_Us from './pages/Home/Why Us/Why_Us';
// import Feedback from './pages/Home/Feedback/Feedback';
// import Carpet_Cleaning from './pages/Home/Carpet Cleaning/Carpet_Cleaning';
// import One_Off_Cleaning from './pages/Home/One Off Cleaning/One_Off_Cleaning';
// import Commercial_Cleaning from './pages/Home/Commercial Cleaning/Commercial_Cleaning';
// import Window_Cleaning from './pages/Home/Window Cleaning/Window_Cleaning';
// import Office_Cleaning_London from './pages/Home/Office Cleaning London/Office_Cleaning_London';
// import Daytime_Cleaning_London from './pages/Home/Daytime Cleaning London/Daytime_Cleaning_London';
// import Evening_Cleaning_London from './pages/Home/Evening Cleaning London/Evening_Cleaning_London';
// import Office_Cleaning_Services from './pages/Home/Office Cleaning Services/Office_Cleaning_Services';
import { Suspense, lazy } from 'react';
import ErrorPage from './Components/ErrorPage';

const About_us = lazy(()=>import('./pages/Home/AboutUs/About_Us'));
const Get_Your_Quote = lazy(()=>import('./pages/Home/Get-Your-Quote/Get_Your_Quote'));
const Cleaning_Services = lazy(()=>import('./pages/Home/CleaningServices/Cleaning_Services'));
const Blogs = lazy(()=>import('./pages/Home/Blogs/Blogs'));
const FAQs = lazy(()=>import ('./pages/Home/Faq/FAQs'));
const Contact_Us= lazy(()=>import('./pages/Home/ContactUs/Contact_Us'));
const How_It_Works =lazy(()=>import('./pages/Home/How-It-Works/How_It_Works'));
const Why_Us= lazy(()=>import ('./pages/Home/Why Us/Why_Us'));
const Feedback= lazy(()=>import('./pages/Home/Feedback/Feedback'));
const Carpet_Cleaning= lazy(()=>import('./pages/Home/Carpet Cleaning/Carpet_Cleaning'));
const One_Off_Cleaning= lazy(()=>import('./pages/Home/One Off Cleaning/One_Off_Cleaning'));
const Commercial_Cleaning= lazy(()=>import('./pages/Home/Commercial Cleaning/Commercial_Cleaning'));
const Window_Cleaning= lazy(()=>import('./pages/Home/Window Cleaning/Window_Cleaning'));
const Office_Cleaning_London= lazy(()=>import('./pages/Home/Office Cleaning London/Office_Cleaning_London'));
const Daytime_Cleaning_London= lazy(()=>import('./pages/Home/Daytime Cleaning London/Daytime_Cleaning_London'));
const Evening_Cleaning_London= lazy(()=>import('./pages/Home/Evening Cleaning London/Evening_Cleaning_London'));
const Office_Cleaning_Services= lazy(()=>import('./pages/Home/Office Cleaning Services/Office_Cleaning_Services'));


function App() {


  return (
    <Box>
      <BrowserRouter>
      <Suspense fallback={<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>Loading...</div>}>
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
          <Route exact path='/carpet-cleaning-london' element={<Carpet_Cleaning/>}/>
          <Route exact path='/one-off-cleaning-london' element={<One_Off_Cleaning/>}/>
          <Route exact path='/commercial-cleaning' element={<Commercial_Cleaning/>}/>
          <Route exact path='/window-cleaning' element={<Window_Cleaning/>}/>
          <Route exact path='/office-cleaning-london' element={<Office_Cleaning_London/>}/>
          <Route exact path='/daytime-cleaning-benefits' element={<Daytime_Cleaning_London/>}/>
          <Route exact path='/evening-cleaning-benefits' element={<Evening_Cleaning_London/>}/>
          <Route exact path='/office-cleaning-services' element={<Office_Cleaning_Services/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>
      <ToastContainer/>
    </Box>
  )
}

export default App
