import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";



export default function Footer() {
  return (
        <div className="container-fluid p-3 bg-dark text-light">
          <div className="row mt-5 justify-content-around p-5">

            <div className="col-md-3">
                <img src='./logo/photo_1.jpg' width={60} height={60} />
                <a className='d-block p-2 link-underline-dark link-light' href='#'><BsArrowRightCircleFill color='white' size={20} />Contact Us</a>
                <a className='d-block p-2 link-underline-dark link-light' href='#'><BsArrowRightCircleFill color='white' size={20} />About Us</a>
            </div>

            <div className="col-md-3">
              <h3>Follow Us</h3>
              <a className='d-block p-2 link-underline-dark link-light' 
                  href='https://twitter.com/mave_sports007?s=11&t=E31z5H1buzazahfcsKwzJg'>
                  <AiOutlineTwitter color='white' size={20} />Twitter
              </a>
              <a className='d-block p-2 link-underline-dark link-light' href='#'><AiFillYoutube color='white' size={20} />Youtube</a>
              {/* <a className='d-block p-2 link-underline-dark link-light' href='#'><FaFacebook color='white' size={20} />Facebook</a>
              <a className='d-block p-2 link-underline-dark link-light' href='#'><AiOutlineInstagram color='white' size={20} />Instagram</a> */}
            </div>

            <div className="col-md-4">
              <h3>NewsLetter</h3>
              <p>Subscribe for the latest news</p>
              <form>
                <input type="email" className="form-control" id="floatingInputGrid" placeholder="Enter your email"></input>
                <button type="button" className="btn btn-primary btn-sm mt-2">Subscribe</button>
              </form>
            </div>

          </div>
            <h3 className='text-center'>&copy; Mave Sports || All rights reserved.</h3>
        </div>
  )
}
