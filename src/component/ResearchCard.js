import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const ResearchCard = ({ item, imgs }) => {
  return (
    <div key={item.id} className="pb-6 w-full">
      <p className="subTitle pb-4" id={item.frontmatter.title}>
        {item.frontmatter.title}
      </p>

      <p className="pb-4">
        <div dangerouslySetInnerHTML={{ __html: item.html }} />
      </p>
      <div className="sm:mx-0  sm:pb-0 flex items-center justify-center">
        {imgs.map((p) => {
          if (p.relativePath === item.frontmatter.img) {
            return (
              <GatsbyImage
                image={p.childImageSharp.gatsbyImageData}
                alt={item.frontmatter.title}
                className="w-1/2 mb-4 mx-auto"
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <hr />
    </div>
  );
};

export default ResearchCard;
