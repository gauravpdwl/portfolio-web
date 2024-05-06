import { Link, Outlet } from "react-router-dom"
import navbarStyle from '../stylemodules/navbar.module.css'

function Navbar(){
    return <>
        <div className={navbarStyle.naavbar}>
            <Link className={`${navbarStyle.nvlink} ${navbarStyle.nvlinktitle}`} to="/">Hello World!</Link>
            <Link className={navbarStyle.nvlink} to="/projects">Projects</Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </>
}

export default Navbar;