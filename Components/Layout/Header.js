import Link from "next/link";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";
import { device, deviceSize } from "../../data/device";

const SiteHeader = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: orange;
  /* z-index: 2; */
  justify-content: center;
  margin: auto;
  height: 100px;
  @media ${device.tablet} {
    flex-direction: row;
    width: ${deviceSize.tablet};
  }
`;

const LogoArea = styled("div")`
  /* display: flex;
  height: 50px;
  width: 100%;
  @media ${device.tablet} {
    width: 370px;
  } */
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

const StImg = styled("img")`
  flex: 1;
  flex-basis: 0px;
  height: 50px;
  width: 100%;
  @media ${device.tablet} {
    width: 370px;
  }
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
      <SiteHeader data-id="header-container">
        <LogoArea data-id="logo-container">
          <Link as="/" href="/">
            <StImg
              src="/img/logo/TempBlankLogo.png"
              alt="Home Queer Home - logo"
            />
          </Link>
        </LogoArea>
        <MainNavigation data-id="main-navigation">
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
    </>
  );
}
