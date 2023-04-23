import styled from "styled-components";

export const StyledText = styled.div<{ size: number; weight: number; fontFamily?: string;  marginBottom?: number; }>`
  font-family: ${({ fontFamily }) => fontFamily ?? 'DM Sans'};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0}px;
  color: #172A4F;

  @media only screen and (min-width: 1024px) and (max-width: 1900px) {
    font-size: ${({ size }) => size/20}vw;
  }

  @media only screen and (min-width: 320px) and (max-width: 1024px) {
    font-size: ${({ size }) => size/12}vw;
  }

  @media only screen and (max-width: 1920px) {
    margin-bottom: ${({ marginBottom }) => marginBottom ? marginBottom/20 : 0}vw;
  }
`