import styled from "styled-components";
import { device, deviceSize } from "../../data/device";

const StPageTite = styled("h1")`
  margin: 20px 0px;
  @media ${device.tablet} {
    margin-top: 50px;
  }
`;

const StPagePost = styled("div")``;

const InnerLayout = ({ title, three }) => (
  <>
    <StPageTite>{title}</StPageTite>
    <StPagePost>{three}</StPagePost>
  </>
);
export default InnerLayout;
