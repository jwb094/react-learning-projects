import { useState } from 'react';
import '../css/modal.css'

function Modal() {

    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal);
    }

    return <>

        <button id="modal_open" onClick={toggleModal}>
            Click Me to open Please
        </button>

        <div className={modal ? " modal-container s_modal_show  " : "modal-container"} id="modal_container">
            <div className="modal" >
                <h1>Modal</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe accusantium, repellendus nobis asperiores a quisquam facere? Dicta quibusdam quod laborum quidem, cumque nulla, praesentium, inventore impedit cupiditate nihil aliquam quia?</p>
                <button id="modal_close" onClick={toggleModal}>
                    Click Me to close me
                </button>
            </div>
        </div>
    </>


}

export default Modal;