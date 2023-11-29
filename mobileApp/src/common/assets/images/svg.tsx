import React from 'react';

import {GestureResponderEvent, ViewStyle} from 'react-native';
import Svg, {Circle, G, Path, SvgXml} from 'react-native-svg';
import {Colors} from '../theme/variables';

export interface SvgProps {
  style?: ViewStyle;
  onPress?: (e: GestureResponderEvent) => void;
}

export const ShieldTick = (props: SvgProps): React.ReactElement => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={242}
    height={241}
    fill="none"
    stroke="#00ADB5"
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={15.014}
      d="M105.886 22.32 55.942 41.137c-11.51 4.304-20.92 17.916-20.92 30.127v74.366c0 11.811 7.808 27.325 17.317 34.431l43.038 32.129c14.113 10.61 37.333 10.61 51.446 0l43.039-32.129c9.508-7.106 17.315-22.62 17.315-34.431V71.264c0-12.311-9.408-25.923-20.919-30.227L136.314 22.32c-8.508-3.103-22.12-3.103-30.428 0Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={15.014}
      d="m91.473 118.806 16.115 16.115 43.038-43.039"
    />
  </Svg>
);

export const ShieldTickOverlap = (
  props: SvgProps,
  rest,
): React.ReactElement => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={242}
    height={241}
    fill="none"
    stroke="#393E46"
    {...props}
    {...rest}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={15.014}
      d="M105.886 22.32 55.942 41.137c-11.51 4.304-20.92 17.916-20.92 30.127v74.366c0 11.811 7.808 27.325 17.317 34.431l43.038 32.129c14.113 10.61 37.333 10.61 51.446 0l43.039-32.129c9.508-7.106 17.315-22.62 17.315-34.431V71.264c0-12.311-9.408-25.923-20.919-30.227L136.314 22.32c-8.508-3.103-22.12-3.103-30.428 0Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={15.014}
      d="m91.473 118.806 16.115 16.115 43.038-43.039"
    />
  </Svg>
);

export const LinearBox = (props: SvgProps): React.ReactElement => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={233}
    height={232}
    fill="none"
    stroke="#00ADB5"
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={14.5}
      d="m31.536 71.92 85.356 49.397 84.777-49.107M116.892 208.897V121.22"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={14.5}
      d="m96.882 23.973-51.62 28.614c-11.696 6.476-21.266 22.716-21.266 36.056v54.617c0 13.34 9.57 29.58 21.267 36.057l51.62 28.71c11.02 6.09 29.096 6.09 40.116 0l51.62-28.71c11.697-6.477 21.267-22.717 21.267-36.057V88.643c0-13.34-9.57-29.58-21.267-36.056l-51.62-28.71c-11.116-6.09-29.096-6.09-40.117.096Z"
    />
  </Svg>
);

export const LinearBoxOverlap = (props: SvgProps): React.ReactElement => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={233}
    height={232}
    fill="none"
    stroke="#393E46"
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={14.5}
      d="m31.536 71.92 85.356 49.397 84.777-49.107M116.892 208.897V121.22"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={14.5}
      d="m96.882 23.973-51.62 28.614c-11.696 6.476-21.266 22.716-21.266 36.056v54.617c0 13.34 9.57 29.58 21.267 36.057l51.62 28.71c11.02 6.09 29.096 6.09 40.116 0l51.62-28.71c11.697-6.477 21.267-22.717 21.267-36.057V88.643c0-13.34-9.57-29.58-21.267-36.056l-51.62-28.71c-11.116-6.09-29.096-6.09-40.117.096Z"
    />
  </Svg>
);

