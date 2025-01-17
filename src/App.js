import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Specialisation from './pages/Specialisation';
import Dhire from './rec/Dhire';
import Rpo from './rec/Rpo';
import Executive from './rec/Executive';
import Jd from './rec/Jd';
import Cv from './rec/Cv';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='about' element={<Aboutus />}></Route>
            <Route path='contact' element={<Contactus />}></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path='specialisation' element={<Specialisation />}></Route>
            <Route path='/services/permanent-recruitment' element={<Dhire />}></Route>
            <Route path='/services/rpo-remote-working' element={<Rpo />}></Route>
            <Route path='/services/executive-search' element={<Executive />} />
            <Route path='/contact/send-job-description' element={<Jd />} />
            <Route path='/contact/send-your-cv' element={<Cv />}></Route>
           {/* <Route path='trackorder' element={<TrackOrderScreen />} />
            <Route path='login' element={<LoginScreen />}></Route>
            <Route path='thankyou' element={<ThankYouScreen />}></Route>
            <Route path='page-not-found' element={<PageNotFound />}></Route>
            <Route path='*' element={<PageNotFound />}></Route> */}
        </Routes>
        </>
    );
}

export default App;
