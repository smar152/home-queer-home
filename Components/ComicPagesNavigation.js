import Link from "next/link";
import styled from "styled-components";
import Head from "next/dist/shared/lib/head";

const SiteHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  height: 30px;
  margin-top: 20px;
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
  text-transform: uppercase;
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
      <SiteHeader>
        <MainNavigation>
          <MenuItem>First Comic</MenuItem>
          <MenuItem>Previous Episode</MenuItem>
          <MenuItem>Next Episode</MenuItem>
          {/* Make a funny 404 page for when someone wants to go beyond the existing episodes */}
          <MenuItem>Latest Comic</MenuItem>
        </MainNavigation>
      </SiteHeader>
    </>
  );
}
