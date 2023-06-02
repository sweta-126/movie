import Navbar from '../components/Navbar'
import Cardfile from '../components/Cardfile'
import { useEffect, useState } from 'react';


const Home = () => {
 
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
        <Navbar />
        <Cardfile data={data} />
    </div>
  )
}

export default Home