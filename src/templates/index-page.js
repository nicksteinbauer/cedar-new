import React from 'react';
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Reservations from '../components/Reservations';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from '../components/Layout'
import VisibilitySensor from "react-visibility-sensor";
import logo from "../img/CEDAR-LOGO-FINAL.svg";

//import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
//import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import HomeVideo from "../img/homevideo-sm.mp4"

export const IndexPageTemplate = ({ image, topimage, title, description, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  
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

        <div id="reservations" className="inside-lg text-center">
          <span id='anchor-reservations' className='linky'>Linky</span>
          <Reservations />
        </div>


        <div id='about' className='inside-xl section'>
        <span id='anchor-about' className='linky'>Linky</span>
          <VisibilitySensor 
            partialVisibility
            offset={{bottom:100}}
          >
            {({isVisible}) =>

              <div className={isVisible ? "flex-md animateThis" : "flex-md"}>

                <div className='fifty flex-vertical'>
                  <div>
                    <h2 className="title">{title}</h2>
                    <h3>{description}</h3>
                    <div className='content'>
                      <PageContent className="content" content={content} />
                    </div> 
                  </div>
                </div>

                <div className='fifty'>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: topimage.childImageSharp.fluid.src,
                      alt: "this is the alt",
                    }}
                  />
                </div>

              </div>

            } 
          </VisibilitySensor> 

        </div>

        <div id='accommodations'>
          <span id='anchor-accommodations' className='linky'>Linky</span>

          <div className='text-center inside-xs'>
            <img className='the-logo' src={logo} alt="Cedar Motel" />
            <h2>Our Accomodations</h2>
          </div>
          
          <div className='blog-parent'>

            <BlogRoll />


          </div>

        </div>
    
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
