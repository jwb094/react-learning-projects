import React from 'react';
import { Link } from "react-router";
const Jumbotron = ({ title }) => {
    return (
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 className="display-1 fw-bold text-danger">{title}</h1>

                <h2 className="mb-3">
                    Oops! Page Not Found
                </h2>
                <p className="lead text-muted mb-4">
                    The page you're looking for doesn't exist,
                    may have been moved, or the URL may be incorrect.
                </p>

                <Link
                    to="/"
                    className="btn btn-primary btn-lg"
                >
                    Return Home
                </Link>
            </div>
        </div >
    );
};

export default Jumbotron;