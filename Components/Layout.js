import styled from "styled-components";
import { device, deviceSize } from "../data/device";
import Footer from "./Footer";
import Header from "./Header";

const LayoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

const ComicPageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: "DM Sans", "FuturaStdBold", Helvetica, Arial;
  width: 100%;
`;

const ChapterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0px auto;

  @media ${device.tablet} {
    width: ${deviceSize.tablet};
  }
`;

const Layout = (props) => {
  const { children } = props;
  return (
    <LayoutContainer>
      <Header />
      <ChapterContainer>
        <ComicPageContainer>{children}</ComicPageContainer>
      </ChapterContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
