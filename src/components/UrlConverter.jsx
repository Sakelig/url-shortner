import './UrlConverter.css'

const UrlConverter = () => {
  return (
    <div>
       <label>
        URL: <input name="myInput" />
      </label>
      <button>SHORTEN!</button>
      <div className="output">Shortened URL</div>
    </div>
  )
}

export default UrlConverter