export default function Loading() {
  return (
    <div className="absolute w-screen h-screen bg-gray-800/70">
      <div className="flex justify-center items-center h-full">
        <svg
          className="lds-bluecat"
          width="200px"
          height="200px"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="rotate(90.8425 50 50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 50 50;0 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
              begin="-0.1s"
            ></animateTransform>
            <circle
              cx="50"
              cy="50"
              r="39.891"
              stroke="#fdd032"
              stroke-width="14.4"
              fill="none"
              stroke-dasharray="0 300"
            >
              <animate
                attributeName="stroke-dasharray"
                values="15 300;55.1413599195142 300;15 300"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
                calcMode="linear"
                keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                begin="-0.046s"
              ></animate>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="39.891"
              stroke="#f7f7f7"
              stroke-width="7.2"
              fill="none"
              stroke-dasharray="0 300"
            >
              <animate
                attributeName="stroke-dasharray"
                values="15 300;55.1413599195142 300;15 300"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
                calcMode="linear"
                keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                begin="-0.046s"
              ></animate>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="32.771"
              stroke="#000000"
              stroke-width="1"
              fill="none"
              stroke-dasharray="0 300"
            >
              <animate
                attributeName="stroke-dasharray"
                values="15 300;45.299378454348094 300;15 300"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
                calcMode="linear"
                keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                begin="-0.046s"
              ></animate>
            </circle>
            <circle
              cx="50"
              cy="50"
              r="47.171"
              stroke="#000000"
              stroke-width="1"
              fill="none"
              stroke-dasharray="0 300"
            >
              <animate
                attributeName="stroke-dasharray"
                values="15 300;66.03388996804073 300;15 300"
                keyTimes="0;0.5;1"
                dur="1s"
                repeatCount="indefinite"
                calcMode="linear"
                keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                begin="-0.046s"
              ></animate>
            </circle>
          </g>

          <g transform="rotate(156.116 50 50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 50 50;0 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
            ></animateTransform>
            <path
              fill="#fdd032"
              stroke="#000000"
              d="M97.2,50.1c0,6.1-1.2,12.2-3.5,17.9l-13.3-5.4c1.6-3.9,2.4-8.2,2.4-12.4"
            ></path>
            <path
              fill="#f7f7f7"
              d="M93.5,49.9c0,1.2,0,2.7-0.1,3.9l-0.4,3.6c-0.4,2-2.3,3.3-4.1,2.8l-0.2-0.1c-1.8-0.5-3.1-2.3-2.7-3.9l0.4-3 c0.1-1,0.1-2.3,0.1-3.3"
            ></path>
            <path
              fill="#fdd032"
              stroke="#000000"
              d="M85.4,62.7c-0.2,0.7-0.5,1.4-0.8,2.1c-0.3,0.7-0.6,1.4-0.9,2c-0.6,1.1-2,1.4-3.2,0.8c-1.1-0.7-1.7-2-1.2-2.9 c0.3-0.6,0.5-1.2,0.8-1.8c0.2-0.6,0.6-1.2,0.7-1.8"
            ></path>
            <path
              fill="#fdd032"
              stroke="#000000"
              d="M94.5,65.8c-0.3,0.9-0.7,1.7-1,2.6c-0.4,0.9-0.7,1.7-1.1,2.5c-0.7,1.4-2.3,1.9-3.4,1.3h0 c-1.1-0.7-1.5-2.2-0.9-3.4c0.4-0.8,0.7-1.5,1-2.3c0.3-0.8,0.7-1.5,0.9-2.3"
            ></path>
          </g>
          <g transform="rotate(90.8425 50 50)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="360 50 50;0 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.5 0 0.5 1"
              begin="-0.1s"
            ></animateTransform>
            <path
              fill="#f7f7f7"
              stroke="#000000"
              d="M86.9,35.3l-6,2.4c-0.4-1.2-1.1-2.4-1.7-3.5c-0.2-0.5,0.3-1.1,0.9-1C82.3,33.8,84.8,34.4,86.9,35.3z"
            ></path>
            <path
              fill="#f7f7f7"
              stroke="#000000"
              d="M87.1,35.3l6-2.4c-0.6-1.7-1.5-3.3-2.3-4.9c-0.3-0.7-1.2-0.6-1.4,0.1C88.8,30.6,88.2,33,87.1,35.3z"
            ></path>
            <path
              fill="#fdd032"
              stroke="#000000"
              d="M82.8,50.1c0-3.4-0.5-6.8-1.6-10c-0.2-0.8-0.4-1.5-0.3-2.3c0.1-0.8,0.4-1.6,0.7-2.4c0.7-1.5,1.9-3.1,3.7-4l0,0 c1.8-0.9,3.7-1.1,5.6-0.3c0.9,0.4,1.7,1,2.4,1.8c0.7,0.8,1.3,1.7,1.7,2.8c1.5,4.6,2.2,9.5,2.3,14.4"
            ></path>
            <path
              fill="#f7f7f7"
              d="M86.3,50.2l0-0.9l-0.1-0.9l-0.1-1.9c0-0.9,0.2-1.7,0.7-2.3c0.5-0.7,1.3-1.2,2.3-1.4l0.3,0 c0.9-0.2,1.9,0,2.6,0.6c0.7,0.5,1.3,1.4,1.4,2.4l0.2,2.2l0.1,1.1l0,1.1"
            ></path>
            <path
              fill="#ff9922"
              d="M93.2,34.6c0.1,0.4-0.3,0.8-0.9,1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1 C92.4,34.2,93,34.3,93.2,34.6z"
            ></path>
            <path
              fill="#ff9922"
              d="M81.9,38.7c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.2,38,81.8,38.4,81.9,38.7z"
            ></path>
            <path
              fill="#000000"
              d="M88.5,36.8c0.1,0.3-0.2,0.7-0.6,0.8c-0.5,0.2-0.9,0-1.1-0.3c-0.1-0.3,0.2-0.7,0.6-0.8C87.9,36.3,88.4,36.4,88.5,36.8z"
            ></path>
            <path
              stroke="#000000"
              d="M85.9,38.9c0.2,0.6,0.8,0.9,1.4,0.7c0.6-0.2,0.9-0.9,0.6-2.1c0.3,1.2,1,1.7,1.6,1.5c0.6-0.2,0.9-0.8,0.8-1.4"
            ></path>
            <path
              fill="#fdd032"
              stroke="#000000"
              d="M86.8,42.3l0.4,2.2c0.1,0.4,0.1,0.7,0.2,1.1l0.1,1.1c0.1,1.2-0.9,2.3-2.2,2.3c-1.3,0-2.5-0.8-2.5-1.9l-0.1-1 c0-0.3-0.1-0.6-0.2-1l-0.3-1.9"
            ></path>
            <path
              fill="#fdd032"
              stroke="#000000"
              d="M96.2,40.3l0.5,2.7c0.1,0.5,0.2,0.9,0.2,1.4l0.1,1.4c0.1,1.5-0.9,2.8-2.2,2.9h0c-1.3,0-2.5-1.1-2.6-2.4 L92.1,45c0-0.4-0.1-0.8-0.2-1.2l-0.4-2.5"
            ></path>
            <path
              fill="#000000"
              d="M91.1,34.1c0.3,0.7,0,1.4-0.7,1.6c-0.6,0.2-1.3-0.1-1.6-0.7c-0.2-0.6,0-1.4,0.7-1.6C90.1,33.1,90.8,33.5,91.1,34.1z"
            ></path>
            <path
              fill="#000000"
              d="M85.5,36.3c0.2,0.6-0.1,1.2-0.7,1.5c-0.6,0.2-1.3,0-1.5-0.6C83,36.7,83.4,36,84,35.8C84.6,35.5,85.3,35.7,85.5,36.3z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
