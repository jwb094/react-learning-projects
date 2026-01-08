
function BlogHeader() {

    return <article className="hidden d-none d-sm-block md.block py-24 m" data-block="name-here" data-template="view">
        <div className="l-container">
            <div className="row | d-flex justify-content-start">
                <div className="col col-sm-12 col-md-8  | mb-auto">
                    <a href="#">Go Back</a>
                </div>
                <div className="col col-sm-12 col-md-2 offset-md-2  ">
                    <label className="d-flex   | mb-12" for="topics">Date</label>
                    <ul className="d-flex flex-row flex-md-column  ">
                        <li>#Category 1</li>
                        <li>#Category 2</li>
                        <li>#Category 3</li>
                        <li>#Category 4</li>
                    </ul>
                </div>
            </div>

            <div className="row">

                <div className="col col-md-8">
                    <h1>Lorum ipsum dolor sit amet...</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                </div>
                <div className="col col-md-2 offset-md-2 ">
                    <figure className="d-flex | border-b-2 border-gray-300 mb-16 pb-24">
                        <img src="https://placeholder.pics/svg/160x160" alt="pic of Author" loading="lazy" />
                        <figcaption className="ml-12 | d-flex flex-column">
                            <strong>Amanda Faull </strong>
                            Diversity, Equity & Inclusion Communications Specialist
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </article>

}

export default BlogHeader