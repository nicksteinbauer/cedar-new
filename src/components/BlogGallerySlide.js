import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import Slider from "react-slick"

class BlogGallerySlide extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const settings = {
        className: "slide-center",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };

      return (
        <div className="project-pre-loop">
            <Slider {...settings}>
            {posts &&
                posts.map(({ node: post }) => (
                <div className="pro-loop" key={post.id}>
                    <article
                    className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                    >
                    <div className="test-gallery">
                        
                        {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail animateThis">
                            <div className="animateThat">
                            <PreviewCompatibleImage
                            imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            }}
                            />
                            </div>
                        </div>
                        ) : null}
                        
                
                        
                    </div>
                </article>
                </div>
                
            ))}
            </Slider>
        </div>
      )
  }
}

BlogProjectsSlide.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogProjectsSlideQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 1400, quality: 70) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
      }
    `}
    render={(data, count) => <BlogGallerySlide data={data} count={count} />}
  />
)
