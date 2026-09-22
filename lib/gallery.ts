import Image1 from "@/public/assets/images/image1.jpeg";
import Image2 from "@/public/assets/images/image2.jpeg";
import Image3 from "@/public/assets/images/image3.jpeg";
import Image4 from "@/public/assets/images/image4.jpeg";
import Image5 from "@/public/assets/images/image5.jpeg";
import Image6 from "@/public/assets/images/image6.jpeg";
import Image7 from "@/public/assets/images/image7.jpeg";
import Image8 from "@/public/assets/images/image8.jpeg";
import Image9 from "@/public/assets/images/image9.jpeg";
import Image10 from "@/public/assets/images/image10.jpeg";
import Image11 from "@/public/assets/images/image11.jpeg";
import Image12 from "@/public/assets/images/image12.jpeg";
import Image13 from "@/public/assets/images/image13.jpeg";
import Image14 from "@/public/assets/images/image14.jpeg";
import Image15 from "@/public/assets/images/image15.jpeg";
import Image16 from "@/public/assets/images/image16.jpeg";
import Image17 from "@/public/assets/images/image17.jpeg";
import Image18 from "@/public/assets/images/image18.jpeg";
import Image19 from "@/public/assets/images/image19.jpeg";
import Image20 from "@/public/assets/images/image20.jpeg";
import Image21 from "@/public/assets/images/image21.jpeg";
import Image22 from "@/public/assets/images/image22.jpeg";
import { StaticImageData } from "next/image";

export type GalleryItem = {
  id: string;
  src: string | StaticImageData;
  caption: string;
  tag: string;
  width: number;
  height: number;
  date?: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    src: Image1,
    caption: "Perimeter Inspection, Industrial Facility",
    tag: "Security Operations",
    width: 1264,
    height: 1095,
  },
  {
    id: "2",
    src: Image2,
    caption: "Personnel Briefing & Training",
    tag: "Manpower & Training",
    width: 1280,
    height: 960,
  },
  {
    id: "3",
    src: Image3,
    caption: "Procurement & Distribution Warehouse",
    tag: "Procurement & Supply",
    width: 1280,
    height: 960,
  },
  {
    id: "4",
    src: Image4,
    caption: "Engineering Site Review",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    id: "5",
    src: Image5,
    caption: "Access Control, Night Duty",
    tag: "Security Operations",
    width: 1280,
    height: 960,
  },
  {
    id: "6",
    src: Image6,
    caption: "Contract Execution, Abuja",
    tag: "Corporate",
    width: 810,
    height: 1080,
  },
  {
    id: "7",
    src: Image7,
    caption: "Corporate Protective Duty",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    id: "8",
    src: Image8,
    caption: "Executive Protection Detail",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    id: "9",
    src: Image9,
    caption: "Technical Project Delivery",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    id: "10",
    src: Image10,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    id: "11",
    src: Image11,
    caption: "Perimeter Inspection, Industrial Facility",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    id: "12",
    src: Image12,
    caption: "Personnel Briefing & Training",
    tag: "Manpower & Training",
    width: 960,
    height: 1280,
  },
  {
    id: "13",
    src: Image13,
    caption: "Procurement & Distribution Warehouse",
    tag: "Procurement & Supply",
    width: 1280,
    height: 960,
  },
  {
    id: "14",
    src: Image14,
    caption: "Engineering Site Review",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    id: "15",
    src: Image15,
    caption: "Access Control, Night Duty",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    id: "16",
    src: Image16,
    caption: "Contract Execution, Abuja",
    tag: "Corporate",
    width: 1280,
    height: 960,
  },
  {
    id: "17",
    src: Image17,
    caption: "Corporate Protective Duty",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    id: "18",
    src: Image18,
    caption: "Executive Protection Detail",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    id: "19",
    src: Image19,
    caption: "Technical Project Delivery",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    id: "20",
    src: Image20,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    id: "21",
    src: Image21,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 720,
    height: 1280,
  },
  {
    id: "22",
    src: Image22,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
];

export type CarouselGalleryItem = {
  id: string;
  src: string | StaticImageData;
  caption: string;
  tag: string;
  /** width / height, e.g. 4/5 for portrait, 16/9 for landscape, 1 for square */
  aspectRatio: number;
  /** controls the height tier — this is what creates the irregular rhythm */
  size?: "sm" | "md" | "lg";
  date?: string;
};

