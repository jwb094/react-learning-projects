
function BlogHeaderMobile() {

    return <section className="mt-16 | md.hidden d-sm-block d-md-none d-lg-block py-24 " data-block="our_stories_header" data-template="view">
        <div className="container">
            <div className="row | d-flex ">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 | my-auto text-start | mb-2">
                    <a href="#" className="">Go Back</a>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2  | mb-1">
                    <label className="d-flex   |  mb-2" for="topics">Date</label>
                    <ul className="d-flex flex-row md.flex-column column-gap-3 | list-unstyled">
                        <li>#Category 1</li>
                        <li>#Category 2</li>
                        <li>#Category 3</li>
                        <li>#Category 4</li>
                    </ul>
                </div>
            </div>
            <div className="row">

                <div className="col-xs-12 col-md-8 col-md-offset-2"></div>
                <div className="col-xs-12 col-md-2">
                    <figure className="d-flex | border-b-2 border-gray-300 mb-16 pb-24">
                        <img className="w-50p" src="https://placeholder.pics/svg/100x100" alt="pic of Author" loading="lazy" />
                        <figcaption className="ms-2 | d-flex flex-column text-start">
                            <strong>Amanda Faull </strong>
                            Diversity, Equity & Inclusion Communications Specialist
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>

}

export default BlogHeaderMobile