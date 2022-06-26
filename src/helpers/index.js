import work1 from "../assets/images/work1.png";
import work2 from "../assets/images/work2.png";
import work3 from "../assets/images/work3.png";
import work4 from "../assets/images/work4.png";
import work5 from "../assets/images/work5.png";
import work6 from "../assets/images/work6.png";
import work7 from "../assets/images/work7.png";

import writting1 from "../assets/images/writting1.png";
import writting2 from "../assets/images/writting2.png";
import writting3 from "../assets/images/writting3.png";
import writting4 from "../assets/images/writting4.png";

export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behaviour: "smooth",
  });
};

export const homeCardDatas = [
  {
    image: work1,
    title: "Eze Wholesale",
    subTitle: "UX Design",
    cardUrl: "/case-study/0",
    cardFullUrl: "",
  },
  {
    image: work2,
    title: "Taeillo v2",
    subTitle: "Product",
    cardUrl: "/case-study/1",
    cardFullUrl: "",
  },
  {
    image: work3,
    title: "Carrot Credit",
    subTitle: "Product & UX Design",
    cardUrl: "/case-study/2",
    cardFullUrl: "",
  },
  {
    image: work4,
    title: "Spasora",
    subTitle: "Product & UX Design",
    cardUrl: "/case-study/3",
    cardFullUrl: "",
  },
  {
    image: work5,
    title: "Chaka",
    subTitle: "UX Design",
    cardUrl: "/case-study/4",
    cardFullUrl: "",
  },
  {
    image: work6,
    title: "Inventory Management System",
    subTitle: "Product & UX Design",
    cardUrl: "/case-study/5",
    cardFullUrl: "",
  },
  {
    image: work7,
    title: "Mirene",
    subTitle: "UX Design",
    cardUrl: "/case-study/6",
    cardFullUrl: "",
  },
];


export const writtingCardDatas = [
  {
    image: writting1,
    title:
      "Finding Balance in Design implementation using the Fibonacci Sequence",
    cardUrl: "/case-study/1",
  },
  {
    image: writting2,
    title:
      "Positioning for Global Impact :: What we can learn from Enyata’s new brand identity",
    cardUrl: "/case-study/2",
  },
  {
    image: writting3,
    title: "Hacking the Human Mind :: Designing Addictive User Interfaces",
    cardUrl: "/case-study/3",
  },
  {
    image: writting4,
    title: "Using Grids to build Responsive Web UI",
    cardUrl: "/case-study/4",
  },
];
