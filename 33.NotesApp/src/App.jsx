import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNoteList] = useState([]);

  function addNoteToList() {
    if (!title.trim() && !content.trim()) return;
    setNoteList([...notes, { title: title, content: content }]);
    setTitle("");
    setContent("");
  }
  function removeItemFromList(indexToBeDeleted) {
    const updatedList = notes.filter((_, index) => index !== indexToBeDeleted);
    setNoteList(updatedList);
  }

  return (
    <>
      <div class="container-fluid">
        {/* <div className='row'>
            <div class="col-md-12"></div>
          </div> */}
        <div className='row mt-5'>
          <div class="col-md-4">

            <ul class="list-group">
              {notes.map((item, index) =>
                < li key={index} class="d-flex align-items-center justify-content-between list-group-item" > {item.title}

                  < span >
                    <button class="btn btn-primary ms-2" onClick={() => removeItemFromList(index)}>Delete</button>
                  </span></li>

              )}
            </ul>
          </div>
          <div class="col-md-8">

            <div className="row">
              <div class="input-group mb-3">
                <span class="input-group-text" id="title">Title</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Title" aria-describedby="title"
                  value={title}
                  onChange={(e) => (setTitle(e.target.value))} ></input>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Note</span>
                <textarea class="form-control" rows={4} cols={40} aria-label="title"
                  value={content}
                  onChange={(e) => (setContent(e.target.value))}></textarea>
              </div>
              <div class="input-group">

                <button type="button" class="btn btn-primary" onClick={() => addNoteToList()} >Save</button>
              </div>
            </div>

          </div>
        </div >
      </div >
    </>
  )
}

export default App
