import React from 'react';
import { useParams } from "react-router-dom";
import posts from "../data/posts";
import Hero from '../components/Hero';
const BlogPost = () => {

    const { slug } = useParams();


    const doesPostExist = posts.find(
        (doesPostExist) => doesPostExist.slug === slug
    );

    if (!doesPostExist) {
        return <h2>Post Not Found</h2>;
    }

    return (
        <div className='Container'>
            <div className="row">
                <div className="col-12 col-md-12">
                    <Hero title={doesPostExist.title} bgColor={"primary"} />
                </div>
            </div>
            <div>
                {/* <h1>{doesPostExist.title}</h1> */}
                <p>{doesPostExist.content}</p>
            </div>
        </div>
    );
};

export default BlogPost;