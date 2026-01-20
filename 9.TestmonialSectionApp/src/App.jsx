import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Testmonials from './components/testmonials'

function App() {
  const [Testmonial, setTestmonials] = useState([
    {

      name: "Jane Johnson",
      role: "Accountant",
      testmonial_content: "I am thoroughly impressed with the wide variety of games offered by WickedGames. Their products are engaging, fun, and perfect for all ages. From action-packed adventures to brain-teasing puzzles, WickedGames has it all. I highly recommend checking them out for your gaming needs."
    },
    {
      name: "Alan Richards",
      role: "CEO",
      testmonial_content: "I am extremely impressed with the exceptional service provided by WickedGames in IT Developments. Their expertise and innovation have truly exceeded my expectations. I highly recommend WickedGames for anyone seeking top-notch solutions for their IT needs."
    },
    {
      name: "bartholomew Daniels",
      role: "COO",
      testmonial_content: "I am extremely impressed with WickedGames and their cutting-edge social media platform. It's user-friendly interface and innovative features make managing campaigns a breeze. The analytics provided have been invaluable in optimizing our marketing strategies. I highly recommend WickedGames to anyone looking to elevate their online presence."
    },]);

  return (
    <>
      <div className="container">
        <section className="row  | justify-content-center align-items-center">
          {Testmonial.map((key, index) =>
            < div className="col-md-3 | mx-1" >
              <Testmonials Testmonial={Testmonial[index]} />
            </div>
          )}
        </section>
      </div >
    </>
  )
}

export default App
