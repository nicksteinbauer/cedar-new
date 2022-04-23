import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  //description,
  //tags,
  featuredimage,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content

  
  return (
    <section className="section blogpost green sec-black">
      {helmet || ''}
      <div className="inside-xxl">

          <article className="test">

            
            <h1 className="h1">{title}</h1>
            

            <div className="flex-md">
            <VisibilitySensor partialVisibility>
              {({isVisible}) =>
              <div className="featured-thumbnail forty animateThis">
                <div className={isVisible ? "newAnimate animateRightUpBig" : "newAnimate"}>
                  <PreviewCompatibleImage imageInfo={featuredimage} />
                </div>
              </div>
              }
            </VisibilitySensor>
            <div className="sixty"><PostContent content={content} /></div>

            </div>
            
          </article>

      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Services | Red Barn Group">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}

      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByIDGreen($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 840, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
