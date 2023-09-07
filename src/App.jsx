import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import "./App.css"
function App() {
  const [items, setitems] = useState([]);
  const api = 'https://jsonplaceholder.typicode.com/photos';
  const [search, setsearch] = useState('')
  useEffect(() => {
    const getAPI = async (datas) => {
      const resp = await axios.get(datas);
      const res = resp.data;
      // console.log(resp.data);
      setitems(res);
    }
    const searchingData = () => {
     
        const fetchIt = items.filter((key) =>  key.title.toLowerCase().includes(search.toLocaleLowerCase()));
        // console.log(fetchIt)
        setitems([...fetchIt])
    }
    searchingData()
    getAPI(api)
  }, [items])
  return (
    <div className='container'>
      <div className='text'>
        <input type="text" name="" id="" placeholder='Search Items' value={search} onChange={(e) => setsearch(e.target.value)}/>
      </div>
      <div className='cards'>
      {
        items.map((val) => {
          
          return (
            <>
              <div className="card" style={{width: '18rem'}}>
                <img src={val.url} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                   
                  </div>
              </div>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default App
