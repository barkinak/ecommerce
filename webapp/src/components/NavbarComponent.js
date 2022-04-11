import React from "react"
import MyCartDropdown from "./MyCartDropdown"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

const NavbarComponent = (pageProps) => {
    const [cartItems, dispatch] = useContext(CartContext);

    return(
        <header className="shadow-sm">
            <div className="navbar-sticky bg-light">
                <div className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        {/*
                            <a className="navbar-brand d-none d-sm-block me-3 flex-shrink-0" href="index.html">
                                <img src="img/logo.png" width="142" alt="MainLogo"/>
                            </a>
                            <a className="navbar-brand d-sm-none me-2" href="index.html">
                                <img src="img/logo.png" width="74" alt="MainLogo"/>
                            </a>
                        */}

                        <div className="input-group d-none d-lg-flex flex-nowrap mx-4">
                            <i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                            <input 
                                className="form-control rounded-start w-100" 
                                type="text" 
                                placeholder="Search for products"/>
                            <select className="form-select flex-shrink-0" style={{width: '10.5rem'}}>
                                <option>All categories</option>
                                <option>Computers</option>
                                <option>Smartphones</option>
                                <option>TV, Video, Audio</option>
                                <option>Cameras</option>
                                <option>Headphones</option>
                                <option>Wearables</option>
                                <option>Printers</option>
                                <option>Video Games</option>
                                <option>Home Music</option>
                                <option>Data Storage</option>
                            </select>
                        </div>

                        <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                            <button 
                                className="navbar-toggler" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-tool navbar-stuck-toggler" href="#">
                                <span className="navbar-tool-tooltip">Toggle menu</span>
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-menu"></i>
                                </div>
                            </a>
                            <a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                                <div className="navbar-tool-icon-box">
                                    <i className="navbar-tool-icon ci-user"></i>
                                </div>
                                <div className="navbar-tool-text ms-n3">
                                    <small>Sign in</small>My Account
                                </div>
                            </a>
                            <div className="navbar-tool dropdown ms-3">
                                <a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="test-next.html">
                                    <span className="navbar-tool-label">
                                        {Object.keys(cartItems).length > 0 && Object.keys(cartItems).length}
                                    </span>
                                    <i className="navbar-tool-icon ci-cart"></i>
                                </a>
                                <a className="navbar-tool-text" href="test-next.html">
                                    <small>My Cart</small>$1,247.00
                                </a>
                                <MyCartDropdown></MyCartDropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavbarComponent