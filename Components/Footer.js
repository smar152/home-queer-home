import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";

const FullBanner = styled("div")`
  margin-top: 100px;
  width: 100%;
  background-color: orange;
  color: white;
  position: sticky;
  z-index: 2;
  top: 0px;
  // top: -30px;
  /* padding-top: 30px; */
`;

const Logo = styled("div")`
  height: 30px;
  width: 300px;
  background: hotpink;
`;

const SiteHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  height: 50px;
`;

const MainNavigation = styled("nav")`
  padding: 12px;
  font-family: "DM Sans", "FuturaStdBold", Helvetica, Arial;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  /* text-transform: uppercase; */
`;

const MenuItem = styled("div")``;

export default function Footer() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&display=optional"
          rel="stylesheet"
        />
      </Head>
      <FullBanner>
        {/* <Logo /> */}
        <SiteHeader>
          <MainNavigation>
            <MenuItem>smar makes comics</MenuItem>
            <MenuItem>insta</MenuItem>
            <MenuItem>twitter</MenuItem>
            <MenuItem>constant anxiety is a band</MenuItem>
          </MainNavigation>
        </SiteHeader>
      </FullBanner>
    </>
  );
}
