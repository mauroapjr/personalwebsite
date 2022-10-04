import * as React from "react";
import { graphql } from "gatsby";
import { ContentfulRichTech, SocialButton } from "../components";

const getFirstAndOtherNames = (string) => {
  if (!string) return string;
  const ret = [];

  const strings = string.split(" ");
  if (strings.length <= 0) return string;

  ret.push(strings[0]);

  if (strings.length > 1) ret.push(strings.slice(1).join(" "));

  return ret;
};

const IndexPage = ({ data }) => {
  const [firstName, otherNames] = getFirstAndOtherNames(
    data.contentfulHome.title
  );

  return (
    /* =================== Profile Image and Name =================== */
    <>
      <section className="md:flex">
        <div className="bg-gray-100  py-10 flex justify-center md:w-1/3 md:py-40">
          <img
            src={`${data.contentfulHome.profilePhoto.url}?f=face&fit=thumb&r=max&w=235&h=235&fm=png`}
            alt=""
            className=""
          />
        </div>
        <div className="font-bold leading-10 w-2/3 text-5xl text-blue-900 px-20 py-40">
          <div className="max-w-xl">
            <h1>
              {firstName}
              <span className="block font-light my-2 text-gray-400">
                {otherNames}
              </span>
            </h1>

            <div className="md:flex my-4 justify-between items-center">
              <h2 className="text-gray-400 text-2xl font-light">
                {data.contentfulHome.profileHeadline}
              </h2>
              <div className="flex md:space-x-1">
                {data.allContentfulExternalProfile.nodes.map(
                  (externalProfile, idx) => (
                    <SocialButton
                      key={`social-button-${idx}`}
                      icon={externalProfile.icon}
                      link={externalProfile.link}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =================== About me =================== */}
      <section className="md:flex">
        <div className="bg-gray-200 pl-10 md:w-1/3 py-10 px-0.5 md:px-20 text-left">
          <h3 className="text-2xl font-semibold text-blue-900">ABOUT ME</h3>
        </div>
        <div className="bg-gray-100 px-10 md:w-2/3 md:px-20 py-10 text-gray-800">
          <article className="max-w-xl space-y-4 text-justify">
            <ContentfulRichTech richText={data.contentfulHome.intro} />
          </article>
        </div>
      </section>
      {/* =================== Experience =================== */}
      {data.allContentfulExperience.nodes.map((experience, arrayIndex) => (
        <section className="flex">
          <div className="bg-gray-100 w-1/3 py-10 px-0.5 md:px-20 text-left ">
            {arrayIndex === 0 && (
              <h3 className="text-2xl text-left font-semibold text-blue-900">
                EXPERIENCE
              </h3>
            )}
            <div className="text-xl text-left mt-10 text-gray-500">
              Key abilities
            </div>
            <ContentfulRichTech richText={experience.keyAbilities} />
          </div>

          <div className="bg-gray-200 w-2/3 px-10 py-10 md:px-20 text-gray-800">
            <article className="max-w-xl text-justify text-gray-800 first:mt-0 mt-10">
              <h4 className="font-bold text-xl">{experience.title}</h4>
              <span className="block">{experience.companyName}</span>
              <span className="space-x-8 lock text-sm text-gray-600">
                <time dateTime={experience.startDate}>
                  {experience.startDate}
                </time>

                <time dateTime={experience.endDate}>
                  {experience.endDate || "present"}
                </time>
              </span>
              <span className="block text-sm text-gray-600 mb-4">
                {experience.location}
              </span>
              <span>
                <ContentfulRichTech richText={experience.description} />
              </span>
            </article>
          </div>
        </section>
      ))}
      {/* =================== Skills =================== */}
      <div>
        <section className="flex">
          <div className="bg-gray-200 w-1/3 py-10 px-0.5 md:px-20 text-left">
            <h5 className="text-2xl font-semibold text-blue-900">SKILLS</h5>
          </div>
          <div className="bg-gray-100 block w-2/3 px-10 py-10 md:px-20 text-gray-800">
            {data.allContentfulSkills.nodes.map((skillName) => (
              <div className="block">{skillName.skillName}</div>
            ))}
          </div>
        </section>
      </div>
      {/* =================== Idioms =================== */}
      <section className="flex">
        <div className="bg-gray-100 w-1/3 py-10 px-0.5 md:px-20 text-left">
          <h5 className="text-2xl font-semibold text-blue-900">IDIOMS</h5>
        </div>
        <div className="bg-gray-200 w-2/3 px-10 py-10 md:px-20 ">
          {data.allContentfulIdioms.nodes.map((idiom) => (
            <div className="block">
              {idiom.idiom} - {idiom.level}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query IndexPageQuery {
    contentfulHome {
      phone
      profileHeadline
      email
      location
      intro {
        raw
      }
      title
      profilePhoto {
        url
      }
    }
    allContentfulExternalProfile {
      nodes {
        icon
        link
      }
    }
    allContentfulExperience(sort: { fields: startDate, order: DESC }) {
      nodes {
        title
        startDate
        endDate
        description {
          raw
        }
        companyName
        location
        keyAbilities {
          raw
        }
      }
    }
    allContentfulIdioms {
      nodes {
        idiom
        level
      }
    }
    allContentfulSkills {
      nodes {
        skillName
      }
    }
  }
`;
export default IndexPage;

export const Head = ({ data }) => <title>{data.contentfulHome.title}</title>;
