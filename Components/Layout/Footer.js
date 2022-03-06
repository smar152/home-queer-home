import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";
import { device, deviceSize } from "../../data/device";

const FullBanner = styled("div")`
  width: 100%;
  background-color: #0f3963;
  color: white;
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
  @media ${device.tablet} {
    width: ${deviceSize.tablet};
  }
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
      <FullBanner data-id="footer-container">
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
