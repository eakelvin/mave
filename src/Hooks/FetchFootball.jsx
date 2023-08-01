import React from 'react'
import { useState, useEffect } from 'react'
import Content from './Content'


const FetchFootballData = () => {
    const [football, setFootball] = useState([])
    const { getFootball } = Content()

    useEffect(() => {
        // getFootball().then((response) => setFootball(response))
        const fetchData = async () => {
          try {
              const response = await getFootball();
              setFootball(response);
          } catch (error) {
              console.log('Error fetching football data:', error);
          }
      };

      fetchData()
    }, [])
    
  return { football }
}

export default FetchFootballData

