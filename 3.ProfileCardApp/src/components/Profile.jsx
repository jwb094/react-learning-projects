function Profile({ name, bio }) {

    return <div className="card col-md-6" style={{ width: "24rem" }}>
        <i className="fa-solid fa-user | card-img-top"></i>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{bio}</p>
        </div>
    </div>

}

export default Profile;