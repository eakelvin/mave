import { useState, useEffect } from 'react';
import Content from './Content';

export default function FetchBasketballData() {
  const { getBasketball } = Content()
  const [basketball, setBasketball] = useState([])

  useEffect(() => {
    getBasketball().then((response) => setBasketball(response))
  }, [])
 

  return { basketball };
}
