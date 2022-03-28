import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'
//import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import HomeVideo from "../img/homevideo-sm.mp4"

export const IndexPageTemplate = ({ image, topimage, title, description, content, contentComponent }) => {
  
  
  return (


    <div>
      <div className="video-contain">
      
        <video autoPlay="autoplay" muted loop="loop" id="bgvid">
          <source src={HomeVideo} type="video/mp4" />
        </video>
        <div className="video-contain__gradient"></div>

        <div className="flex-vertical callto text-center">
          <div>
            <h1>Surrounded by Nature<span>On Sandusky Bay</span></h1>
          </div>
        </div>
        
      </div>

      <section className="therest">
        <div id="reservations" className="inside-md text-center">
          <div>
            <p>Arrival Date | Departure Date | # of Adults | # of Children | Promo Code | <a className="button" href="">Check Availability</a></p>
          </div>
        </div>
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{description}</h3> 
          
          
               
      </section>
    </div>

  )
}





IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  topimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        topimage={frontmatter.topimage}
        title={frontmatter.title}
        description={frontmatter.description}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        topimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
