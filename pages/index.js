import Head from "next/head";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import styled from "styled-components";

const ComingSoonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoColumn = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const CopyColumn = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: #ffc852; */
`;

const Credits = styled("p")`
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 0;
`;

const ComingSoon = styled("p")`
  font-weight: 600;
  font-size: 5rem;
  margin-top: 0;
  margin-bottom: 80px;
  color: #ffc852;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Queer Home - A webcomic by Smar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ComingSoonContainer>
        <LogoColumn>
          <img src="/img/logo/HQHlogo.svg" alt="Home Queer Home - logo" />
        </LogoColumn>
        <CopyColumn>
          <Credits>
            a webcomic by&nbsp;
            <a href="http://www.smarmakescomics.com" target="blank">
              smar
            </a>
          </Credits>
          <ComingSoon>coming soon</ComingSoon>
        </CopyColumn>
      </ComingSoonContainer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
