import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import paragraphs from 'lines-to-paragraphs'
import VisibilitySensor from "react-visibility-sensor";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

      <div className='blog-roll'>
      
      {posts &&
          posts.map(({ node: post }) => (

            <VisibilitySensor 
              partialVisibility
              offset={{bottom:100}}
            >
              {({isVisible}) =>
      
                <div className={isVisible ? "post-ind animateThis" : "post-ind"}>
                  <div className='inside-xxl post-adjust flex-md'>

                    {post.frontmatter.featuredimage ? (
                      <div className="featured-image sixty">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}

                    <div className='post-content flex-vertical'>
                      <div>
                        <h3>{post.frontmatter.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: paragraphs(post.frontmatter.description) }} />
                      </div>
                    </div>

                  </div>
                </div>

              } 
            </VisibilitySensor> 

      ))}


      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                featuredpost
                description
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
