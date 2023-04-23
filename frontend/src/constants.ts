import VerifyIdentity from "./assets/VerifyIdentity.png";
import FundAccount from "./assets/FundAccount.png";
import StartTrading from "./assets/StartTrading.png";

export const NAV_LIST = [
  { value: "Market", id: 1 },
  { value: "Trade", id: 2 },
  { value: "Dashboard", id: 3 },
];

export const SIDE_LIST = [
  { value: "Wallet", id: 4 },
  { value: "Orders", id: 5 },
];

export const CURRENCIES_HEADER_ITEMS = [
  { value: "Name", id: 1 },
  { value: "Price", id: 2 },
  { value: "24h Change", id: 3 },
  { value: "Market Cap", id: 4 },
];

export const TRADE_STEPS = [
  {
    number: 1,
    title: "Verify your identity.",
    description:
      "Complete the identity verification process to secure your account and transactions.",
    src: VerifyIdentity,
  },
  {
    number: 2,
    title: "Fund your account.",
    description:
      "Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.",
    src: FundAccount,
  },
  {
    number: 3,
    title: "Start trading.",
    description:
      "You’re good to go! Buy/sell crypto, set up your account and discover what BxLend has to offer.",
    src: StartTrading,
  },
];

export const INFO_ITEMS = [
  {
    title: "1M+",
    description: "Verified users",
    id: 1,
  },
  {
    title: "99+",
    description: "Countries supported",
    src: FundAccount,
    id: 2,
  },
  {
    title: "$99B+",
    description: "Quarterly trading volume",
    id: 3,
  },
];

export const HELP_ITEMS = [
  {
    title: "Chat support",
    description: "Lorem ipsum dorem",
    id: 1,
  },
  {
    title: "FAQ",
    description: "Lorem ipsum dorem",
    src: FundAccount,
    id: 2,
  },
  {
    title: "Blog",
    description: "Lorem ipsum dorem",
    id: 3,
  },
];