export const LogoSvg = (props: SvgProps): React.ReactElement => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={124}
    height={123}
    fill="none"
    stroke="#00ADB5"
    {...props}>
    <Path
      strokeWidth={7.683}
      d="M29.776 79.586c-13.925 3.61-25.56 9.323-25.56 15.753 0 10.916 25.91 19.765 57.874 19.765 31.963 0 57.874-8.849 57.874-19.765 0-6.395-11.636-12.14-25.43-15.753"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7.683}
      d="m55.738 14.98-20.852 7.855c-4.805 1.797-8.733 7.48-8.733 12.578V66.46c0 4.931 3.26 11.408 7.229 14.375L51.35 94.249c5.892 4.429 15.587 4.429 21.479 0l17.968-13.414c3.97-2.967 7.229-9.444 7.229-14.375V35.413c0-5.14-3.928-10.823-8.733-12.62L68.44 14.98c-3.552-1.295-9.235-1.295-12.703 0Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={7.683}
      d="M62.048 57.894a8.357 8.357 0 1 0 0-16.715 8.357 8.357 0 0 0 0 16.715ZM62.048 57.894V70.43"
    />
  </Svg>
);

export const LogoOverlap = (props: SvgProps): React.ReactElement => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={124}
    height={123}
    fill="none"
    stroke="#393E46"
    {...props}>
    <Path
      strokeWidth={7.683}
      d="M29.776 79.586c-13.925 3.61-25.56 9.323-25.56 15.753 0 10.916 25.91 19.765 57.874 19.765 31.963 0 57.874-8.849 57.874-19.765 0-6.395-11.636-12.14-25.43-15.753"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7.683}
      d="m55.738 14.98-20.852 7.855c-4.805 1.797-8.733 7.48-8.733 12.578V66.46c0 4.931 3.26 11.408 7.229 14.375L51.35 94.249c5.892 4.429 15.587 4.429 21.479 0l17.968-13.414c3.97-2.967 7.229-9.444 7.229-14.375V35.413c0-5.14-3.928-10.823-8.733-12.62L68.44 14.98c-3.552-1.295-9.235-1.295-12.703 0Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={7.683}
      d="M62.048 57.894a8.357 8.357 0 1 0 0-16.715 8.357 8.357 0 0 0 0 16.715ZM62.048 57.894V70.43"
    />
  </Svg>
);

export const EyeSlash = ({style, onPress}: SvgProps): React.ReactElement => (
  <Svg
    width={32.419}
    height={13}
    viewBox="0 0 32.419 13"
    style={style}
    onTouchEnd={onPress}>
    <G data-name="Path 1414" fill="#fff">
      <Path
        d="M16.21 21c-2.55 0-5.122-.615-7.644-1.829a20.368 20.368 0 01-1.022-.528c2.789 1.27 5.694 1.911 8.665 1.911 3.29 0 6.175-.801 8.596-1.898C22.67 19.838 19.69 21 16.209 21z"
        transform="translate(-599.79 -555) translate(599.791 543)"
      />
      <Path
        d="M16.21 22C7.256 22-.073 14.728 0 12c1.536 1.434 7.257 7.554 16.21 7.554 8.951 0 14.765-6.222 16.208-7.554-.058 2.711-7.257 10-16.209 10z"
        fill="#707070"
        transform="translate(-599.79 -555) translate(599.791 543)"
      />
    </G>
    <Path
      data-name="Union 21"
      d="M616 564h0zm7.653-1.97l.695 3.939zm-15.305 0l-.695 3.939zm20.306-3.03l.521 2.955zm-25.305 0l-.521 2.955z"
      fill="rgba(0,0,0,0)"
      stroke="#707070"
      strokeLinecap="round"
      strokeWidth={1.5}
      transform="translate(-599.79 -555)"
    />
  </Svg>
);

