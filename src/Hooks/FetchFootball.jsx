import React from 'react'
import { useState, useEffect } from 'react'
import Content from './Content'


const FetchFootballData = () => {
    const [football, setFootball] = useState([])
    const { getFootball } = Content()

    useEffect(() => {
        getFootball().then((response) => setFootball(response))
    }, [])
    
  return { football }
}

export default FetchFootballData

