import '../css/ProductCard.css';

function ProductCard({ product, index, updateFavourite }) {

    return <div className="card | d-flex flex-row" key={index}>
        <img className="card-img-top img-fluid w-100 " src={product.image} alt="Card image cap" />
        <div className="card-body | d-flex justify-content-between">
            <div className="text-section">
                <h5 className="card-title">{product.name} </h5>
                <p className="card-text"> {product.desc}</p>
            </div>
            <div className="cta-section | d-flex flex-column justify-content-between">
                <p>£{product.price}</p>
                <button className="btn btn-light | d-flex">Go Somewhere</button>
                <button className={product.favourite !== true ? 'btn btn-light border border-dark' : 'btn btn-dark'}
                    onClick={() => { updateFavourite(index) }}>
                    {product.favourite !== true ? <i class="bi bi-heart"></i> : <i class="bi bi-heart-fill"></i>}
                </button>
            </div>
        </div>
    </div>



}

export default ProductCard;
