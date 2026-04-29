import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactList, setContactList] = useState([]);



  function addContact() {
    if (!name.trim() && !email.trim()) return;
    setContactList([...contactList, { name: name, email: email }]);
    setName("");
    setEmail("");
  }


  function removeItemFromList(indexToBeDeleted) {
    const updatedList = contactList.filter((_, index) => index !== indexToBeDeleted);
    setContactList(updatedList);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">Contact List</h3>
            </div>
          </header>

          <div className="row">
            <div className="col-md-12">
              <ContactForm name={name} setName={setName} email={email} setEmail={setEmail} addContact={addContact} />
            </div>
            <div className="col-md-12">
              <ContactList contactList={contactList} removeItemFromList={removeItemFromList} />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
