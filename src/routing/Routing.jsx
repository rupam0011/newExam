import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../layouts/Header';
import Page from '../components/page';

const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Page />} />
            </Routes>
        </Router>
    );
};

export default Routing;
