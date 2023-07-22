import React from 'react'
import { useState, useEffect } from 'react'


const FetchFootballData = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                setLoading(false)
            } 
            catch(error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

  return ( { loading, error, data } )
}

export default FetchFootballData



// import { useState, useEffect } from 'react';

// export default function useFootballData() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:1337/api/footballs?populate=*')
//       .then(response => response.json())
//       .then(data => {
//         setLoading(false);
//         setData(data);
//       })
//       .catch(error => {
//         setLoading(false);
//         setError(error);
//       });
//   }, []);

//   return { loading, error, data };
// }

