import Layout from "../Components/Layout/Layout";
import InnerLayout from "../Components/Layout/PageInnerLayout";
import styled from "styled-components";

const MeetTheArtist = styled("div")`
  margin-bottom: 30px;
`;

const AboutPage = () => {
  return (
    <Layout>
      <InnerLayout
        title="About"
        three={
          <div>
            <h2>Home Queer Home</h2>
            <p>
              Sophia, Danae & Jo are three roommates who are trying their best
              to survive their own heads and human relationships.
            </p>
            <p>
              The comic started as a sitcom idea, hence the seasons / episodes
              structure, but in reality was always a big experiment in anything
              I wanted to explore at the time that made sense within the format.
            </p>
            <h2>Smar</h2>
            <p>
              I've always been into making cute, funny things with big feelings.
            </p>
            <p>
              I made a successful queer zine series, burned out on comics as a
              job, turned to web development, and now am back to making comics
              because I want to. ❤️
            </p>
            <p>Born in 1991, I live in Athens, Greece with the silliest cat.</p>
            <p>Not accepting commissions or freelance work at the moment.</p>
            <h2>Obviously Outdated</h2>
            <MeetTheArtist>
              <img
                src="/img/MeetTheArtist.jpg"
                alt="Meet the Smar"
                width="100%"
              />
            </MeetTheArtist>
          </div>
        }
      />
    </Layout>
  );
};

export default AboutPage;
