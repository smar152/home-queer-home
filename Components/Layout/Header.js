import Link from "next/link";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";
import { device, deviceSize } from "../../data/device";
import comics, { getLastComicPageNumbers } from "../../data/comics";

const SiteHeader = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: orange;
  /* z-index: 2; */
  justify-content: space-between;
  margin: auto;
  flex-grow: 0;
  font-size: 1.1rem;
  @media ${device.tablet} {
    flex-direction: row;
    width: ${deviceSize.tablet};
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;

const LogoArea = styled("div")`
  /* display: flex;
  height: 50px;
  width: 100%;
  @media ${device.tablet} {
    width: 370px;
  } */
  cursor: pointer;
`;

const MainNavigation = styled("nav")`
  background: orange;
  color: white;
  padding: 12px;
  font-family: "DM Sans", "FuturaStdBold", Helvetica, Arial;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  @media ${device.laptop} {
    flex-grow: 0;
    width: 400px;
  }
`;

const MenuItem = styled("a")`
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    font-weight: 600;
  }
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
  const lastComicPage = getLastComicPageNumbers();
  const url = `/season/${lastComicPage.lastComicSeasonNumber + 1}/episode/${
    lastComicPage.lastComicEpisodeNumber + 1
  }/page/${lastComicPage.lastComicPageNumber + 1}`;
  return (
    <>
      <SiteHeader data-id="header-container">
        <LogoArea data-id="logo-container">
          <Link as="/" href="/">
            <StImg
              src="/img/logo/HQHlogo-01.svg"
              alt="Home Queer Home - logo"
            />
          </Link>
        </LogoArea>
        <MainNavigation data-id="main-navigation">
          <Link href={url}>
            <MenuItem>comic</MenuItem>
          </Link>
          <Link href="/archive">
            <MenuItem>archive</MenuItem>
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
