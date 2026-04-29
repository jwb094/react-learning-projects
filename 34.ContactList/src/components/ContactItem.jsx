

function ContactItem({ contact, index, removeItemFromList }) {

    return <>
        <li key={contact.name} className="list-group-item d-flex flex-row justify-content-between  align-items-start">
            <div>

                <h1>{contact.name}</h1>
                <span className="ml-3">{contact.email}</span>
            </div>
            < span >
                <button class="btn btn-primary ms-2" onClick={() => removeItemFromList(index)}>Delete</button>
            </span>
        </li>

    </>


}

export default ContactItem;