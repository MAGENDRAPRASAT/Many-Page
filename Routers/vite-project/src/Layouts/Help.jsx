import { NavLink, Outlet } from "react-router-dom";

const Help = () => {
    return ( 
        <div className="hepl-layout">
            <NavLink to="faq">Faq</NavLink>
            <NavLink to="contact">contact</NavLink>
            <Outlet/>
        </div>
     );
}
 
export default Help;