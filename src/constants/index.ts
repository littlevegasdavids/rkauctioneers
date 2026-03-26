import type { ItemAuctionHighlight } from "../types";
import image1 from "@/assets/items/1.avif";
import image2 from "@/assets/items/2.avif";
import image3 from "@/assets/items/3.avif";
import image4 from "@/assets/items/4.avif";
import image5 from "@/assets/items/5.avif";

export const AUCTION_HIGHLIGHTS: ItemAuctionHighlight[] = [
  {
    id: "1",
    title: "Guy du Toit, Dancing in the Moonlight",
    image: image1,
    amount: "R360 000",
  },
  {
    id: "2",
    title: "Mies van der Rohe Barcelona daybed",
    image: image2,
    amount: "R130 000",
  },
  {
    id: "3",
    title: "Wallace sterling silver cutlery set",
    image: image3,
    amount: "R260 000",
  },
  {
    id: "4",
    title: "Marieke Prinsloo-Rowe, Awaiting Your Return",
    image: image4,
    amount: "R160 000",
  },
  {
    id: "5",
    title: "Ercole Barovier, 'Caccia' vase",
    image: image5,
    amount: "R110 000",
  },
];
