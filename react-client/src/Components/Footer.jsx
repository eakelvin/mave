import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoMail } from "react-icons/io5";


export default function Footer() {
  return (
        <div className="container-fluid p-3 bg-dark text-light">
          <div className="row mt-5 justify-content-around p-5">

            <div className="col-md-3 pb-5">
                <img src='./finallogo.jpg' width={100} height={100} />
                {/* <Link style={{textDecoration: 'none'}} to='/contact'>
                  <span className='hove d-block p-2 link-underline-dark link-light'>
                    <BsArrowRightCircleFill color='white' size={20} />Contact Us</span>
                </Link> */}

                <Link style={{textDecoration: 'none'}} to='/about'>
                  <span className='hove d-block p-2 link-underline-dark link-light'>
                    <BsArrowRightCircleFill color='white' size={20} />About Us</span>
                </Link>
                
            </div>

            <div className="col-md-3 pb-5">
              <h3>Contact Us</h3>
              <small className="text-light p-2">
                <IoMail size={20} />mavesports007@gmail.com</small>
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
