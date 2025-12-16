export default function ButtonSVG() {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   //    width="320"
   //    height="80"
   width="340"
   height="100"
   fill="none"
   viewBox="-10 -10 340 100"
  >
   <path
    fill="#fff"
    fillOpacity="0.1"
    stroke="url(#a)"
    strokeWidth="2"
    filter="url(#f1)"
    d="M319 1v62.586L303.586 79H1V16.414L16.414 1H319Z"
   />
   <defs>
    <filter
     id="f1"
     x="-50%"
     y="-50%"
     width="200%"
     height="200%"
    >
     <feGaussianBlur
      in="SourceGraphic"
      stdDeviation="0.5"
     />
    </filter>
    <linearGradient
     id="a"
     x1="0"
     x2="321.695"
     y1="0"
     y2="7.525"
     gradientUnits="userSpaceOnUse"
    >
     <stop
      stopColor="#fff"
      stopOpacity=".2"
     />
     <stop
      offset=".495"
      stopColor="#161616"
      stopOpacity="0"
     />
     <stop
      offset="1"
      stopColor="#fff"
      stopOpacity=".2"
     />
    </linearGradient>
   </defs>
  </svg>
 );
}
