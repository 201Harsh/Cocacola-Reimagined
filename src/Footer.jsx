import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-red-700 to-black text-white h-screen flex flex-col justify-between'>
      <div className='container mx-auto px-6 py-12 flex-grow'>
        {/* Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Branding Section */}
          <div className='mb-24 mt-72'>
            <h2 className='text-8xl font-bold italic mb-4'>
              Coca-Cola <span className='text-yellow-300'>Reimagined</span>
            </h2>
            <p className='text-gray-300 text-lg mt-10'>
              Coca-Cola Reimagined brings the refreshment you love with a modern
              twist. Sip the difference.
            </p>
          </div>

          {/* Links Section */}
          <div className='grid grid-cols-2 gap-6 md:grid-cols-1 mt-60 ml-44'>
            <div>
              <h3 className='text-3xl font-bold mb-3'>Company</h3>
              <ul className='text-gray-300 space-y-2'>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-3xl font-bold mb-3'>Support</h3>
              <ul className='text-gray-300 space-y-2'>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-yellow-300 transition'>
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Section */}
          <div className='mt-96 ml-14'>
            <h3 className='text-xl font-bold mb-3'>Follow Us</h3>
            <p className='text-gray-300 mb-4'>
              Connect with us on our social platforms.
            </p>
            <div className='flex space-x-6 text-3xl'>
              <a
                href='#'
                className='hover:text-yellow-300 transition'
                aria-label='Facebook'
              >
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='hover:text-yellow-300 transition'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
              <a
                href='https://www.instagram.com/201harshs/'
                className='hover:text-yellow-300 transition'
                aria-label='Instagram'
              >
                <FaInstagram />
              </a>
              <a
                href='#'
                className='hover:text-yellow-300 transition'
                aria-label='YouTube'
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='bg-black py-3 text-center text-lg text-gray-400'>
        © {new Date().getFullYear()} Coca-Cola Reimagined. All rights reserved |
        This template is made with ❤️ by
        <a
          href='https://www.instagram.com/201harshs/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-yellow-300 transition ml-2'
        >
          201Harsh
        </a>
      </div>
    </footer>
  )
}

export default Footer
