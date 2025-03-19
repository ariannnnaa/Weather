import { useRef } from 'react';
import { useGlobalContext } from '../context';
import icon from '../assets/images/icons/search.svg'

const Form = () => {
const {setCity} = useGlobalContext();
const search = useRef();

const sendCity = (e) => {
    e.preventDefault();
setCity((search.current.value).trim());
search.current.value = "";
}
    return (
        <form className="border-b-2 h-12 flex items-center mt-2 lg:m-6 md:pl-2 
        w-[200px] sm:w-fit" onSubmit={sendCity}>
<input type="text" ref={search} 
className='outline-none sm:w-[350px] xl:w-[450px] text-white placeholder:text-white 
bg-transparent' placeholder='Ваш город ...'/>  
<button type='submit'>
    <img src={icon} className='w-3 md:w-7' alt="search" />
</button>
        </form>
    );
}

export default Form;
