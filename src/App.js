import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SessionProvider } from './Context/SessionContext';


// import { Home } from './Screens/home';
// import { BookSession } from './Screens/BookSession/bookSession';
// import { LogIn } from './Screens/SignIn/logIn';
// import { ForgotPassword } from './Screens/SignIn/forgotPassword';
// import { Profile } from './Screens/Profile/profile';
// import {Checkout} from './Screens/Checkout/checkout';
// import { Pricing } from './Screens/Pricing/pricing';
// import { Vastu } from './Screens/Vastu/vastu';
// import { TermsAndConditions } from './Components/Legal/TermsAndConditions';
// import { PrivacyPolicy } from './Components/Legal/PrivacyPolicy';
// import { RefundPolicy } from './Components/Legal/RefundPolicy';
// import { Otp } from './Screens/SignIn/otp';
// import { Admin } from './Screens/Admin/admin';

import {CustomBarLoader} from './Components/Loader/Loader';

//lazy load importing
const Home = lazy(() => import('./DefaultExports/Home'));
const Admin = lazy(() => import('./DefaultExports/Admin'));
const BookSession = lazy(() => import('./DefaultExports/BookSession'));
const LogIn = lazy(() => import('./DefaultExports/LogIn'));
const Otp = lazy(() => import('./DefaultExports/Otp'));
const Profile = lazy(() => import('./DefaultExports/Profile'));
const Checkout = lazy(() => import('./DefaultExports/Checkout'));
const Pricing = lazy(() => import('./DefaultExports/Pricing'));
const Vastu = lazy(() => import('./DefaultExports/Vastu'));
const ForgotPassword = lazy(() => import('./DefaultExports/ForgotPassword'));
const TermsAndConditions = lazy(() => import('./DefaultExports/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./DefaultExports/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./DefaultExports/RefundPolicy'));



function App() {
  return (
    <Router>
      <SessionProvider>
        <Suspense fallback={<CustomBarLoader/>}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/admin_panel' element={<Admin />} />
            <Route path='/book_session' element={<BookSession />} />
            <Route path='/signIn' element={<LogIn />} />
            <Route path='/auth/verifyemail/otp' element={<Otp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/book_session/checkout' element={<Checkout />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/Vastu' element={<Vastu />} />
            <Route path='/passwordResetAuth' element={<ForgotPassword />} />
            <Route path='/Terms&Conditions' element={<TermsAndConditions />} />
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} /> 
             <Route path='/RefundPolicy' element={<RefundPolicy />} />
          </Routes>
        </Suspense>
      </SessionProvider>
    </Router>
  );
}

export default App;
