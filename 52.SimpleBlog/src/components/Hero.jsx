import React from 'react';

const Hero = ({ title, bgColor }) => {
    return (
        <div class={`px-4 py-5 my-5 text-center ${bgColor ? `bg-${bgColor}` : ""}`}>
            <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
            <h1 class="display-5 fw-bold">{title}</h1>
        </div >
    );
};

export default Hero;