import React from 'react';
import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductsDetails(props) {
    const { slug } = useParams();

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <h2>Product not found</h2>;
    }
    return <div className="container">
        <div className="row h-100">
            <div className="col-12 col-md-12 | d-flex flex-row justify-content-center align-items-center">
                <div class="card  border-0 rounded-0 shadow" style={{ width: "18rem", height: "26rem" }}>
                    <img style={{ width: "100%;" }} class="card-img-top img-fluid w-100 h-50" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" Card image cap" />
                    <div class="card-body  p-0 my-3 text-start">
                        <div className="row">
                            <div className="col-12">
                                <h4 class="card-title">{product.name}</h4>
                                <p className="card-text">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>(123)
                                </p>
                                <ul className='d-flex flex-row gap-4'>{product.tags?.map((tag) =>
                                    <li>{tag}</li>
                                )}</ul>
                            </div>
                            <div className="col-2">
                                <i className="bi bi-bookmark-plus fs-2"></i>
                            </div>
                        </div>

                    </div>
                    <div className="row align-text-center text-center g-0">
                        <div className="col-4 d-flex flex-row justify-content-start align-items-center">
                            <h5>£{product.price}</h5>
                        </div>
                        <div className="col-8">
                            <a href="" className="btn btn-dark text-warning p-3 w-100 rounded-0">
                                ADD TO CART
                            </a>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    </div>

        ;
}

export default ProductsDetails;