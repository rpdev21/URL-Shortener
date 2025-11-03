import {Route , Routes} from 'react-router-dom';
import Register from '../../modules/user/pages/register';
import { Login } from '../../modules/user/pages/login';
import { Home } from '../../modules/user/pages/home';
import { Dashboard } from '../../modules/dashboard/dashboard';
import { AllUrls } from '../../modules/urlshortner/pages/AllUrls';
import { UrlShort } from '../../modules/urlshortner/pages/UrlShort';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<UrlShort/>} />
            <Route path="shorten" element={<UrlShort/>} />
            <Route path="links" element={<AllUrls/>} />
            </Route>

        </Routes>
    );
}