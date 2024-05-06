import { Link, Outlet, useLocation } from "react-router-dom"
import navbarStyle from '../stylemodules/navbar.module.css'

function Navbar(){

    let location=useLocation();
    // console.log(location.pathname);

    return <>
        <div className={navbarStyle.naavbar}>
            <div>
                <Link className={`${navbarStyle.nvlink} ${navbarStyle.nvlinktitle}`} to="/">Hello World!</Link>
            </div>
            <div className={navbarStyle.childnaavbar}>
                <Link className={`${navbarStyle.nvlink} ${location.pathname==='/projects'? navbarStyle.activenvlink:''}`} to="/projects">Projects</Link>
                <Link className={`${navbarStyle.nvlink} ${location.pathname==='/connect'? navbarStyle.activenvlink:''}`} to="/connect">Connect</Link>
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
    </>
}

export default Navbar;