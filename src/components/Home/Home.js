import React from "react";
import Banner from "../Banner/Banner";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
// import MenWomenKids from '../MenWomenKids/MenWomenKids';
import NewProduct from "../NewProduct/NewProduct";
import Review from "../Review/Review";
import Sliders from "../Sliders/Sliders";
import Sponsored from "../Sponsored/Sponsored";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import "./Home.css";
import animSvg from "./anim.svg";

const Home = (props) => {
  const { handleAddToCart, products } = props;

  return (
    <div className="left-right">
      <Sliders />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={850}
        height={850}
        viewBox="0 0 850 850"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <clipPath id="animationMask_pYEn6qPGcd">
            <rect width={850} height={850} x={0} y={0} />
          </clipPath>
          <clipPath id="cp_X5SEy1eq">
            <path d="M0,0 L1400,0 L1400,1400 L0,1400z" />
          </clipPath>
          <clipPath id="hKBRP8FYHW">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M478,811.999 C460,832 406,941 484,1029 C564,1118 684,1068 711,1031 C715,1025 906,826 906,826 C906,826 829,801 829,801 C829,801 712,925 708,929 C681,956 658,989 636,997 C615,1006 577,1016 544,985 C508,952 513,903 523,880 C534,855 550,841 550,841 C550,841 727,651 727,651 C727,651 671,605 671,605 C671,605 512,774 512,774 C512,774 497,791 478,812"
              fillOpacity={1}
            />
          </clipPath>
          <clipPath id="cp_VXt93heR">
            <path d="M0,0 L1400,0 L1400,1400 L0,1400z" />
          </clipPath>
          <clipPath id="xZ1Kq9wrj5">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M627.3,325.45 C627,325 552,307 492,366 C430,425 442,504 442,504 C442,504 449,556 478,590 C494,609 603,718 603,718 C603,718 650,663 650,663 C650,663 531,545 528,535 C513,510 501,454 543,417 C583,383 632,397 644,408 C654,410 869,643 869,643 C869,643 915,587 915,587 C915,587 704,363 694,354 C669,332 627,325 627,325"
              fillOpacity={1}
            />
          </clipPath>
          <clipPath id="cp_cDHdMzYD">
            <path d="M0,0 L51,0 L51,52 L0,52z" />
          </clipPath>
          <clipPath id="cp_NEVEaD74">
            <path d="M0,0 L51,0 L51,52 L0,52z" />
          </clipPath>
          <clipPath id="Rt76IudLJG">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M141.106,206.717 C141,207 110,239 110,239 C110,239 145,276 145,276 C145,276 177,242 177,242 C177,242 141,207 141,207"
              fillOpacity={1}
            />
          </clipPath>
          <linearGradient
            id="gr_MtqnxiKxfO"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="23.323"
            y1="352.344"
            x2="333.867"
            y2="22.766"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <clipPath id="Kwp72SP1Vi">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M124.626,32.564 C125,33 40,109 40,109 C40,109 125,185 125,185 C125,185 209,109 209,109 C209,109 125,33 125,33"
              fillOpacity={1}
            />
          </clipPath>
          <clipPath id="UC4dzz6SbL">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M110.862,203.395 C111,203 72,236 72,236 C72,236 161,329 161,329 C161,329 199,295 199,295 C199,295 111,203 111,203"
              fillOpacity={1}
            />
          </clipPath>
          <clipPath id="cp_g3M9pF6p">
            <path d="M0,0 L51,0 L51,52 L0,52z" />
          </clipPath>
          <linearGradient
            id="gr_vtsjGZtr3C"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="62.14"
            y1="189.033"
            x2="193.065"
            y2="322.973"
          >
            <stop offset="0%" stopColor="rgb(163,75,150)" />
            <stop offset="18%" stopColor="rgb(82,37,94)" />
            <stop offset="35%" stopColor="rgb(0,0,38)" />
            <stop offset="53%" stopColor="rgb(0,0,38)" />
            <stop offset="70%" stopColor="rgb(0,0,38)" />
            <stop offset="85%" stopColor="rgb(35,73,111)" />
            <stop offset="100%" stopColor="rgb(71,146,185)" />
          </linearGradient>
          <clipPath id="NX9Qtx5rYS">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M91.194,150.86 C91,151 26,211 26,211 C26,211 168,348 168,348 C168,348 223,295 223,295 C223,295 91,151 91,151"
              fillOpacity={1}
            />
          </clipPath>
          <linearGradient
            id="gr_8fO5Eg62dm"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="20.389"
            y1="22.001"
            x2="333.534"
            y2="351.158"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <clipPath id="cp_5lgIY1RF">
            <path d="M0,0 L51,0 L51,52 L0,52z" />
          </clipPath>
          <linearGradient
            id="gr_YMBCFjNbtK"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="252.962"
            y1="23.148"
            x2="186.511"
            y2="57.098"
          >
            <stop offset="0%" stopColor="rgb(0,0,38)" />
            <stop offset="50%" stopColor="rgb(38,71,110)" />
            <stop offset="100%" stopColor="rgb(76,142,183)" />
          </linearGradient>
          <clipPath id="zsgTHL16qT">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M222.668,-8.017 C223,-8 148,17 148,17 C148,17 253,122 253,122 C253,122 293,68 293,68 C293,68 223,-8 223,-8"
              fillOpacity={1}
            />
          </clipPath>
          <linearGradient
            id="gr_NNI1GmQDz4"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="209.954"
            y1="279.226"
            x2="289.12"
            y2="209.59"
          >
            <stop offset="0%" stopColor="rgb(147,87,156)" />
            <stop offset="50%" stopColor="rgb(73,44,97)" />
            <stop offset="100%" stopColor="rgb(0,0,38)" />
          </linearGradient>
          <clipPath id="DxCx4kCXHd">
            <path
              fill="#ffffff"
              clipRule="nonzero"
              d=" M229.381,220.652 C229,221 163,233 163,233 C163,233 246,316 246,316 C246,316 345,189 345,189 C345,189 356,138 356,138 C356,138 343,180 315,201 C271,234 229,221 229,221"
              fillOpacity={1}
            />
          </clipPath>
          <linearGradient
            id="gr_Rj5xmAuElX"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="23.323"
            y1="352.344"
            x2="333.867"
            y2="22.766"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <clipPath id="cp_VvumjY56">
            <path d="M0,0 L1400,0 L1400,1400 L0,1400z" />
          </clipPath>
          <linearGradient
            id="gr_88UEexeqf5"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="20.389"
            y1="22.001"
            x2="333.534"
            y2="351.158"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <linearGradient
            id="gr_1ZfHCsuQpL"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="20.389"
            y1="22.001"
            x2="333.534"
            y2="351.158"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <clipPath id="cp_IuP4mNlh">
            <path d="M0,0 L1400,0 L1400,1400 L0,1400z" />
          </clipPath>
          <linearGradient
            id="gr_NQnuU5stB6"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="20.389"
            y1="22.001"
            x2="333.534"
            y2="351.158"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <linearGradient
            id="gr_fs2OIED50u"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="23.323"
            y1="352.344"
            x2="333.867"
            y2="22.766"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <clipPath id="cp_qFN6GFYX">
            <path d="M0,0 L1400,0 L1400,1400 L0,1400z" />
          </clipPath>
          <linearGradient
            id="gr_hQZuKNj2qG"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="20.389"
            y1="22.001"
            x2="333.534"
            y2="351.158"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
          <linearGradient
            id="gr_i8UqqkCqKT"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
            x1="23.323"
            y1="352.344"
            x2="333.867"
            y2="22.766"
          >
            <stop offset="0%" stopColor="rgb(234,20,123)" />
            <stop offset="50%" stopColor="rgb(124,105,164)" />
            <stop offset="100%" stopColor="rgb(15,189,206)" />
          </linearGradient>
        </defs>
        <g clipPath="url(#animationMask_pYEn6qPGcd)">
          <g
            transform="matrix(1.43,0,0,1.43,170.46,267.714)"
            opacity={1}
            style={{ userSelect: "none", display: "none" }}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="rgb(57,68,80)"
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C15.638999999999996,230.974 15.064,290.70099999999996 46.83,323.705 C56.796,334.059 68.817,341.379 81.69,345.538"
                style={{ display: "none" }}
              />
            </g>
          </g>
          <g
            transform="matrix(1.43,0,0,1.43,170.46,267.714)"
            opacity={1}
            style={{ userSelect: "none", display: "none" }}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="rgb(57,68,80)"
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C327.977,154.586 336.781,125.408 333.445,97.832"
                style={{ display: "none" }}
              />
            </g>
          </g>
          <g
            transform="matrix(1.43,0,0,1.43,170.46068999999997,51.769799999999975)"
            opacity={1}
            style={{ userSelect: "none", display: "none" }}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0.016,0.071)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="rgb(57,68,80)"
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M308.833,322.591 C342.319,285.40500000000003 341.62,230.859 302.799,191.193 C302.799,191.193 246.212,131.193 206.065,88.625"
                style={{ display: "none" }}
              />
            </g>
          </g>
          <g
            transform="matrix(1.43,0,0,1.43,170.46068999999997,51.769799999999975)"
            opacity={1}
            style={{ userSelect: "none", display: "none" }}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0.016,0.071)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="rgb(57,68,80)"
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M166.892,47.089 C132.249,11.680999999999997 75.186,15.824000000000005 45.018,50.252 C12.32,87.56700000000001 16.067999999999998,141.689 50.711,177.105 C50.711,177.105 53.088,179.612 57.089,183.83"
                style={{ display: "none" }}
              />
            </g>
          </g>
          <g
            clipPath="url(#cp_qFN6GFYX)"
            style={{ display: "block" }}
            transform="matrix(0.9781476007338057,-0.20791169081775934,0.20791169081775934,0.9781476007338057,-405.8958204729257,-128.39054151390485)"
            opacity={1}
          >
            <g
              style={{ userSelect: "none", display: "block" }}
              transform="matrix(1.43,0,0,1.43,445.46062000000006,542.71349)"
              opacity="0.1"
            >
              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity={0}
                  stroke="url(#gr_i8UqqkCqKT)"
                  style={{ display: "block" }}
                  strokeOpacity={1}
                  strokeWidth={51}
                  d="M0 0 M122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C15.638999999999996,230.974 15.064,290.70099999999996 46.83,323.705 C79.398,357.542 133.921,358.98 168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C341.759,140.426 341.83099999999996,83.047 309.169,47.695 C276.51099999999997,12.347000000000001 223.478,12.420000000000002 188.989,47.857 C188.989,47.857 122.383,118.689 122.383,118.689z"
                />
              </g>
            </g>
            <g
              style={{ userSelect: "none", display: "block" }}
              transform="matrix(1.43,0,0,1.43,445.46062000000006,326.76919)"
              opacity="0.1"
            >
              <g opacity={1} transform="matrix(1,0,0,1,0.016,0.071)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity={0}
                  stroke="url(#gr_hQZuKNj2qG)"
                  style={{ display: "block" }}
                  strokeOpacity={1}
                  strokeWidth={51}
                  d="M0 0 M145.847,276.337 C145.847,276.337 188.716,320.16 188.716,320.16 C224.137,356.733 276.218,358.81 308.833,322.591 C342.319,285.40500000000003 341.62,230.859 302.799,191.193 C302.799,191.193 166.892,47.089 166.892,47.089 C132.249,11.680999999999997 75.186,15.824000000000005 45.018,50.252 C12.32,87.56700000000001 16.067999999999998,141.689 50.711,177.105 C50.711,177.105 145.847,276.337 145.847,276.337z"
                />
              </g>
            </g>
          </g>
          <g
            clipPath="url(#cp_IuP4mNlh)"
            style={{ display: "block" }}
            transform="matrix(0.8660254037844387,-0.49999999999999994,0.49999999999999994,0.8660254037844387,-538.3280551917653,134.24631896603063)"
            opacity="0.5"
          >
            <g
              style={{ userSelect: "none", display: "block" }}
              transform="matrix(1.43,0,0,1.43,445.46062000000006,542.71349)"
              opacity="0.1"
            >
              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity={0}
                  stroke="url(#gr_fs2OIED50u)"
                  style={{ display: "block" }}
                  strokeOpacity={1}
                  strokeWidth={51}
                  d="M0 0 M122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C15.638999999999996,230.974 15.064,290.70099999999996 46.83,323.705 C79.398,357.542 133.921,358.98 168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C341.759,140.426 341.83099999999996,83.047 309.169,47.695 C276.51099999999997,12.347000000000001 223.478,12.420000000000002 188.989,47.857 C188.989,47.857 122.383,118.689 122.383,118.689z"
                />
              </g>
            </g>
            <g
              style={{ userSelect: "none", display: "block" }}
              transform="matrix(1.43,0,0,1.43,445.46062000000006,326.76919)"
              opacity="0.1"
            >
              <g opacity={1} transform="matrix(1,0,0,1,0.016,0.071)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity={0}
                  stroke="url(#gr_NQnuU5stB6)"
                  style={{ display: "block" }}
                  strokeOpacity={1}
                  strokeWidth={51}
                  d="M0 0 M145.847,276.337 C145.847,276.337 188.716,320.16 188.716,320.16 C224.137,356.733 276.218,358.81 308.833,322.591 C342.319,285.40500000000003 341.62,230.859 302.799,191.193 C302.799,191.193 166.892,47.089 166.892,47.089 C132.249,11.680999999999997 75.186,15.824000000000005 45.018,50.252 C12.32,87.56700000000001 16.067999999999998,141.689 50.711,177.105 C50.711,177.105 145.847,276.337 145.847,276.337z"
                />
              </g>
            </g>
          </g>
          <g
            clipPath="url(#cp_VvumjY56)"
            transform="matrix(0.8910065241883679,-0.45399049973954675,0.45399049973954675,0.8910065241883679,-506.4979167495403,109.08878288582514)"
            opacity="0.7000000000000001"
          >
            <g
              transform="matrix(1.6624100000000002,0,0,1.55588,407.47219090000004,534.8821956)"
              opacity={1}
              style={{ userSelect: "none" }}
            >
              <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity={0}
                  strokeDasharray=" 0 6"
                  strokeDashoffset={0}
                  stroke="url(#gr_1ZfHCsuQpL)"
                  strokeOpacity={1}
                  strokeWidth={2}
                  d="M0 0 M23.799,256.457 C22.274,281.317 30.029,306.249 46.83,323.705 C79.398,357.542 133.921,358.98 168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C341.759,140.426 341.83099999999996,83.047 309.169,47.695 C276.51099999999997,12.347000000000001 223.478,12.420000000000002 188.989,47.857 C188.989,47.857 122.383,118.689 122.383,118.689 C122.383,118.689 122.383,118.689 122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C33.876,212.231 25.157,234.315 23.799,256.457"
                />
              </g>
            </g>
            <g
              transform="matrix(1.67414,0,0,1.56485,405.96569806,301.73871875000003)"
              opacity={1}
              style={{ userSelect: "none" }}
            >
              <g opacity={1} transform="matrix(1,0,0,1,0.016,0.071)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity={0}
                  strokeDasharray=" 0 6"
                  strokeDashoffset={0}
                  stroke="url(#gr_88UEexeqf5)"
                  strokeOpacity={1}
                  strokeWidth={2}
                  d="M0 0 M290.047,338.149 C296.779,334.13 303.106,328.951 308.833,322.591 C342.319,285.40500000000003 341.62,230.859 302.799,191.193 C302.799,191.193 166.892,47.089 166.892,47.089 C132.249,11.680999999999997 75.186,15.824000000000005 45.018,50.252 C12.32,87.56700000000001 16.067999999999998,141.689 50.711,177.105 C50.711,177.105 145.847,276.337 145.847,276.337 C145.847,276.337 145.847,276.337 145.847,276.337 C145.847,276.337 188.716,320.16 188.716,320.16 C217.917,350.311 258.441,357.017 290.047,338.149"
                />
              </g>
            </g>
          </g>
          <g
            style={{ userSelect: "none", display: "block" }}
            transform="matrix(1.43,0,0,1.43,170.46,267.714)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="url(#gr_Rj5xmAuElX)"
                style={{ display: "block" }}
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C15.638999999999996,230.974 15.064,290.70099999999996 46.83,323.705 C79.398,357.542 133.921,358.98 168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C341.759,140.426 341.83099999999996,83.047 309.169,47.695 C276.51099999999997,12.347000000000001 223.478,12.420000000000002 188.989,47.857 C188.989,47.857 122.383,118.689 122.383,118.689z"
              />
            </g>
          </g>
          <g
            clipPath="url(#DxCx4kCXHd)"
            style={{ userSelect: "none", display: "block" }}
            transform="matrix(1.43,0,0,1.43,170.46,267.714)"
            opacity="0.5"
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="url(#gr_NNI1GmQDz4)"
                style={{ display: "block" }}
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C15.638999999999996,230.974 15.064,290.70099999999996 46.83,323.705 C79.398,357.542 133.921,358.98 168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C341.759,140.426 341.83099999999996,83.047 309.169,47.695 C276.51099999999997,12.347000000000001 223.478,12.420000000000002 188.989,47.857 C188.989,47.857 122.383,118.689 122.383,118.689z"
              />
            </g>
          </g>
          <g
            clipPath="url(#zsgTHL16qT)"
            style={{ userSelect: "none", display: "block" }}
            transform="matrix(1.43,0,0,1.43,170.46,267.714)"
            opacity="0.5"
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="url(#gr_YMBCFjNbtK)"
                style={{ display: "block" }}
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C15.638999999999996,230.974 15.064,290.70099999999996 46.83,323.705 C79.398,357.542 133.921,358.98 168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C341.759,140.426 341.83099999999996,83.047 309.169,47.695 C276.51099999999997,12.347000000000001 223.478,12.420000000000002 188.989,47.857 C188.989,47.857 122.383,118.689 122.383,118.689z"
              />
            </g>
          </g>
          <g
            clipPath="url(#cp_5lgIY1RF)"
            style={{ mixBlendMode: "overlay", display: "block" }}
            transform="matrix(1,0,0,1,567.5,519.5)"
            opacity={1}
          >
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
          </g>
          <g
            style={{ userSelect: "none", display: "block" }}
            transform="matrix(1.43,0,0,1.43,170.46068999999997,51.769799999999975)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0.016,0.071)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="url(#gr_8fO5Eg62dm)"
                style={{ display: "block" }}
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M145.847,276.337 C145.847,276.337 188.716,320.16 188.716,320.16 C224.137,356.733 276.218,358.81 308.833,322.591 C342.319,285.40500000000003 341.62,230.859 302.799,191.193 C302.799,191.193 166.892,47.089 166.892,47.089 C132.249,11.680999999999997 75.186,15.824000000000005 45.018,50.252 C12.32,87.56700000000001 16.067999999999998,141.689 50.711,177.105 C50.711,177.105 145.847,276.337 145.847,276.337z"
              />
            </g>
          </g>
          <g
            clipPath="url(#NX9Qtx5rYS)"
            style={{ userSelect: "none", display: "block" }}
            transform="matrix(1.43,0,0,1.43,170.46068999999997,51.769799999999975)"
            opacity="0.5"
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <g opacity={1} transform="matrix(1,0,0,1,0.016,0.071)">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fillOpacity={0}
                  stroke="url(#gr_vtsjGZtr3C)"
                  style={{ display: "block" }}
                  strokeOpacity={1}
                  strokeWidth={51}
                  d="M0 0 M144.798,275.288 C144.798,275.288 192.388,323.656 192.388,323.656 C227.809,360.229 276.218,358.81 308.833,322.591 C342.319,285.40500000000003 341.62,230.859 302.799,191.193 C302.799,191.193 166.892,47.089 166.892,47.089 C132.249,11.680999999999997 75.186,15.824000000000005 45.018,50.252 C12.32,87.56700000000001 16.067999999999998,141.689 50.711,177.105 C50.711,177.105 144.798,275.288 144.798,275.288z"
                />
              </g>
            </g>
          </g>
          <g
            clipPath="url(#cp_g3M9pF6p)"
            style={{ mixBlendMode: "overlay", display: "none" }}
            transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,380.5,400.5)"
            opacity={0}
          >
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
          </g>
          <g
            clipPath="url(#UC4dzz6SbL)"
            style={{
              mixBlendMode: "overlay",
              userSelect: "none",
              display: "block",
            }}
            transform="matrix(1.43,0,0,1.43,170.46068999999997,51.769799999999975)"
            opacity={1}
          >
            <g
              opacity="0.6660817160622909"
              transform="matrix(0.34114,0,0,0.34114,104.11791581115575,256.4323587834617)"
            >
              <path
                style={{ display: "block" }}
                fill="rgb(255,255,255)"
                fillOpacity="0.85"
                d="M0 0 M0,-50 C27.595,-50 50,-27.595 50,0 C50,27.595 27.595,50 0,50 C-27.595,50 -50,27.595 -50,0 C-50,-27.595 -27.595,-50 0,-50z"
              />
            </g>
          </g>
          <g
            clipPath="url(#Kwp72SP1Vi)"
            style={{ userSelect: "none", display: "block" }}
            transform="matrix(1.43,0,0,1.43,170.46,267.714)"
            opacity={1}
          >
            <g opacity={1} transform="matrix(1,0,0,1,0,0)">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                fillOpacity={0}
                stroke="url(#gr_MtqnxiKxfO)"
                style={{ display: "block" }}
                strokeOpacity={1}
                strokeWidth={51}
                d="M0 0 M122.383,118.689 C122.383,118.689 50.12,195.537 50.12,195.537 C15.638999999999996,230.974 15.064,290.70099999999996 46.83,323.705 C79.398,357.542 133.921,358.98 168.402,323.543 C168.402,323.543 307.278,175.855 307.278,175.855 C341.759,140.426 343.22999999999996,83.047 310.568,47.695 C277.90999999999997,12.347000000000001 223.478,12.420000000000002 188.989,47.857 C188.989,47.857 122.383,118.689 122.383,118.689z"
              />
            </g>
          </g>
          <g
            clipPath="url(#Rt76IudLJG)"
            style={{
              mixBlendMode: "overlay",
              userSelect: "none",
              display: "block",
            }}
            transform="matrix(1.43,0,0,1.43,153.96068999999997,78.26979999999998)"
            opacity={1}
          >
            <g
              opacity={1}
              transform="matrix(0.34114,0,0,0.34114,108.695,204.332)"
            >
              <path
                style={{ display: "block" }}
                fill="rgb(255,255,255)"
                fillOpacity="0.85"
                d="M0 0 M0,-50 C27.595,-50 50,-27.595 50,0 C50,27.595 27.595,50 0,50 C-27.595,50 -50,27.595 -50,0 C-50,-27.595 -27.595,-50 0,-50z"
              />
            </g>
          </g>
          <g
            clipPath="url(#cp_NEVEaD74)"
            style={{ mixBlendMode: "overlay", display: "none" }}
            transform="matrix(0.052335956242943946,-0.9986295347545738,0.9986295347545738,0.052335956242943946,364.8880475747182,479.8702267360352)"
            opacity={0}
          >
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
          </g>
          <g
            clipPath="url(#cp_cDHdMzYD)"
            style={{ mixBlendMode: "overlay", display: "block" }}
            transform="matrix(1,0,0,1,330.5,399)"
            opacity="0.6660817160622909"
          >
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
            <g
              style={{
                mixBlendMode: "overlay",
                userSelect: "none",
                display: "block",
              }}
              transform="matrix(1,0,0,1,-13.204999999999998,-7.659999999999997)"
              opacity={1}
            >
              <g opacity={1} transform="matrix(1.7415,0,0,1.7415,13.479,8.174)">
                <path
                  style={{ display: "block" }}
                  fill="rgb(255,255,255)"
                  fillOpacity={1}
                  d="M0 0 M7.5,26 C8.32785,26 9,26.67215 9,27.5 C9,28.32785 8.32785,29 7.5,29 C6.67215,29 6,28.32785 6,27.5 C6,26.67215 6.67215,26 7.5,26zM0 0 M12.5,21 C13.32785,21 14,21.67215 14,22.5 C14,23.32785 13.32785,24 12.5,24 C11.67215,24 11,23.32785 11,22.5 C11,21.67215 11.67215,21 12.5,21zM0 0 M17.5,16 C18.32785,16 19,16.67215 19,17.5 C19,18.32785 18.32785,19 17.5,19 C16.67215,19 16,18.32785 16,17.5 C16,16.67215 16.67215,16 17.5,16zM0 0 M21.5,11 C22.32785,11 23,11.67215 23,12.5 C23,13.32785 22.32785,14 21.5,14 C20.67215,14 20,13.32785 20,12.5 C20,11.67215 20.67215,11 21.5,11zM0 0 M27.5,6 C28.32785,6 29,6.67215 29,7.5 C29,8.32785 28.32785,9 27.5,9 C26.67215,9 26,8.32785 26,7.5 C26,6.67215 26.67215,6 27.5,6zM0 0 M1.5,20 C2.3278499999999998,20 3,20.67215 3,21.5 C3,22.32785 2.3278499999999998,23 1.5,23 C0.67215,23 0,22.32785 0,21.5 C0,20.67215 0.67215,20 1.5,20zM0 0 M6.5,15 C7.32785,15 8,15.67215 8,16.5 C8,17.32785 7.32785,18 6.5,18 C5.67215,18 5,17.32785 5,16.5 C5,15.67215 5.67215,15 6.5,15zM0 0 M11.5,10 C12.32785,10 13,10.67215 13,11.5 C13,12.32785 12.32785,13 11.5,13 C10.67215,13 10,12.32785 10,11.5 C10,10.67215 10.67215,10 11.5,10zM0 0 M15.5,5 C16.32785,5 17,5.67215 17,6.5 C17,7.32785 16.32785,8 15.5,8 C14.67215,8 14,7.32785 14,6.5 C14,5.67215 14.67215,5 15.5,5zM0 0 M21.5,0 C22.32785,0 23,0.67215 23,1.5 C23,2.3278499999999998 22.32785,3 21.5,3 C20.67215,3 20,2.3278499999999998 20,1.5 C20,0.67215 20.67215,0 21.5,0z"
                />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
                <g opacity={1} transform="matrix(1,0,0,1,0,0)" />
              </g>
            </g>
          </g>
          <g
            clipPath="url(#cp_VXt93heR)"
            style={{ mixBlendMode: "overlay" }}
            transform="matrix(1,0,0,1,-275,-275)"
            opacity={1}
          >
            <g clipPath="url(#xZ1Kq9wrj5)" style={{ display: "block" }}>
              <g
                style={{
                  mixBlendMode: "overlay",
                  userSelect: "none",
                  display: "block",
                }}
                transform="matrix(0.78,0,0,0.78,555.5091171458591,535.076185017028)"
                opacity="0.2191992910230603"
              >
                <g opacity={1} transform="matrix(1,0,0,1,-194.047,-395.199)">
                  <path
                    style={{ display: "block" }}
                    fill="rgb(255,255,255)"
                    fillOpacity={1}
                    d="M0 0 M0,-78.3515 C43.242192849999995,-78.3515 78.3515,-43.242192849999995 78.3515,0 C78.3515,43.242192849999995 43.242192849999995,78.3515 0,78.3515 C-43.242192849999995,78.3515 -78.3515,43.242192849999995 -78.3515,0 C-78.3515,-43.242192849999995 -43.242192849999995,-78.3515 0,-78.3515z"
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: "overlay",
                  userSelect: "none",
                  display: "block",
                }}
                transform="matrix(0.39,0,0,0.39,320.8307871458591,391.948575017028)"
                opacity="0.2191992910230603"
              >
                <g opacity={1} transform="matrix(1,0,0,1,-194.047,-395.199)">
                  <path
                    style={{ display: "block" }}
                    fill="rgb(255,255,255)"
                    fillOpacity={1}
                    d="M0 0 M0,-78.3515 C43.242192849999995,-78.3515 78.3515,-43.242192849999995 78.3515,0 C78.3515,43.242192849999995 43.242192849999995,78.3515 0,78.3515 C-43.242192849999995,78.3515 -78.3515,43.242192849999995 -78.3515,0 C-78.3515,-43.242192849999995 -43.242192849999995,-78.3515 0,-78.3515z"
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: "overlay",
                  userSelect: "none",
                  display: "block",
                }}
                transform="matrix(1,0,0,1,671.1994571458591,785.019965017028)"
                opacity="0.4038322621757029"
              >
                <g opacity={1} transform="matrix(1,0,0,1,-194.047,-395.199)">
                  <path
                    style={{ display: "block" }}
                    fill="rgb(255,255,255)"
                    fillOpacity={1}
                    d="M0 0 M0,-78.3515 C43.242192849999995,-78.3515 78.3515,-43.242192849999995 78.3515,0 C78.3515,43.242192849999995 43.242192849999995,78.3515 0,78.3515 C-43.242192849999995,78.3515 -78.3515,43.242192849999995 -78.3515,0 C-78.3515,-43.242192849999995 -43.242192849999995,-78.3515 0,-78.3515z"
                  />
                </g>
              </g>
            </g>
          </g>
          <g
            clipPath="url(#cp_X5SEy1eq)"
            style={{ mixBlendMode: "overlay" }}
            transform="matrix(1,0,0,1,-275,-275)"
            opacity={1}
          >
            <g clipPath="url(#hKBRP8FYHW)" style={{ display: "block" }}>
              <g
                style={{
                  mixBlendMode: "overlay",
                  userSelect: "none",
                  display: "block",
                }}
                transform="matrix(0.43674032282245817,-0.30026303538886545,0.30026303538886545,0.43674032282245817,663.2188046594141,1178.0770916155943)"
                opacity="0.3289851868789229"
              >
                <g opacity={1} transform="matrix(1,0,0,1,-194.047,-395.199)">
                  <path
                    style={{ display: "block" }}
                    fill="rgb(255,255,255)"
                    fillOpacity={1}
                    d="M0 0 M0,-78.3515 C43.242192849999995,-78.3515 78.3515,-43.242192849999995 78.3515,0 C78.3515,43.242192849999995 43.242192849999995,78.3515 0,78.3515 C-43.242192849999995,78.3515 -78.3515,43.242192849999995 -78.3515,0 C-78.3515,-43.242192849999995 -43.242192849999995,-78.3515 0,-78.3515z"
                  />
                </g>
              </g>
              <g
                style={{
                  mixBlendMode: "overlay",
                  userSelect: "none",
                  display: "block",
                }}
                transform="matrix(0.8240383449480343,-0.5665340290355951,0.5665340290355951,0.8240383449480343,1095.4499262284085,1162.1432350692894)"
                opacity="0.3289851868789229"
              >
                <g opacity={1} transform="matrix(1,0,0,1,-194.047,-395.199)">
                  <path
                    style={{ display: "block" }}
                    fill="rgb(255,255,255)"
                    fillOpacity={1}
                    d="M0 0 M0,-78.3515 C43.242192849999995,-78.3515 78.3515,-43.242192849999995 78.3515,0 C78.3515,43.242192849999995 43.242192849999995,78.3515 0,78.3515 C-43.242192849999995,78.3515 -78.3515,43.242192849999995 -78.3515,0 C-78.3515,-43.242192849999995 -43.242192849999995,-78.3515 0,-78.3515z"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      <WhyChooseUs />
      <hr className="m-auto container mt-5" />
      <div className="container">
        <FeaturedProduct
          handleAddToCart={handleAddToCart}
          products={products}
        />
      </div>
      {/* <MenWomenKids /> */}
      <div className="container">
        <NewProduct handleAddToCart={handleAddToCart} products={products} />
      </div>
      <Banner />
      <Review />
      <Sponsored />
    </div>
  );
};

export default Home;
