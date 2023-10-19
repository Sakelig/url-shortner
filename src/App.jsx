import './App.css'
import UrlConverter from './components/UrlConverter'
import {useEffect, useState} from "react";

function App() {
    // checks url params

    const [pathname, setPathname] = useState('');

    useEffect(() => {
        console.log(window.location.pathname.substring(1))
        setPathname(window.location.pathname.substring(1))
    }, []);

  return (
    <>
      <UrlConverter/>
    </>
  )
}

export default App
