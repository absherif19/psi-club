import orangeicon from "../../assets/orangeicon.svg";
import greenicon from "../../assets/greenicon.svg";

const cardData = [
  {
    id: "referrals",
    title: "Total Referrals",
    subtitle: "6 open / 9 Closed",
    value: "15 Client",
    valueColor: "#E35F27",
    icon: orangeicon,
    bgColor: "bg-orange-100",
    link: "/all-my-referrals",
  },
  {
    id: "commissions",
    title: "Total Commission",
    subtitle: "6 Paid / 9 in Progress",
    value: "420,000 AED",
    valueColor: "#00A664",
    icon: greenicon,
    bgColor: "bg-green-100",
    link: "/all-my-commissions",
  },
];

export default cardData;
