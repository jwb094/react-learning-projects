import React, { useState } from 'react';
import '../assets/styles/header.css'
function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className={` top-0 start-0 w-100 py-3 ${isOpen ? "header-Open bg-light shadow-sm" : "header-Closed "} `} style={{ zIndex: 1000 }}>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light p-0 sticky-top">

                    {/* Brand */}
                    <a className="navbar-brand brandName fw-bold fs-3" href="#">
                        Horizon Interactive
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                        onClick={() => setIsOpen(!isOpen)}

                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation */}
                    <div
                        className="collapse navbar-collapse"
                        id="navbarContent"
                    >

                        {/* Center Menu */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link menu-link  px-lg-3" href="#">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link  px-lg-3" href="#">
                                    Product
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link  px-lg-3" href="#">
                                    Pricing
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link menu-link  px-lg-3" href="#">
                                    Contact
                                </a>
                            </li>

                        </ul>

                        {/* User Actions */}
                        <div className="d-flex align-items-lg-center gap-3 mt-3 mt-lg-0">

                            <a
                                href="#"
                                className="text-decoration-none menu-link  fw-medium"
                            >
                                Login
                            </a>

                            <button className="btn  header-cta rounded px-4">
                                Become a Member <i class="bi bi-arrow-right"></i>
                            </button>

                        </div>

                    </div>

                </nav>

            </div>
        </header>
    );
}

export default Header;