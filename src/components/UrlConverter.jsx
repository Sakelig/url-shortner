import { useState } from 'react'
import './UrlConverter.css'

const UrlConverter = () => {
  function handleSubmit() {
    console.log("clicked")
  }

  function handleChange(e) {
    console.log("changed")
    setUrl(e.target.value)
  }

  const [url, setUrl] = useState('')

  return (
    <div>
       <label>
        URL: <input name="myInput" onChange={handleChange}/>
      </label>
      <button onClick={handleSubmit}>SHORTEN!</button>
      <div className="output">Shortened</div>
    </div>
  )
}

export default UrlConverter