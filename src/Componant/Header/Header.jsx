import { Link, NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";



const Header = () => {
    const [open, setOpen] = useState(false);

   const RouteList = <>
        <NavLink className='md:px-4 px-6 md:py-2 py-2 rounded-lg md:hover:bg-slate-300 hover:bg-slate-900' to='/'>Home</NavLink>
        <NavLink className='md:px-4 px-6 md:py-2 py-2 rounded-lg md:hover:bg-slate-300 hover:bg-slate-900' to='/donation'>Donation</NavLink>
        <NavLink className='md:px-4 px-6 md:py-2 py-2 rounded-lg md:hover:bg-slate-300 hover:bg-slate-900' to='/statistics'>Statistics</NavLink>
   </>

    
    return (
        <div>   
               

                <nav className="flex  justify-between items-center md:my-4 my-3 md:py-2 py-1">
                    <Link to={'/'}>
                    <div className="w-1/2 md:w-full"><img src="https://i.postimg.cc/SRFGtnjP/Logo.png" alt="" />
                    </div></Link>
                    <div>
                    
                  <div>
                  <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                    {/* menu  */}

                    {
                        open ?   <AiOutlineClose />:<RiMenu3Fill />
                    }
                    
                    
                  </div>

                        <ul className={`flex z-50 duration-500 flex-col md:flex-row font-bold gap-2 absolute md:static md:gap-8
                        ${open ? 'top-16 right-2    rounded-lg bg-slate-500 md:bg-white text-white md:text-black ' : 'right-2 -top-60'}
                        `}>
                              {RouteList}
                        </ul>
                    </div>
                    </div>
                    
                </nav>
        </div>
    );
};

export default Header;