import React from 'react'
import MapWithAMakredInfoWindow from './MyMapComponentMarker'
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
        <span id='anchor-findus' className='linky'>Linky</span>
        <div className='footer-inside inside-lg text-center'>
          <div className='above-footer flex-md'>
            <div className='fifty'>
              <h3>The Cedar Motel</h3>
              <p>
                903 E Bayview Dr Sandusky, Ohio 44870
              </p>
            </div>
            <div className='fifty flex-vertical'>
              <p>
                <a href='mailto:reservations@thecedarmotel.com'>reservations@thecedarmotel.com</a><br/>
                <a href='tel:419-871-7044'>(419) 871-7044</a><br/>
              </p>
            </div>
          </div>
        </div>
        
        


      <MapWithAMakredInfoWindow
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDz85GtAL9QJwco83UH0jUx8lbeS_UNJuk&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

      </footer>
    )
  }
}

export default Footer