export const CAROUSEL_GALLERY_ITEMS: CarouselGalleryItem[] = [
  {
    id: "1",
    src: Image1,
    caption: "Perimeter Inspection, Industrial Facility",
    tag: "Security Operations",
    aspectRatio: Image1.width / Image1.height,
    size: "lg",
  },
  {
    id: "2",
    src: Image2,
    caption: "Personnel Briefing & Training",
    tag: "Manpower & Training",
    aspectRatio: Image2.width / Image2.height,
    size: "lg",
  },
  {
    id: "3",
    src: Image3,
    caption: "Procurement & Distribution Warehouse",
    tag: "Procurement & Supply",
    aspectRatio: Image3.width / Image3.height,
    size: "lg",
  },
  {
    id: "4",
    src: Image4,
    caption: "Engineering Site Review",
    tag: "Engineering & Projects",
    aspectRatio: Image4.width / Image4.height,
    size: "lg",
  },
  {
    id: "5",
    src: Image5,
    caption: "Access Control, Night Duty",
    tag: "Security Operations",
    aspectRatio: Image5.width / Image5.height,
    size: "lg",
  },
  {
    id: "6",
    src: Image6,
    caption: "Contract Execution, Abuja",
    tag: "Corporate",
    aspectRatio: Image6.width / Image6.height,
    size: "lg",
  },
  {
    id: "7",
    src: Image7,
    caption: "Corporate Protective Duty",
    tag: "Protection",
    aspectRatio: Image7.width / Image7.height,
    size: "lg",
  },
  {
    id: "8",
    src: Image8,
    caption: "Executive Protection Detail",
    tag: "Protection",
    aspectRatio: Image8.width / Image8.height,
    size: "lg",
  },
  {
    id: "9",
    src: Image9,
    caption: "Technical Project Delivery",
    tag: "Engineering & Projects",
    aspectRatio: Image9.width / Image9.height,
    size: "lg",
  },
  {
    id: "10",
    src: Image10,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    aspectRatio: Image10.width / Image10.height,
    size: "lg",
  },
  {
    id: "11",
    src: Image11,
    caption: "Perimeter Inspection, Industrial Facility",
    tag: "Security Operations",
    aspectRatio: Image11.width / Image11.height,
    size: "lg",
  },
  {
    id: "12",
    src: Image12,
    caption: "Personnel Briefing & Training",
    tag: "Manpower & Training",
    aspectRatio: Image12.width / Image12.height,
    size: "lg",
  },
  {
    id: "13",
    src: Image13,
    caption: "Procurement & Distribution Warehouse",
    tag: "Procurement & Supply",
    aspectRatio: Image13.width / Image13.height,
    size: "lg",
  },
  {
    id: "14",
    src: Image14,
    caption: "Engineering Site Review",
    tag: "Engineering & Projects",
    aspectRatio: Image14.width / Image14.height,
    size: "lg",
  },
  {
    id: "15",
    src: Image15,
    caption: "Access Control, Night Duty",
    tag: "Security Operations",
    aspectRatio: Image15.width / Image15.height,
    size: "lg",
  },
  {
    id: "16",
    src: Image16,
    caption: "Contract Execution, Abuja",
    tag: "Corporate",
    aspectRatio: Image16.width / Image16.height,
    size: "lg",
  },
  {
    id: "17",
    src: Image17,
    caption: "Corporate Protective Duty",
    tag: "Protection",
    aspectRatio: Image17.width / Image17.height,
    size: "lg",
  },
  {
    id: "18",
    src: Image18,
    caption: "Executive Protection Detail",
    tag: "Protection",
    aspectRatio: Image18.width / Image18.height,
    size: "lg",
  },
  {
    id: "19",
    src: Image19,
    caption: "Technical Project Delivery",
    tag: "Engineering & Projects",
    aspectRatio: Image19.width / Image19.height,
    size: "lg",
  },
  {
    id: "20",
    src: Image20,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    aspectRatio: Image20.width / Image20.height,
    size: "lg",
  },
  {
    id: "21",
    src: Image21,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    aspectRatio: Image21.width / Image21.height,
    size: "lg",
  },
  {
    id: "22",
    src: Image22,
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    aspectRatio: Image22.width / Image22.height,
    size: "lg",
  },
];
