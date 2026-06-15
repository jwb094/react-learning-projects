import React from 'react';
import posts from "../data/posts";

const BlogList = () => {

    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                    <h1> Blog Posts</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    {posts.map((post) =>
                        <div key={post.id} class="card | mt-4" >
                            <div class="card-body | d-flex flex-column align-items-start">
                                <h5 class="card-title">{post.title}</h5>
                                <p>{post.excerpt}</p>
                                <p>Author : {post.author.name}</p>
                                <span>{post.readingTime} min read</span>
                                <a href={`/blog/${post.slug}`}>Read more</a>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>


        </div >
    );
};

export default BlogList;