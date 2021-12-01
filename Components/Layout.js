import styled from "styled-components";
import { device, deviceSize } from "../data/device";
import Footer from "./Footer";
import Header, { headerMinHeight } from "./Header";

const LayoutContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ComicPageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: "DM Sans", "FuturaStdBold", Helvetica, Arial;
  width: 100%;
`;

const MainContent = styled("div")`
  flex: 1;

  @media ${device.tablet} {
    width: ${deviceSize.tablet};
    margin: 0px auto;
  }
`;

const Layout = (props) => {
  const { children } = props;
  return (
    <LayoutContainer data-id="layout-container">
      <Header />
      <MainContent data-id="main-content">
        <ComicPageContainer data-id="comic-container">
          {children}
        </ComicPageContainer>
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