export const Eye = ({style, onPress}: SvgProps): React.ReactElement => (
  <Svg
    width={32.419}
    height={20}
    viewBox="0 0 32.419 20"
    style={style}
    onTouchEnd={onPress}>
    <G fill="#fff" opacity={0.7}>
      <G data-name="Path 1413">
        <Path
          d="M16.21 21c-2.55 0-5.122-.615-7.644-1.829-2.078-1-4.041-2.391-5.526-3.916C1.618 13.795.986 12.558 1 12.026c.021-.83 1.425-3.071 4.368-5.245C7.281 5.37 11.233 3 16.21 3c2.54 0 5.103.613 7.616 1.82 2.07.996 4.03 2.382 5.52 3.904 1.659 1.695 2.082 2.87 2.074 3.255-.018.824-1.417 3.057-4.364 5.233C25.14 18.627 21.184 21 16.209 21z"
          transform="translate(.001 -2)"
        />
        <Path
          d="M16.21 4C11.61 4 7.916 6.173 6.123 7.468 4.56 8.597 3.57 9.657 3.015 10.347c-.736.914-.973 1.506-1.012 1.697.094.505 1.225 2.465 4.127 4.53C7.928 17.854 11.628 20 16.21 20c4.589 0 8.283-2.17 10.076-3.465 1.563-1.127 2.556-2.186 3.113-2.876.735-.91.974-1.502 1.016-1.694-.1-.51-1.238-2.47-4.134-4.534C24.484 6.149 20.785 4 16.209 4m0-2c8.952 0 16.267 7.289 16.21 10-.059 2.711-7.258 10-16.21 10C7.257 22-.07 14.728 0 12 .072 9.272 7.257 2 16.21 2z"
          fill="#707070"
          transform="translate(.001 -2)"
        />
      </G>
      <G
        data-name="Ellipse 131"
        transform="translate(10.21 4)"
        stroke="#707070"
        strokeWidth={2}>
        <Circle cx={6} cy={6} r={6} stroke="none" />
        <Circle cx={6} cy={6} r={5} fill="none" />
      </G>
    </G>
  </Svg>
);

