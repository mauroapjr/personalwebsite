import * as React from "react";
import { graphql } from "gatsby";
import { SocialButton } from "../components";

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
    <section className="flex">
      <div className="bg-gray-100 w-1/3 py-40 flex justify-center">
        <img
          src={`${data.contentfulHome.profilePhoto.url}?f=face&fit=thumb&r=max&w=235&h=235&fm=png`}
          alt=""
          className=""
        />
      </div>
      <div className="font-bold leading-10 w-2/3 text-5xl text-blue-900 px-20 py-40">
        <h1>
          {firstName}
          <span className="block font-light text-gray-400">{otherNames}</span>
        </h1>

        <div className="flex my-4 justify-between items-center">
          <h2 className="text-gray-400 text-2xl font-light">
            {data.contentfulHome.profileHeadline}
          </h2>
          <div className="flex space-x-1">
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
    </section>
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
  }
`;
export default IndexPage;

export const Head = () => <title>Home Page</title>;
