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
            <h2>This website</h2>
            <p>
              I'm still a believer in indie projects having their own
              decentralized space online. A while ago I decided to move away
              from Wordpress and make my own website for the comic, so I can
              play with it as much as I want to. ✨
            </p>
            <p>
              It's made in React with Next.js
              <br /> You can see the code in{" "}
              <a
                href="https://github.com/smar152/home-queer-home"
                taget="_blank"
              >
                this GitHub repository
              </a>
              .
            </p>
            <p> Huge thanks to @heypano for the invaluable help!</p>
          </div>
        }
      />
    </Layout>
  );
};

export default AboutPage;
