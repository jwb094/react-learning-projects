import ContactItem from "./ContactItem";

function contactList({ contactList, removeItemFromList }) {

    return <>
        <ul className="list-group">
            {contactList.map((item, index) =>
                <ContactItem contact={item} index={index} removeItemFromList={removeItemFromList} />
            )}
        </ul>
    </>
}

export default contactList;