
function Testmonials(Testmonial) {
    return <>
        <div className="c-testmonial | border border-primary rounded-top">
            <div className="content text-center">
                <div className="c-testmonial__icon-area animated zoomIn | pb-2">
                    <i class="bi bi-quote"></i>
                </div>
                <div className="c-testmonial__image-area  animated zoomIn">
                    <img className="img-thumbnail" src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className="pt-2">{Testmonial.Testmonial.testmonial_content}</p>
                    <h5>{Testmonial.Testmonial.name}</h5>
                    <h6>{Testmonial.Testmonial.role}</h6>
                </div>
            </div>
        </div>
    </>
}


export default Testmonials;