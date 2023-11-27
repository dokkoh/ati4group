import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OldEditions from './pages/OldEditions';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import Sitemap from './pages/Sitemap';
import QrCode from './pages/QrCode';
import AdminPage from './pages/Admin';
import Error from './pages/Error';

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/anciennes-editions' element={<OldEditions />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/mentions-legales-rgpd' element={<LegalNotice />} />
                <Route path='/plan-du-site' element={<Sitemap />} />
                <Route path='/qrcode' element={<QrCode />} />
                <Route path='*' element={<Error />} />
                <Route path='/admin' element={<AdminPage />} />
            </Routes>
        </>
    )
}

export default App;