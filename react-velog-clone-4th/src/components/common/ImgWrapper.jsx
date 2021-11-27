import React from "react";
import styled from "styled-components";

export default function ImgWrapper({ ratio, children }) {
  return <StyledImgWrapper ratio={ratio}>{children}</StyledImgWrapper>;
}

const StyledImgWrapper = styled.div`
  padding-top: ${({ ratio }) => ratio};
  position: relative;
  margin-bottom: 16px;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
