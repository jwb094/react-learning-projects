

function ContactForm({ name, setName, email, setEmail, addContact }) {

    return <>
        <div className="row">
            <div class="input-group mb-3">
                <span class="input-group-text" id="title">Name</span>
                <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="title"
                    value={name}
                    onChange={(e) => (setName(e.target.value))}></input>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="email">Email</span>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="email"
                    value={email}
                    onChange={(e) => (setEmail(e.target.value))}></input>
            </div>

            <div class="input-group">

                <button type="button" class="btn btn-primary" onClick={() => addContact()} >Save</button>
            </div>
        </div>
    </>


}

export default ContactForm