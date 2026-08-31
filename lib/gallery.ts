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
  src: string | StaticImageData;
  alt: string;
  caption: string;
  tag: string;
  width: number;
  height: number;
};

export const GALLERY: GalleryItem[] = [
  {
    src: Image1,
    alt: "Security officers conducting a perimeter inspection at an industrial facility",
    caption: "Perimeter Inspection, Industrial Facility",
    tag: "Security Operations",
    width: 1264,
    height: 1095,
  },
  {
    src: Image2,
    alt: "Uniformed security team receiving a briefing in formation at dawn",
    caption: "Personnel Briefing & Training",
    tag: "Manpower & Training",
    width: 1280,
    height: 960,
  },
  {
    src: Image3,
    alt: "Workers loading palletized goods onto trucks in a logistics warehouse",
    caption: "Procurement & Distribution Warehouse",
    tag: "Procurement & Supply",
    width: 1280,
    height: 960,
  },
  {
    src: Image4,
    alt: "Engineers in hard hats reviewing blueprints at a construction site",
    caption: "Engineering Site Review",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    src: Image5,
    alt: "Access control checkpoint at night with security officer checking credentials",
    caption: "Access Control, Night Duty",
    tag: "Security Operations",
    width: 1280,
    height: 960,
  },
  {
    src: Image6,
    alt: "Executives in a boardroom signing a contract against the Abuja skyline",
    caption: "Contract Execution, Abuja",
    tag: "Corporate",
    width: 810,
    height: 1080,
  },
  {
    src: Image7,
    alt: "Security operative on duty in a corporate environment",
    caption: "Corporate Protective Duty",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    src: Image8,
    alt: "Protective detail escorting an executive through a corporate lobby",
    caption: "Executive Protection Detail",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    src: Image9,
    alt: "Engineering and technical project delivery",
    caption: "Technical Project Delivery",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    src: Image10,
    alt: "Security operators monitoring a control room video wall",
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    src: Image11,
    alt: "Security officers conducting a perimeter inspection at an industrial facility",
    caption: "Perimeter Inspection, Industrial Facility",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    src: Image12,
    alt: "Uniformed security team receiving a briefing in formation at dawn",
    caption: "Personnel Briefing & Training",
    tag: "Manpower & Training",
    width: 960,
    height: 1280,
  },
  {
    src: Image13,
    alt: "Workers loading palletized goods onto trucks in a logistics warehouse",
    caption: "Procurement & Distribution Warehouse",
    tag: "Procurement & Supply",
    width: 1280,
    height: 960,
  },
  {
    src: Image14,
    alt: "Engineers in hard hats reviewing blueprints at a construction site",
    caption: "Engineering Site Review",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    src: Image15,
    alt: "Access control checkpoint at night with security officer checking credentials",
    caption: "Access Control, Night Duty",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    src: Image16,
    alt: "Executives in a boardroom signing a contract against the Abuja skyline",
    caption: "Contract Execution, Abuja",
    tag: "Corporate",
    width: 1280,
    height: 960,
  },
  {
    src: Image17,
    alt: "Security operative on duty in a corporate environment",
    caption: "Corporate Protective Duty",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    src: Image18,
    alt: "Protective detail escorting an executive through a corporate lobby",
    caption: "Executive Protection Detail",
    tag: "Protection",
    width: 960,
    height: 1280,
  },
  {
    src: Image19,
    alt: "Engineering and technical project delivery",
    caption: "Technical Project Delivery",
    tag: "Engineering & Projects",
    width: 960,
    height: 1280,
  },
  {
    src: Image20,
    alt: "Security operators monitoring a control room video wall",
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
  {
    src: Image21,
    alt: "Security operators monitoring a control room video wall",
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 720,
    height: 1280,
  },
  {
    src: Image22,
    alt: "Security operators monitoring a control room video wall",
    caption: "Monitoring & Command Centre",
    tag: "Security Operations",
    width: 960,
    height: 1280,
  },
];
