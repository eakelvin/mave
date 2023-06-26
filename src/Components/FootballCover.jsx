import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function FootballCover() {
  return (
    <div>
      <div className='heading'>
              <h1 className='fs-1 fw-bold'></h1>
      </div>

      <div className="container-fluid mt-5">
        <div className="h2 mb-4 text-danger border-bottom border-dark">
          <div className="d-flex justify-content-around">
              Football News
              <Link to='/football' className="link-underline-light link-success">View All <BsArrowReturnRight /></Link>
          </div>
        </div>
      </div>

      

      
    </div>
  )
}
