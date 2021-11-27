import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";
import { device, deviceSize } from "../data/device";

const FullBanner = styled("div")`
  width: 100%;
  background-color: orange;
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
  @media ${device.tablet} {
    width: ${deviceSize.tablet};
  }
`;

const MainNavigation = styled("nav")`
  background: orange;
  color: white;
  padding: 12px;
  font-family: "DM Sans", "FuturaStdBold", Helvetica, Arial;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;

  /* text-transform: uppercase; */
`;

const MenuItem = styled("div")``;

export default function Header() {
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
          <Link as="/" href="/">
            <Image
              src="/img/logo/HQHlogo.svg"
              alt="Home Queer Home - logo"
              width={128}
              height={128}
            />
          </Link>
          <Link as="/" href="/">
            <Image
              src="/img/logo/HQHlogo.svg"
              alt="Home Queer Home - logo"
              width={128}
              height={128}
            />
          </Link>
          <Link as="/" href="/">
            <Image
              src="/img/logo/HQHlogo.svg"
              alt="Home Queer Home - logo"
              width={128}
              height={128}
            />
          </Link>
          <MainNavigation>
            <MenuItem>comic</MenuItem>
            <MenuItem>archive</MenuItem>
            <MenuItem>new readers</MenuItem>
            <MenuItem>about</MenuItem>
            <MenuItem>store</MenuItem>
          </MainNavigation>
        </SiteHeader>
      </FullBanner>
    </>
  );
}
