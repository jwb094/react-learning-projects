import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogHeader from './components/BlogHeader';
import BlogMainPicture from './components/BlogMainPicture';
import BlogHeaderMobile from './components/BlogHeaderMobile';
import BlogContent from './components/BlogContent';
import BlogRelatedStories from './components/BlogRelatedStories';
function App() {

  return (
    <>
      <h1>Static blog post layout</h1>
      {/* <div className="container"> */}
      <div className="row  | justify-content-center align-items-center">
        <article>
          {/* <!-- Desktop our stories header  SECTION --> */}
          <BlogHeader />
          {/* <!-- our stories main image  SECTION --> */}
          <BlogMainPicture />
          {/* <!-- Mobile our stories header  SECTION -->*/}
          <BlogHeaderMobile />
          {/* <!--  our stories content  SECTION --> */}
          <BlogContent />
          {/* <!--  our stories related Stories  SECTION -->*/}
          <BlogRelatedStories />
        </article>
      </div>
      {/* </div > */}
    </>
  )
}

export default App
