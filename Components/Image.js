import NextImage from "next/image";
import styled from "styled-components";

// Old
const StImageContainer = styled("div")`
  padding-top: 40px;
`;
const StImg = styled("img")`
  width: 100%;
  cursor: pointer;
`;

const OldImage = ({ src, alt }) => {
  console.log(src);
  return (
    <StImageContainer>
      <StImg
        src={src}
        alt={alt}
        // width="840px"
        // height="1188px"
      />
    </StImageContainer>
  );
};

const Image = ({ src, alt }) => {
  return <NextImage src={src} alt={alt} layout="responsive" />;
};

export default OldImage;
