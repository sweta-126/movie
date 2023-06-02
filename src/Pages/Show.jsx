import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Movie from "../components/Movie"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Show = () => {
 const { id }= useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setMovie(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
        <Navbar/>
        <Movie movie={movie} />
    </div>
  )
}

export default Show