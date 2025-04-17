import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const TravelBook = () => {
  const [traveBook, setTravelBook] = useState([])

  const fetchData = async () => {
    const {data} = await axios.get("http://localhost:5000/api/travel")
    setTravelBook(data.travels)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {traveBook.map(tb => ( 

        <div key={tb._id} className="card mb-3 mt-3">
            <img src={tb.image} className="card-img-top" alt={tb.title}/>
          <div className="card-body">
            <h5 className="card-title">{tb.title}</h5>
            <p className="card-text">{tb.desc}</p>
            <div className='d-flex justify-content-start'>
              <Link className='btn btn-primary' to={`/update/${tb._id}`} >Update</Link>
              <form>
                <button type='submit' className='btn btn-danger mx-3'>Delete</button>
              </form>
            </div>
          </div>
        </div>

       ))}
              
    </div>
  )
}

export default TravelBook