export const SearchIcon2 = ({color = '#737878'}) => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 11.28 11.896">
      <path id="Union_9" data-name="Union 9" d="M6.236,6.851A3.844,3.844,0,1,1,7.687,3.843,3.827,3.827,0,0,1,6.236,6.851L10,10.616Z" transform="translate(0.75 0.75)" fill="none" stroke="${color}" stroke-width="1.5"/>
  </svg>
  `;
  return <SvgXml xml={xml} />;
};

export const Plus = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={30}
    height={30}
    viewBox="0 0 490 490"
    fill="#EEEEEE"
    {...props}>
    <Path d="M227.8 174.1v53.7h-53.7c-9.5 0-17.2 7.7-17.2 17.2s7.7 17.2 17.2 17.2h53.7v53.7c0 9.5 7.7 17.2 17.2 17.2s17.1-7.7 17.1-17.2v-53.7h53.7c9.5 0 17.2-7.7 17.2-17.2s-7.7-17.2-17.2-17.2h-53.7v-53.7c0-9.5-7.7-17.2-17.1-17.2s-17.2 7.7-17.2 17.2z" />
  </Svg>
);
export const AllIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill={Colors.gray}
      fillRule="evenodd"
      d="M6 2a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm11 0a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-1ZM6 13a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4H6Zm11 0a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export const PasswordIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 0h6.125M19 20v-2.25a.25.25 0 0 0-.25-.25m-3.625 0h3.625m-3.625 0V20m3.625-2.5"
    />
    <Circle cx={7.5} cy={7.5} r={1.5} fill={Colors.gray} />
    <Circle cx={12} cy={7.5} r={1.5} fill={Colors.gray} />
    <Circle cx={16.5} cy={7.5} r={1.5} fill={Colors.gray} />
  </Svg>
);
export const NoteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke={props.stroke || Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8 2v3M16 2v3M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM8 11h8M8 16h4"
    />
  </Svg>
);
export const CardIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7"
    />
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 16.429c0-.474.384-.858.857-.858h4.286c.473 0 .857.384.857.858v2.714a.857.857 0 0 1-.857.857h-4.286a.857.857 0 0 1-.857-.857v-2.714Z"
    />
    <Path
      stroke={Colors.gray}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.714 14.286a1.286 1.286 0 1 1 2.572 0v1.285h-2.572v-1.285ZM3 10h17.5M7 15h2"
    />
  </Svg>
);
export const Home = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill={Colors.gray}
    {...props}>
    <Path
      fillRule="evenodd"
      d="M16.25 3.75v1.69l2 1.6V3.75h-2Zm3.5 4.49V3.5c0-.69-.56-1.25-1.25-1.25H16c-.69 0-1.25.56-1.25 1.25v.74l-.407-.326a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25V10.96l.782.626a.75.75 0 0 0 .936-1.172L19.75 8.24Zm-.5 1.52-5.844-4.675a2.25 2.25 0 0 0-2.812 0L4.75 9.76v11.49h3.5v-4.3c0-.664 0-1.237.062-1.696.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062h.098c.665 0 1.238 0 1.697.062.492.066.963.215 1.345.597s.531.853.597 1.345c.062.459.062 1.032.062 1.697v4.299h3.5V9.76Zm-5 11.49V17c0-.728-.002-1.2-.048-1.546-.044-.325-.114-.427-.172-.484-.057-.057-.159-.128-.484-.172-.347-.046-.818-.048-1.546-.048-.728 0-1.2.002-1.546.048-.325.044-.427.115-.484.172-.057.057-.128.159-.172.484-.046.347-.048.818-.048 1.546v4.25h4.5ZM12 8.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM9.25 9.5a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export const Group = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 1920 1920"
    fill={Colors.gray}
    {...props}>
    <Path
      fillRule="evenodd"
      d="M1807.059 1270.091c-68.668 48.452-188.725 116.556-343.906 158.57-18.861-102.55-92.725-187.37-196.066-219.106-91.708-28.235-185.11-48.339-279.53-61.666 71.944-60.762 121.638-145.807 135.982-243.162 21.91-.791 44.837-1.243 71.04-1.243 166.023.904 331.143 26.316 490.955 75.445 72.621 22.362 121.525 87.755 121.525 162.861v128.301Zm-451.765 338.824c-114.183 80.753-330.24 198.099-621.176 198.099-129.43 0-379.144-26.203-621.177-198.1v-128.752c0-74.993 49.017-140.499 121.75-162.861 162.41-49.694 330.354-74.88 499.427-74.88h8.47c166.588.79 331.821 26.09 491.407 75.106 72.509 22.249 121.3 87.642 121.3 162.635v128.753Zm-903.53-761.901V734.072c0-155.632 126.608-282.352 282.354-282.352 155.746 0 282.353 126.72 282.353 282.352v112.942c0 155.746-126.607 282.353-282.353 282.353S451.765 1002.76 451.765 847.014Zm734.118-734.118c75.22 0 146.146 29.478 199.567 82.899 53.309 53.421 82.786 124.235 82.786 199.454V508.19c0 155.746-126.607 282.353-282.353 282.353-19.651 0-38.4-2.598-56.47-6.438v-50.033c0-156.423-92.047-290.71-224.188-354.748 8.357-148.066 130.447-266.428 280.658-266.428Zm532.857 758.061c-91.37-28.01-184.546-48.226-279.755-61.666 86.174-72.508 142.192-179.802 142.192-301.1V395.248c0-105.374-41.11-204.65-115.877-279.304-74.767-74.767-173.93-115.99-279.417-115.99-200.696 0-365.138 151.002-390.211 345.148-20.217-3.275-40.433-6.325-61.553-6.325-217.977 0-395.294 177.43-395.294 395.294v112.942c0 121.298 56.018 228.593 142.305 301.214-94.305 13.214-188.16 33.092-279.529 61.1C81.092 1246.375 0 1355.249 0 1480.163v185.675l22.588 16.941c275.238 206.344 563.803 237.177 711.53 237.177 344.244 0 593.618-148.63 711.53-237.177l22.587-16.94v-120.51c205.214-50.597 355.652-146.032 429.177-201.373l22.588-16.941V1141.79c0-125.026-80.979-233.901-201.261-270.833Z"
    />
  </Svg>
);
export const Setting = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    stroke={Colors.gray}
    {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z"
    />
  </Svg>
);
export const Tool = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke={Colors.gray}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="feather feather-tool"
    viewBox="0 0 24 24"
    {...props}>
    <Path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </Svg>
);

export const SearchIcon = ({width = 44, height = 44}) => {
  const xml = `<svg id="search-babybooks_overview" xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 24 24">
      <path id="Union_9" data-name="Union 9" d="M6.236,6.851A3.844,3.844,0,1,1,7.687,3.843,3.827,3.827,0,0,1,6.236,6.851L10,10.616Z" transform="translate(7 6.692)" fill="none" stroke="#eeeeee" stroke-width="1.5"/>
  </svg>`;
  return <SvgXml xml={xml} />;
};

export const ErrorIcon = () => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="Group_313" data-name="Group 313" transform="translate(0)">
      <circle id="Ellipse_124" data-name="Ellipse 124" cx="12" cy="12" r="12" transform="translate(0)" fill="#fff"/>
      <path id="Path_1398" data-name="Path 1398" d="M5.366-6.006a.438.438,0,0,1-.064.191.4.4,0,0,1-.186.144,1.405,1.405,0,0,1-.362.09,4.131,4.131,0,0,1-.559.032,4.106,4.106,0,0,1-.564-.032,1.4,1.4,0,0,1-.356-.09.4.4,0,0,1-.186-.144.438.438,0,0,1-.064-.191l-.277-9.66a.466.466,0,0,1,.064-.245.463.463,0,0,1,.229-.176,1.674,1.674,0,0,1,.447-.1,6.477,6.477,0,0,1,.707-.032,5.431,5.431,0,0,1,.7.037,1.788,1.788,0,0,1,.441.106.515.515,0,0,1,.234.17.413.413,0,0,1,.069.239ZM5.7-2.889a3.306,3.306,0,0,1-.069.734.993.993,0,0,1-.245.479,1,1,0,0,1-.463.261,2.756,2.756,0,0,1-.723.08,2.819,2.819,0,0,1-.729-.08A.968.968,0,0,1,3-1.676a1.018,1.018,0,0,1-.239-.479A3.306,3.306,0,0,1,2.7-2.889a3.439,3.439,0,0,1,.069-.75A1.058,1.058,0,0,1,3-4.128a.947.947,0,0,1,.463-.266,2.819,2.819,0,0,1,.729-.08,2.756,2.756,0,0,1,.723.08.98.98,0,0,1,.463.266,1.031,1.031,0,0,1,.245.489A3.439,3.439,0,0,1,5.7-2.889Z" transform="translate(7.805 20.777)" fill="#ba4b4b"/>
      </g>
  </svg>`;
  return <SvgXml xml={xml} />;
};

