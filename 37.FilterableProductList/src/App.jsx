import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [selectedCategory, setselectedCategoryButton] = useState("");
  const products = [
    {
      name: "Wireless Mouse",
      price: 19.99,
      desc: "Ergonomic wireless mouse with adjustable DPI.",
      rating: 4.5,
      category: "Electronics"
    },
    {
      name: "Bluetooth Headphones",
      price: 59.99,
      desc: "Noise-cancelling over-ear headphones with long battery life.",
      rating: 4.7,
      category: "Electronics"
    },
    {
      name: "Running Shoes",
      price: 89.99,
      desc: "Lightweight and breathable running shoes for daily workouts.",
      rating: 4.3,
      category: "Footwear"
    },
    {
      name: "Coffee Maker",
      price: 49.99,
      desc: "Automatic drip coffee maker with programmable timer.",
      rating: 4.2,
      category: "Home Appliances"
    },
    {
      name: "Gaming Keyboard",
      price: 79.99,
      desc: "Mechanical keyboard with RGB backlighting.",
      rating: 4.6,
      category: "Electronics"
    },
    {
      name: "Smart Watch",
      price: 129.99,
      desc: "Fitness tracking smartwatch with heart rate monitor.",
      rating: 4.4,
      category: "Wearables"
    },
    {
      name: "Backpack",
      price: 39.99,
      desc: "Water-resistant backpack with multiple compartments.",
      rating: 4.1,
      category: "Accessories"
    },
    {
      name: "Desk Lamp",
      price: 24.99,
      desc: "LED desk lamp with adjustable brightness levels.",
      rating: 4.3,
      category: "Home Decor"
    },
    {
      name: "Electric Kettle",
      price: 29.99,
      desc: "Fast-boiling electric kettle with auto shut-off.",
      rating: 4.5,
      category: "Kitchen"
    },
    {
      name: "Yoga Mat",
      price: 14.99,
      desc: "Non-slip yoga mat for fitness and exercise routines.",
      rating: 4.2,
      category: "Fitness"
    }, {
      name: "USB-C Charger",
      price: 25.99,
      desc: "Fast charging USB-C wall adapter for multiple devices.",
      rating: 4.4,
      category: "Electronics"
    },
    {
      name: "Wireless Earbuds",
      price: 45.99,
      desc: "Compact earbuds with high-quality sound and charging case.",
      rating: 4.5,
      category: "Electronics"
    },
    {
      name: "Sneakers",
      price: 74.99,
      desc: "Comfortable everyday sneakers with modern design.",
      rating: 4.2,
      category: "Footwear"
    },
    {
      name: "Air Fryer",
      price: 99.99,
      desc: "Healthy cooking air fryer with multiple presets.",
      rating: 4.6,
      category: "Home Appliances"
    },
    {
      name: "Fitness Tracker",
      price: 59.99,
      desc: "Track steps, sleep, and calories burned.",
      rating: 4.3,
      category: "Wearables"
    },
    {
      name: "Travel Bag",
      price: 49.99,
      desc: "Durable travel bag with spacious compartments.",
      rating: 4.1,
      category: "Accessories"
    },
    {
      name: "Wall Clock",
      price: 19.99,
      desc: "Minimalist wall clock for home or office.",
      rating: 4.0,
      category: "Home Decor"
    },
    {
      name: "Blender",
      price: 34.99,
      desc: "Powerful blender for smoothies and shakes.",
      rating: 4.4,
      category: "Kitchen"
    },
    {
      name: "Dumbbell Set",
      price: 54.99,
      desc: "Adjustable dumbbell set for strength training.",
      rating: 4.5,
      category: "Fitness"
    },
    {
      name: "Gaming Mouse Pad",
      price: 12.99,
      desc: "Large anti-slip mouse pad for gaming setups.",
      rating: 4.3,
      category: "Electronics"
    }
  ];

  function handleSelect(e) {
    const { value, checked } = e.target;
    setselectedCategoryButton(checked ? value : "");

  }

  const filterData = products.filter((product) => {
    if (!selectedCategory) return true;

    return product.category.toLowerCase() === selectedCategory.toLowerCase()
  })

  console.log(products, selectedCategory);
  return (
    <>
      <div className="container">
        <div className="row  | justify-content-center align-items-center">
          <div className="col-md-6" onChange={handleSelect}>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Footwear" id="checkDefault"
              />
              <label class="form-check-label" for="checkDefault">
                Footwear
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Home Appliances" id="checkDefault" />
              <label class="form-check-label" for="checkDefault">
                Home Appliances
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Wearables" id="checkDefault" />
              <label class="form-check-label" for="checkDefault">
                Wearables
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Fitness" id="checkDefault" />
              <label class="form-check-label" for="checkDefault">
                Fitness
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Kitchen" id="checkDefault" />
              <label class="form-check-label" for="checkDefault">
                Kitchen
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Home Decor" id="checkDefault" />
              <label class="form-check-label" for="checkDefault">
                Home  Decor
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Electronics" id="checkDefault" />
              <label class="form-check-label" for="checkDefault">
                Electronics
              </label>
            </div>
          </div>
        </div>

        <div className="row" style={{ columnGap: "1rem" }}>


          {
            filterData.map((item) => (

              <div class="card  border-0 rounded-0 shadow" style={{ width: "20rem", height: "13rem", marginBlockEnd: "1rem", gap: "1rem" }}>
                <div class="card-body  p-0 my-3 text-start">
                  <div className="row">
                    <div className="col-12">
                      <h4 class="card-title">{item.name}</h4>
                      <p className="card-text">
                        <i className="bi bi-star-fill text-warning"></i>({item.rating})
                      </p>
                      <p>{item.desc}</p>
                      <h5>£{item.price}</h5>

                    </div>

                  </div>

                </div>

              </div>
            ))
          }

        </div>
      </div >
    </>
  )
}

export default App
