import './App.css'
import UrlConverter from './components/UrlConverter'
import {useEffect, useState} from "react";

function App() {
    const exampleMap = new Map()
    exampleMap.set('google', new URL('https://www.google.no'))
    exampleMap.set('bing', new URL('https://bing.com'))

    const [pathname, setPathname] = useState('');

    useEffect(() => {
        console.log(window.location.pathname.substring(1))
        setPathname(window.location.pathname.substring(1))
    }, []);

    if (pathname !== null){
     window.open(exampleMap.get(pathname), '_self')
    }

  return (
    <>
      <UrlConverter/>
    </>
  )
}

export default App
