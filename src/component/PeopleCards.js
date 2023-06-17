import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SubtitleIcon } from "./SubtitleIcon"
import { SubtitleIconSvg } from "./SubtitleIconSvg"
import GraduatesCards from "./GraduatesCards"
import PiCards from "./PiCards"
import PostdocCards from "./PostdocCards"
import UndergraduatesCards from "./UndergraduatesCards"
const query = graphql`
  {
    file(name: { eq: "people" }) {
      childrenImageSharp {
        gatsbyImageData
      }
      extension
      publicURL
    }
  }
`

const PeopleCards = () => {
  const data = useStaticQuery(query)
  return (
    <div id="people">
      <>
        <h2 className="text-center pt-20 mt-20 sm:mt-0">PEOPLE</h2>
        <div className="flex flex-row justify-center mb-10 ">
          {data.file.childrenImageSharp === [] ? (
            <SubtitleIcon icon={data.file.childrenImageSharp} smaller />
          ) : (
            <SubtitleIconSvg icon={data.file.publicURL} smaller />
          )}
        </div>
      </>
      <PiCards />
      <PostdocCards />
      <GraduatesCards />
      <UndergraduatesCards />
    </div>
  )
}
export default PeopleCards
