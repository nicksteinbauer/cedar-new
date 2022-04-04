import React from 'react'
import MyMapComponent from './MyMapComponent'
/*
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

*/

const Footer = class extends React.Component {
  render() {
    return (
      <footer>

        <div className='footer-inside inside-lg'>
          <div className='above-footer'>

            <h3>This is the footer</h3>

          </div>
        </div>
        
        <MyMapComponent />

      </footer>
    )
  }
}

export default Footer
