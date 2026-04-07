export interface ItemAuctionHighlight {
  id: string;
  title: string;
  image: string;
  amount: string;
}

export interface AuctionSession {
  session: number;
  date: string;
  time: string;
  lots: string;
  categories: string;
  approxRate: string;
};