import {useState, useEffect } from 'react'
import Map from "./components/Map";
import BusyLoading from './components/BusyLoading';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      setLoading(true)
      fetch('https://eonet.gsfc.nasa.gov/api/v2.1/categories/8')
      .then(res => res.json())
      .then(data => {
        setEventData(data.events)
        setLoading(false)
        // console.log(data.events)
      })
      .catch(err => console.error(err))
    }, [])
  
  return (
    <div>
      {loading ? <BusyLoading /> : <Map eventData={eventData}/>}
    </div>
  )
}

export default App;