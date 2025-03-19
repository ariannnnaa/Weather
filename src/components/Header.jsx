import Form from './Form'
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div className='flex justify-between container mx-auto'>
            <img src={logo} className='w-24 sm:w-40 lg:w-60' alt="logo" />
            <Form/>    
                </div>
    );
}

export default Header;
