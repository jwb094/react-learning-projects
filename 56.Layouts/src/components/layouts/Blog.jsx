import React from 'react';
import { Outlet } from "react-router";
import Header from '../Header';
import Footer from '../Footer';
import "../../assets/styles/main-content.css"
function Blog(props) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="flex-grow-1 page-content">
                <div className="container">
                    <div className="row">

                        {/* Main content */}
                        <div className="col-12 col-md-9">
                            <Outlet />
                        </div>

                        {/* Sidebar */}
                        <aside className="col-12 col-md-3">
                            <div className="p-3 bg-light rounded">
                                Sidebar content here
                            </div>
                        </aside>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Blog;