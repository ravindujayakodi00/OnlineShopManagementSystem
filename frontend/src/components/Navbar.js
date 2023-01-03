import {Link} from "react-router-dom";


const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand brand-name" href="/">DAMISCO</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Products
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/allproducts">All Products</Link></li>
                        <li><Link className="dropdown-item" to='/mobilephones'>Mobile Phones</Link></li>
                        <li><Link className="dropdown-item" to='/laptops'>Laptops</Link></li>
                        <li><Link className="dropdown-item" to='/televisions'>Televisions</Link></li>
                        <li><Link className="dropdown-item" to='/others'>Others</Link></li>
                        
                    </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Contact</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Login</a>
                </li>
                <li className="nav-item">
                <button className="btn btn-dark">Sign Up</button>
                </li>
            </ul>
            </div>
      </nav>      
    );
}
 
export default Navbar;