import { Home } from './Screens/home';
import { BookSession } from './Screens/BookSession/bookSession';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SessionProvider } from './Context/SessionContext';
import { LogIn } from './Screens/SignIn/logIn';
import { ForgotPassword } from './Screens/SignIn/forgotPassword';
import { Profile } from './Screens/Profile/profile';
import {Checkout} from './Screens/Checkout/checkout';
import { Pricing } from './Screens/Pricing/pricing';
import { Vastu } from './Screens/Vastu/vastu';
import { TermsAndConditions } from './Components/Legal/TermsAndConditions';
import { PrivacyPolicy } from './Components/Legal/PrivacyPolicy';
import { RefundPolicy } from './Components/Legal/RefundPolicy';
import { Otp } from './Screens/SignIn/otp';
import { Admin } from './Screens/Admin/admin';



function App() {
  return (
    <Router>
      <SessionProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin_panel' element={<Admin/>}/>
          <Route path='/book_session' element={<BookSession />} />
          <Route path='/signIn' element={<LogIn/>}/>
          <Route path='/auth/verifyemail/otp' element={<Otp/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/book_session/checkout' element={<Checkout/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/Vastu' element={<Vastu/>}/>
          <Route path='/passwordResetAuth' element={<ForgotPassword/>}/>
          <Route path='/Terms&Conditions' element={<TermsAndConditions/>}/>
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
        </Routes>
      </SessionProvider>
    </Router>
  );
}

export default App;
