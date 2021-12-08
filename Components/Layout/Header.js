import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";
import { device, deviceSize } from "../../data/device";

const FullBanner = styled("div")`
  width: 100%;
  background-color: orange;
  z-index: 2;
`;

const Logo = styled("div")`
  height: 30px;
  width: 300px;
  background: hotpink;
`;

const LogoArea = styled("div")`
  @media ${device.tablet} {
    display: flex;
    width: 100%;
  }
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

const MenuItem = styled("a")`
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export default function Header() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&display=optional"
          rel="stylesheet"
        />
      </Head>
      <FullBanner data-id="header-container">
        {/* <Logo /> */}
        <SiteHeader data-id="header-inner">
          <LogoArea>
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
          </LogoArea>
          <MainNavigation>
            <Link href="/">
              <MenuItem>comic</MenuItem>
            </Link>
            <Link href="/archive">
              <MenuItem>archive</MenuItem>
            </Link>
            <Link href="/new-readers">
              <MenuItem>new readers</MenuItem>
            </Link>
            <Link href="/about">
              <MenuItem>about</MenuItem>
            </Link>
            <MenuItem href="https://smar.gumroad.com/" target="_blank">
              store
            </MenuItem>
          </MainNavigation>
        </SiteHeader>
      </FullBanner>
    </>
  );
}
