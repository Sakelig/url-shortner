import { useState } from 'react'
import './UrlConverter.css'

const UrlConverter = () => {
  function handleSubmit() {
    console.log("clicked")
    setShortenedUrl(url)
  }

  function handleChange(e) {
    console.log("changed")
    setUrl(e.target.value)
  }

  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

  return (
    <div>
       <label>
        URL: <input name="myInput" onChange={handleChange}/>
      </label>
      <button onClick={handleSubmit}>SHORTEN!</button>
      <div className="output">{shortenedUrl}</div>
    </div>
  )
}

export default UrlConverter