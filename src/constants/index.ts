import type { AuctionSession, ItemAuctionHighlight } from "../types";
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

export const AUCTION_SESSIONS: AuctionSession[] = [
  {
    session: 1,
    date: "Thursday 5 March",
    time: "9 am - 7:30 pm",
    lots: "Lots 2 - 753",
    categories:
      "Antique Painting and Prints, Maps, Botanical Art, and Traditional European Art",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 2,
    date: "Friday 6 March",
    time: "9 am - 7 pm",
    lots: "Lots 755 - 1493",
    categories: "Contemporary Decorative Art",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 3,
    date: "Saturday 7 March",
    time: "8:30 am - 7:30 pm",
    lots: "Lots 1501 - 2249",
    categories:
      "Objects of Vertu, Silver, Glassware, Ceramics and Collectables",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 4,
    date: "Sunday 8 March",
    time: "8:30 am - 7:30 pm",
    lots: "Lots 2251 - 3149",
    categories:
      "Objects of Vertu, Silver, Glassware, Ceramics and Collectables",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 5,
    date: "Monday 9 March",
    time: "9 am - 5 pm",
    lots: "Lots 3151 - 3748R",
    categories: "Homeware and Decor",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 6,
    date: "Tuesday 10 March",
    time: "9 am - 2 pm",
    lots: "Lots 3751 - 4100",
    categories: "Silver, Collectable and Costume Jewellery",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 7,
    date: "Tuesday 10 March",
    time: "2 pm - 7 pm",
    lots: "Lots 4101 - 4430",
    categories: "Fine Gold, Antique and Collectable Jewellery",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 8,
    date: "Wednesday 11 March",
    time: "8 am - 1 pm",
    lots: "Lots 4451 - 4689",
    categories: "Fine Watches, Luxury Pens & Lighters",
    approxRate: "Approx. 50 lots an hour",
  },
  {
    session: 9,
    date: "Wednesday 11 March",
    time: "2 pm - 6:30 pm",
    lots: "Lots 4701 - 5049",
    categories: "Designer Handbags & Fashion",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 10,
    date: "Thursday 12 March",
    time: "9 am - 2 pm",
    lots: "Lots 5051 - 5432",
    categories: "Books",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 11,
    date: "Thursday 12 March",
    time: "2 pm - 6 pm",
    lots: "Lots 5451 - 5699",
    categories: "Carpets, Tapestries and Textiles",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 12,
    date: "Friday 13 March",
    time: "9 am - 8 pm",
    lots: "Lots 5701 - 6349",
    categories: "Interior Design and Furniture",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 13,
    date: "Saturday 14 March",
    time: "9 am - 2:30 pm",
    lots: "Lots 6351 - 6812",
    categories: "Classical African & Asian Art and Ceramics",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 14,
    date: "Saturday 14 March",
    time: "3 pm - 6:30 pm",
    lots: "Lots 6814 - 6996",
    categories: "Modern and Postmodern Painting, Drawing, Prints and Sculpture",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 15,
    date: "Saturday 14 March",
    time: "6:30 pm - 8 pm",
    lots: "Lots 7001 - 7107",
    categories: "Furniture Part I: East-Asian Furnishings",
    approxRate: "Approx. 65 lots an hour",
  },
  {
    session: 16,
    date: "Sunday 15 March",
    time: "8:30 am - 8:30 pm",
    lots: "Lots 7107A - 8108",
    categories:
      "Furniture Part II: Antique, Mid-century, and Designer Furniture",
    approxRate: "Approx. 65 lots an hour",
  },
];