export const InfoIcon = () => {
  const xml = `<svg id="Group_313" data-name="Group 313" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <circle id="Ellipse_124" data-name="Ellipse 124" cx="12" cy="12" r="12" fill="#fff"/>
      <path id="Path_1400" data-name="Path 1400" d="M1.965-18.3a1.7,1.7,0,0,0,1.667,1.667A1.7,1.7,0,0,0,5.3-18.3a1.7,1.7,0,0,0-1.667-1.667A1.7,1.7,0,0,0,1.965-18.3Zm3.179,4.41c0-.59-.077-.795-.462-.795a25.324,25.324,0,0,0-3.436.641c-.205.026-.154.333.026.333H1.58c.769,0,1.077.513,1.128,1.923.026.872.1,3.872-.026,5.974-.1,1.282-.41,1.385-.974,1.513-.154.026-.179.333,0,.333.41,0,1.821-.077,2.231-.077.564,0,1.718.077,2.564.077.205,0,.179-.333,0-.333-.974-.154-1.231-.231-1.333-1.513C5.042-7.3,5.144-11.1,5.144-13.891Z" transform="translate(8.89 24.059)" fill="#5393d0"/>
  </svg>`;
  return <SvgXml xml={xml} />;
};

export const SuccessIcon = () => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="Group_183" data-name="Group 183" transform="translate(-8 2)">
      <circle id="Ellipse_124" data-name="Ellipse 124" cx="12" cy="12" r="12" transform="translate(8 -2)" fill="#fff"/>
      <path id="Path_1397" data-name="Path 1397" d="M9123.348-3002.067l3.682,3.977,8.318-8.539" transform="translate(-9109.348 3012.359)" fill="none" stroke="#17c94c" stroke-linecap="round" stroke-width="1.8"/>
      </g>
  </svg>`;
  return <SvgXml xml={xml} />;
};

export const WarningIcon = () => {
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g id="warning" transform="translate(-8 2)">
      <circle id="Ellipse_124" data-name="Ellipse 124" cx="12" cy="12" r="12" transform="translate(8 -2)" fill="#fff"/>
      <path id="Path_1530" data-name="Path 1530" d="M5.366-6.006a.438.438,0,0,1-.064.191.4.4,0,0,1-.186.144,1.405,1.405,0,0,1-.362.09,4.131,4.131,0,0,1-.559.032,4.106,4.106,0,0,1-.564-.032,1.4,1.4,0,0,1-.356-.09.4.4,0,0,1-.186-.144.438.438,0,0,1-.064-.191l-.277-9.66a.466.466,0,0,1,.064-.245.463.463,0,0,1,.229-.176,1.674,1.674,0,0,1,.447-.1,6.477,6.477,0,0,1,.707-.032,5.431,5.431,0,0,1,.7.037,1.788,1.788,0,0,1,.441.106.515.515,0,0,1,.234.17.413.413,0,0,1,.069.239ZM5.7-2.889a3.306,3.306,0,0,1-.069.734.993.993,0,0,1-.245.479,1,1,0,0,1-.463.261,2.756,2.756,0,0,1-.723.08,2.819,2.819,0,0,1-.729-.08A.968.968,0,0,1,3-1.676a1.018,1.018,0,0,1-.239-.479A3.306,3.306,0,0,1,2.7-2.889a3.439,3.439,0,0,1,.069-.75A1.058,1.058,0,0,1,3-4.128a.947.947,0,0,1,.463-.266,2.818,2.818,0,0,1,.729-.08,2.756,2.756,0,0,1,.723.08.98.98,0,0,1,.463.266,1.031,1.031,0,0,1,.245.489A3.439,3.439,0,0,1,5.7-2.889Z" transform="translate(15.805 18.777)" fill="#f79420"/>
      </g>
  </svg>`;
  return <SvgXml xml={xml} />;
};

