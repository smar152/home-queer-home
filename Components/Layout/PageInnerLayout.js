import styled from "styled-components";

const StPageDate = styled("div")`
  margin-top: 80px;
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

const StPageTite = styled("h2")``;

const StPagePost = styled("div")``;

const InnerLayout = ({ title, three }) => (
  <>
    <StPageDate>
      {title.toLowerCase()}
      <hr />
    </StPageDate>
    <StPageTite>{title}</StPageTite>
    <StPagePost>{three}</StPagePost>
  </>
);
export default InnerLayout;
