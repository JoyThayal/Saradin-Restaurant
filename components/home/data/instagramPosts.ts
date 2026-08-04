export interface InstagramPost {
  id: number;
  src: string;
  alt: string;
  link: string;
  isVideo?: boolean;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    src: "/insta/insta-1.png",
    alt: "Guest Interview & Review",
    link: "https://instagram.com",
    isVideo: true,
  },
  {
    id: 2,
    src: "/insta/insta-2.png",
    alt: "FIFA World Cup Bonanza Winners",
    link: "https://instagram.com",
  },
  {
    id: 3,
    src: "/insta/insta-3.png",
    alt: "Ilish Utsav Special Menu",
    link: "https://instagram.com",
  },
  {
    id: 4,
    src: "/insta/insta-5.png",
    alt: "Fried Hilsa Fish Thali",
    link: "https://instagram.com",
  },
];
