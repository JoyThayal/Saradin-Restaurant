export interface Review {
  id: number;
  text: string;
  rating: number;
  name: string;
  role: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    text: `Very good and tasty food.. by taste easily compare with "vuter raja dilo bor"... Good service and also price is affordable....for Bengali food must try ....we ordered gondhoraj chicken fry in starter.... Bengali thali with pabda jhal,bhetki paturi, mutton and pomfret fry..nolen gur ice cream in dessert was wosome....`,
    rating: 5,
    name: "Shipra Adhikary Shaw",
    role: "Local Guide & Foodie",
    avatar: "/images/reviewer-1.png",
  },
  {
    id: 2,
    text: `Amazing authentic Bengali cuisine! The ambience gives pure heritage vibes and the staff behavior is top-notch. Highly recommended for family dinners!`,
    rating: 5,
    name: "Rahul Roy",
    role: "Verified Customer",
    avatar: "/images/reviewer-2.png",
  },
];
