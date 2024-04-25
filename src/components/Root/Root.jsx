
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <div className='max-l-6xl max-auto p-9 py-4'>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Root;