import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: #172a4f;
  padding: 23px 80px 23px 87px;
  color: #fff;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;

  & > ul > li > div {
    color: #fff;
  }

  @media only screen and (max-width: 1900px) {
    font-size: 2.2vw;
    padding: 1.2vw 5vw;
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  padding-right: 249px;
  cursor: pointer;

  @media only screen and (max-width: 1900px) {
    padding-right: 8vw;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const StyledAvatar = styled.div<{ src: string }>`
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  width: 75px;
  height: 75px;
`;

export const StyledAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 57px;
  margin-left: 57px;

  & > svg,
  div {
    cursor: pointer;
  }

  @media only screen and (max-width: 1900px) {
    gap: 2vw;
    margin-left: 3;
  }

  @media only screen and (max-width: 1024px) {
    gap: 5vw;
    margin-left: auto;
  }
`;

export const StyledNavBar = styled.div`
  display: none;

  .hamburger-menu {
    --x-width: calc(var(--hamburger-height) * 1.41421356237);

    display: flex;
    flex-direction: column;
    gap: 6px;
    width: max-content;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  .hamburger-menu:has(input:checked) {
    --foreground: white;
    --background: #333;
  }

  .hamburger-menu:has(input:focus-visible)::before,
  .hamburger-menu:has(input:focus-visible)::after,
  .hamburger-menu input:focus-visible {
    border: 1px solid var(--background);
    box-shadow: 0 0 0 1px var(--foreground);
  }

  .hamburger-menu::before,
  .hamburger-menu::after,
  .hamburger-menu input {
    content: "";
    width: var(--bar-width);
    height: var(--bar-height);
    background-color: #fff;
    border-radius: 9999px;
    transform-origin: left center;
    transition: opacity var(--animation-timing), width var(--animation-timing),
      rotate var(--animation-timing), translate var(--animation-timing);
  }

  .hamburger-menu input {
    appearance: none;
    padding: 0;
    margin: 0;
    outline: none;
    pointer-events: none;
  }

  .hamburger-menu:has(input:checked)::before {
    rotate: 45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / -2);
  }

  .hamburger-menu:has(input:checked)::after {
    rotate: -45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / 2);
  }

  .hamburger-menu input:checked {
    opacity: 0;
    width: 0;
  }

  .sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    transition: translate var(--animation-timing);
    translate: -100%;
    background-color: var(--foreground);
    color: var(--background);
    width: 100%;
    min-height: 100vh;

    & li {
      font-size: 7vw;
      padding: 4vh 0;
    }
  }

  .hamburger-menu:has(input:checked) + .sidebar {
    translate: 0;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;