export const CopyIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      stroke={Colors.gray}
      strokeWidth={1.5}
      d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-5Z"
    />
    <Path
      stroke={Colors.gray}
      strokeWidth={1.5}
      d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3"
    />
  </Svg>
);

export const AttachIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 28 28"
    {...props}>
    <Path
      fill={props.fill || Colors.gray}
      d="M12.48 4.158A7.133 7.133 0 0 1 22.346 2a7.16 7.16 0 0 1 2.153 9.883l-1.85-1.188a4.957 4.957 0 0 0-1.49-6.843 4.938 4.938 0 0 0-6.83 1.494l-1.85-1.19Z"
    />
    <Path
      fill={props.fill || Colors.gray}
      d="M14.328 5.348 5.13 19.704a3.304 3.304 0 0 0 .995 4.559 3.293 3.293 0 0 0 4.554-.996l2.373-3.704-.001-.001 5.933-9.262.001.001a1.652 1.652 0 0 0-.497-2.28 1.646 1.646 0 0 0-2.276.497h-.002L11.5 16a.966.966 0 0 1-1.336.291l-.221-.142a.97.97 0 0 1-.292-1.338l4.711-7.483h.002a3.841 3.841 0 0 1 5.312-1.16 3.856 3.856 0 0 1 1.16 5.32h-.002l-2.373 3.704h.002l-5.933 9.263a5.49 5.49 0 0 1-7.59 1.66 5.506 5.506 0 0 1-1.657-7.602l9.196-14.355 1.849 1.189ZM15.452 23.722a.97.97 0 0 1-.292-1.338l7.487-11.688 1.85 1.188-7.488 11.69a.966.966 0 0 1-1.336.29l-.221-.142Z"
    />
  </Svg>
);
