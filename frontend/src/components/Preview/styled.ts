import styled from "styled-components";

import PreviewImage from "src/assets/PreviewImage.svg";

export const StyledPreview = styled.section`
  padding: 300px 0 200px 134px;
  background-image: url(${PreviewImage});
  background-repeat: no-repeat;
  background-position: right;

  @media only screen and (max-width: 1900px) {
    background-size: 30vw;
    padding: 10vw 0 15vw 5vw;
  }
`;

export const StyledPreviewButtons = styled.div`
  display: flex;
  gap: 45px;
  margin-top: 112px;
`;
