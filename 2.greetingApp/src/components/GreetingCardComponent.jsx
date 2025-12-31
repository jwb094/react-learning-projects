function GreetingCardComponent({ index, greetingName, greetingMessages }) {

    return <div className="card | my-2 | c-greeting" id={{ index }}>
        <div className="card-body">
            <h5 className="card-title">{greetingName}</h5>
            <p className="card-text">{greetingMessages}</p>
        </div>
    </div>
}


export default GreetingCardComponent;