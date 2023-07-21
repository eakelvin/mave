import React from 'react'
import { useState, useEffect } from 'react'


const Fetch = (url) => {
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

  return (
      { loading, error, data }
    // <>
    //     {loading && <p>Loading...</p>}
    //     {error && <p>Error:{error.message}</p>}
    //     {data && <p>Data:{JSON.stringify(data)}</p>}
    // </>
    
  )
}

export default Fetch
