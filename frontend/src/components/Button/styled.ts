import styled from "styled-components";

export const StyledButton = styled.button<{
  isPrimary?: boolean;
  marginLeft?: number;
}>`
  background: ${({ isPrimary }) =>
    isPrimary ? "linear-gradient(270deg, #00FEB9 0%, #00FAFD 100%)" : "#fff"};
  border: ${({ isPrimary }) => (isPrimary ? "none" : "3px solid #001131")};
  border-radius: 30px;
  padding: 18px 60px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #001131;
  cursor: pointer;
  margin-left: ${({ marginLeft }) => marginLeft ?? 0}px;

  @media only screen and (max-width: 1024px) {
    font-size: 3vw;
  }
`;
