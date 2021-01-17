import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SOCIAL from '../constants/social';
import { rhythm } from '../utils/typography';

const mainBioQuery = graphql`
  query MainBioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic-optimized.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`;

const MainBio: React.FunctionComponent<unknown> = () => {
  return (
    <StaticQuery
      query={mainBioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            className="main-bio-container"
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <div className="main-bio">
              <h1 className="heroine" style={{ marginBottom: rhythm(1 / 5) }}>
                <span role="img" aria-label="woman technologist">
                  👩🏻‍💻
                </span>{' '}
                Hello, it's Azmarie, a software engineer and computer vision enthusiast{' '}
                <span role="img" aria-label="sparkles">
                  ✨
                </span>
              </h1>
              <ul
                className="horizontal-links"
                style={{ marginBottom: rhythm(1) }}
              >
                {SOCIAL.map((s) => (
                  <li key={s.kind}>
                    <a target="_blank" className="u-no-box-shadow" href={s.url}>
                      <FontAwesomeIcon
                        icon={s.icon}
                        color="var(--gray)"
                        title={`Link to my ${s.kind}`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
              <p>
                I&apos;m a Software Engineer,
                {/* at Salesforce,  */}
                {' '}
                <span role="img" aria-label="coffee">
                  ☕️
                </span>{' '} and{' '}
                <span role="img" aria-label="cat">
                  🐱 lover
                </span>.{' '} 
                Previously, I was a graduate researcher in Computer Vision, 
                broadly interested in image-to-image translation and computational creativity.
                Here, I plan to write about computer vision, software engineering, and random things. 
                <br />
                <br />
                Glad you found me!
              </p>
            </div>
            <Image
              className="avatar"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                minWidth: 250,
                borderRadius: `100%`,
                border: `8px solid var(--white)`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </div>
        );
      }}
    />
  );
};

export default MainBio;
