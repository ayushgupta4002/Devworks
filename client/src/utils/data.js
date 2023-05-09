import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Quality",
    projects: " Committed to delivering high-quality and optimized projects ",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Customer Service",
    projects: "We are always available to answer any questions or concerns.",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Competitive Pricing",
    projects: "Competitive development services, without compromising on quality.",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
"At DevWorks, we specialize in providing high-quality and optimized development services to organizations of all sizes",
  "We understand that having a strong online presence is essential for any modern business, and that's why we work closely with our clients to ensure that their websites are visually appealing, user-friendly, and optimized for search engines.",
];



export const comments = [
  {
    name: "Aditya Singh",
    post: "Full Stack Developer",
    comment:
      "The team of professionals works closely with clients to understand their unique needs and develop customized solutions that meet those needs.",
    img: "./aditya.jpg",
  },

  {
    name: "Himesh Nayak",
    post: "Software Developer",
    comment:
      "took our project to the next level with their expertise in web development. They were able to translate our vision into a reality and deliver a website that exceeded our expectations.",
    img: "./himesh.jpg",
  },
  {
    name: "Shubh Sardana",
    post: "App Developer",
    comment:
      "Their commitment to customer service is unparalleled. They are always available to answer questions and address any concerns their clients may have.",
    img: "./shubh.jpg",
  },


];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
