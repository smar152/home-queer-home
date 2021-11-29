import Layout from "../Components/Layout";
import styled from "styled-components";

const StPageDate = styled("div")`
  margin-top: 80px;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

const StPageTite = styled("h2")``;

const StPagePost = styled("div")``;

const NewReadersPage = () => {
  return (
    <Layout>
      <StPageDate>
        new readers
        <hr />
      </StPageDate>
      <StPageTite>New Readers</StPageTite>
      <StPagePost>
        Well hello, this comic is about three friends living their lives in
        Athens, Greece.
      </StPagePost>
    </Layout>
  );
};

export default NewReadersPage;
