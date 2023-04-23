import styled from "styled-components";

export const StyledHeaderList = styled.ul<{ isNav?: boolean; gap: number }>`
  display: flex;
  gap: ${({ gap }) => gap}px;
  margin-left: ${({ isNav }) => (isNav ? 0 : "auto")};

  @media only screen and (min-width: 1024px) and (max-width: 1900px) {
    gap: ${({ gap }) => gap / 20}vw;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
