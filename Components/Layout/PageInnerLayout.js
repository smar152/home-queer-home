import styled from "styled-components";
const StPageTite = styled("h1")`
  margin-top: 50px;
`;

const StPagePost = styled("div")``;

const InnerLayout = ({ title, three }) => (
  <>
    <StPageTite>{title}</StPageTite>
    <StPagePost>{three}</StPagePost>
  </>
);
export default InnerLayout;
