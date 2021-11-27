import styled from "styled-components";
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
`;

const ChapterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: min-content;
  margin: 0px auto;
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
