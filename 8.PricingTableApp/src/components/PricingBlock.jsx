import { useState } from 'react'
import PricingColumn from "./PricingColumn";
function PricingBlock() {
    const [pricingLists, setpricingLists] = useState([
        {
            id: 1,
            priceName: "Pro",
            price: 20,
            benefits: ["30 GB storage", " 10 users", "10 databases",]
        },
        {
            id: 2, priceName: "Best", price: 15,
            benefits: ["50 GB storage", " 25 users", "20 databases"]
        },

        {
            id: 3, priceName: "Standard", price: 10,
            benefits: ["10 GB storage", "5", "5 databases"]
        }
    ])

    return <>
        <div className="pricing-area">
            <div className="row | justify-content-md-center ">
                <div className="col-md-6">
                    <h2>Pricing Block Heading</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis nostrum magni! Praesentium odit, veniam asperiores itaque excepturi quia quod rem deleniti quis libero sint.</p>
                </div>
            </div>
            <div className="row">
                {pricingLists.map((key, index) =>
                    <div className="col-lg-4 col-md-6" >
                        <PricingColumn price={pricingLists[index]} />
                    </div>
                )}
            </div>
            <div className="row justify-content-md-center | mt-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <a type="button" class="btn btn-primary col-md-4" href="http://" target="_blank" rel="noopener noreferrer">Choose a Pricing Plan For You</a>
            </div>
        </div>
    </>;
}

export default PricingBlock;