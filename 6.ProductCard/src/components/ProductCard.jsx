function ProductCard(bag) {
    return <div class="card  border-0 rounded-0 shadow" style={{ width: "18rem", height: "24rem" }}>
        <img style={{ width: "100%;" }} class="card-img-top img-fluid w-100 h-50" src={bag.bag.img} alt="Card image cap" />
        <div class="card-body  p-0 my-3 text-start">
            <div className="row">
                <div className="col-10">
                    <h4 class="card-title">{bag.bag.title}</h4>
                    <p className="card-text">
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>(123)
                    </p>
                </div>
                <div className="col-2">
                    <i className="bi bi-bookmark-plus fs-2"></i>
                </div>
            </div>

        </div>
        <div className="row align-text-center text-center g-0">
            <div className="col-4 d-flex flex-row justify-content-start align-items-center">
                <h5>£{bag.bag.price}</h5>
            </div>
            <div className="col-8">
                <a href="" className="btn btn-dark text-warning p-3 w-100 rounded-0">
                    ADD TO CART
                </a>
            </div>
        </div>
    </div >
}

export default ProductCard;