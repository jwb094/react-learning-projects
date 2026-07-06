import React from 'react';
import { Outlet } from "react-router";
import Header from '../Header';
import Footer from '../Footer';
import "../../assets/styles/main-content.css"
function Default(props) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-grow-1 page-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Default;