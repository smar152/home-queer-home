import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";

const FullBanner = styled("div")`
  width: 100%;
  background-color: orange;
`;

const SiteHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 840px;
  margin: auto;
  height: 50px;
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
        <SiteHeader>
          <Link as="/" href="/">
            <Image
              src="/img/logo/HQHlogo.svg"
              alt="Home Queer Home - logo"
              width={128}
              height={128}
            />
          </Link>{" "}
          <Link as="/" href="/">
            <Image
              src="/img/logo/HQHlogo.svg"
              alt="Home Queer Home - logo"
              width={128}
              height={128}
            />
          </Link>{" "}
          <Link as="/" href="/">
            <Image
              src="/img/logo/HQHlogo.svg"
              alt="Home Queer Home - logo"
              width={128}
              height={128}
            />
          </Link>
          <MainNavigation>
            <MenuItem>Comic</MenuItem>
            <MenuItem>Archive</MenuItem>
            <MenuItem>new readers</MenuItem>
            <MenuItem>about</MenuItem>
            <MenuItem>store</MenuItem>
          </MainNavigation>
        </SiteHeader>
      </FullBanner>
    </>
  );
}
