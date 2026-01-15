
import "../css/Pricing.css";
function PricingColumn(price, key) {


    return <div className='single-pricing'>
        {price.price.id === 2 ?
            <div className="label-area">
                <span>Popular</span>
            </div> : ''
        }
        <div className="head-text">
            <h3>{price.price.priceName}</h3>
        </div>
        <div className="price-area">
            £{price.price.price}<span className="duration">per day</span>
        </div>
        <div className="feature-area">
            <ul>
                {price.price.benefits.map((key, index) =>
                    <li>{price.price.benefits[index]}</li>
                )}
                <li>Safe and Secure</li>
            </ul>
        </div>
        <div className="btn-area">
            <a href="#">Choose Plan</a>
        </div>
    </div >;
}

export default PricingColumn;