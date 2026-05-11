

function Content(props) {

    return <>
        <div className="col-md-12 mb-3">

            <div className="card" key={props.content.id}>
                <h5 className="card-title">{props.content.id} - {props.content.title} </h5>
                <div className="card-body">
                    {props.content.body}
                </div>
            </div>
        </div>
    </>
}


export default Content