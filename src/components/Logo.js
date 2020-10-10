import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.svg`
  width: 300px;

  &:hover {
    #head {
      animation: nod 2s infinite linear;
      transform-origin: center;
      trasform-box: fill-box;
    }

    @keyframes nod {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(-2deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    #left-eye,
    #right-eye {
      animation: blink 4s infinite linear;
      transform-origin: center;
      transform-box: fill-box;
    }

    @keyframes blink {
      0% {
        transform: scale(1, 1);
        x: 0;
      }
      2% {
        transform: scale(1, 0.1);
      }
      4%,
      100% {
        transform: scale(1, 1);
      }
    }

    #mouth {
      animation: move-mouth 0.5s infinite ease-in;
      transform-origin: center;
      transform-box: fill-box;
    }

    @keyframes move-mouth {
      0% {
        transform: scale(1) translate(0, 0);
      }
      50% {
        transform: scale(0.75) translate(25%, -25%);
      }
      100% {
        transform: scale(1) translate(0, 0);
      }
    }

    #code {
      animation: flip 5s infinite linear;
      transform-origin: center;
      transform-box: fill-box;
    }

    @keyframes flip {
      0%,
      25% {
        transform: rotate(0) translate(0, 0);
      }
      26%,
      50% {
        transform: rotate(0) translate(-4px, 0);
      }
      51%,
      75% {
        transform: rotate(0) translate(0, 0);
      }
      76%,
      96% {
        transform: rotate(0) translate(-4px, 0);
      }
      97% {
        transform: rotate(-0.25turn);
      }
      98% {
        transform: rotate(-0.5turn);
      }
      99% {
        transform: rotate(-0.75turn);
      }
      100% {
        transform: rotate(-1turn);
      }
    }

    #right-arm,
    #skillet-back,
    #skillet {
      animation: move 0.5s infinite linear;
      transform-origin: center;
      transform-box: fill-box;
    }

    @keyframes move {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(10px, 0);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
`;

export const Logo = () => {
  return (
    <>
      <LogoWrapper
        width="100%"
        height="100%"
        viewBox="0 0 553 413"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 2">
          <g id="skillet-back">
            <path
              id="Vector 3"
              d="M299 349.147C329.833 339.981 408.2 327.147 475 349.147C447.5 362.647 373.8 381.547 299 349.147Z"
              fill="#747474"
            />
            <path
              id="Vector 4"
              d="M295 349C327.057 339.945 396.5 323.5 476 349.5"
              stroke="#5B5B5B"
              strokeWidth="5"
            />
          </g>
          <path
            id="code"
            d="M357.886 311.354C357.886 313.382 357.485 315.397 356.685 317.399C355.884 319.401 354.803 321.257 353.441 322.965C352.107 324.673 350.559 326.168 348.797 327.449C347.035 328.73 345.207 329.651 343.312 330.212L342.471 328.811C343.592 328.25 344.619 327.529 345.554 326.648C346.488 325.768 347.289 324.78 347.956 323.686C348.623 322.564 349.131 321.39 349.478 320.162C349.851 318.908 350.038 317.64 350.038 316.358C350.038 314.89 349.825 313.502 349.397 312.194C348.97 310.886 348.343 309.752 347.516 308.791C346.688 307.803 345.66 307.029 344.433 306.469C343.231 305.908 341.843 305.628 340.269 305.628C338.347 305.628 336.585 306.002 334.983 306.749C333.382 307.496 331.94 308.511 330.659 309.792C329.378 311.047 328.257 312.501 327.296 314.156C326.362 315.785 325.574 317.506 324.934 319.321C324.32 321.11 323.853 322.925 323.532 324.767C323.212 326.608 323.052 328.343 323.052 329.972C323.052 331.627 323.225 333.335 323.572 335.097C323.919 336.858 324.426 338.593 325.094 340.302C325.761 342.01 326.589 343.625 327.576 345.146C328.564 346.668 329.698 348.003 330.979 349.15C332.287 350.298 333.729 351.219 335.304 351.913C336.905 352.58 338.64 352.914 340.509 352.914C341.79 352.914 343.031 352.741 344.232 352.394C345.46 352.047 346.635 351.579 347.756 350.992C348.877 350.405 349.931 349.711 350.919 348.91C351.933 348.109 352.868 347.242 353.722 346.308L355.043 347.589C353.868 349.137 352.467 350.632 350.839 352.073C349.237 353.488 347.502 354.756 345.634 355.877C343.765 356.971 341.803 357.852 339.748 358.52C337.719 359.16 335.704 359.48 333.702 359.48C331.754 359.48 329.912 359.147 328.177 358.479C326.468 357.785 324.894 356.865 323.452 355.717C322.011 354.542 320.716 353.181 319.568 351.633C318.447 350.058 317.486 348.39 316.686 346.628C315.911 344.866 315.311 343.051 314.884 341.183C314.483 339.314 314.283 337.486 314.283 335.697C314.283 333.108 314.71 330.452 315.564 327.729C316.445 324.98 317.646 322.324 319.168 319.762C320.689 317.173 322.478 314.73 324.533 312.435C326.615 310.139 328.844 308.137 331.22 306.429C333.622 304.72 336.118 303.372 338.707 302.385C341.323 301.37 343.925 300.863 346.515 300.863C348.116 300.863 349.611 301.104 350.999 301.584C352.387 302.038 353.588 302.705 354.603 303.586C355.617 304.467 356.418 305.561 357.005 306.869C357.592 308.177 357.886 309.672 357.886 311.354ZM374.822 359.921C372.847 359.921 370.992 359.574 369.257 358.88C367.549 358.159 366.054 357.172 364.772 355.917C363.518 354.662 362.517 353.194 361.77 351.513C361.049 349.804 360.688 347.949 360.688 345.947C360.688 343.678 361.062 341.556 361.81 339.581C362.557 337.579 363.585 335.777 364.893 334.176C366.227 332.574 367.789 331.186 369.577 330.012C371.392 328.837 373.354 327.916 375.463 327.249L376.624 328.65C375.423 329.531 374.302 330.546 373.261 331.693C372.22 332.814 371.312 334.042 370.538 335.377C369.764 336.685 369.15 338.073 368.696 339.541C368.243 340.982 368.016 342.464 368.016 343.985C368.016 345.267 368.202 346.615 368.576 348.029C368.95 349.444 369.51 350.739 370.258 351.913C371.005 353.088 371.939 354.062 373.061 354.836C374.208 355.583 375.53 355.957 377.024 355.957C378.359 355.957 379.507 355.717 380.468 355.236C381.455 354.756 382.27 354.102 382.91 353.274C383.551 352.447 384.031 351.486 384.352 350.392C384.672 349.271 384.832 348.096 384.832 346.868C384.832 345.427 384.552 343.959 383.991 342.464C383.431 340.942 382.657 339.541 381.669 338.26C380.708 336.979 379.574 335.911 378.266 335.057C376.958 334.202 375.556 333.709 374.062 333.575C374.996 332.507 376.023 331.52 377.145 330.612C378.266 329.705 379.4 328.837 380.548 328.01C382.096 328.517 383.457 329.264 384.632 330.252C385.833 331.24 386.834 332.374 387.635 333.655C388.462 334.937 389.09 336.338 389.517 337.859C389.944 339.354 390.157 340.876 390.157 342.424C390.157 344.533 389.784 346.628 389.036 348.71C388.315 350.792 387.274 352.674 385.913 354.355C384.578 356.01 382.964 357.358 381.068 358.399C379.2 359.414 377.118 359.921 374.822 359.921ZM428.515 354.235C428.194 354.929 427.781 355.583 427.273 356.197C426.766 356.811 426.206 357.358 425.592 357.839C424.978 358.319 424.297 358.706 423.55 359C422.829 359.267 422.082 359.4 421.308 359.4C419.199 359.4 417.664 358.826 416.703 357.679C415.769 356.504 415.302 354.916 415.302 352.914V352.193C414.848 353.101 414.327 354.008 413.74 354.916C413.153 355.824 412.472 356.638 411.698 357.358C410.951 358.079 410.097 358.666 409.136 359.12C408.201 359.574 407.147 359.801 405.973 359.801C404.184 359.801 402.609 359.454 401.248 358.76C399.913 358.039 398.792 357.091 397.885 355.917C396.977 354.716 396.283 353.328 395.803 351.753C395.349 350.178 395.122 348.523 395.122 346.788C395.122 344.546 395.469 342.29 396.163 340.021C396.857 337.753 397.871 335.697 399.206 333.855C400.541 332.014 402.182 330.519 404.131 329.371C406.079 328.197 408.308 327.609 410.817 327.609C412.366 327.609 413.86 327.983 415.302 328.73V304.146L422.709 301.584V353.114C422.709 353.648 422.829 354.142 423.069 354.596C423.336 355.023 423.763 355.236 424.351 355.236C424.965 355.236 425.538 354.996 426.072 354.516C426.606 354.008 427.033 353.501 427.354 352.994L428.515 354.235ZM415.302 342.184V333.655C414.688 333.041 413.994 332.534 413.22 332.134C412.472 331.733 411.645 331.533 410.737 331.533C409.162 331.533 407.828 331.96 406.733 332.814C405.639 333.669 404.745 334.736 404.051 336.018C403.357 337.299 402.85 338.687 402.529 340.182C402.209 341.65 402.049 343.024 402.049 344.306C402.049 345.32 402.142 346.468 402.329 347.749C402.543 349.004 402.89 350.191 403.37 351.312C403.877 352.407 404.531 353.341 405.332 354.115C406.16 354.863 407.187 355.236 408.415 355.236C409.403 355.236 410.257 355.023 410.978 354.596C411.725 354.142 412.352 353.568 412.859 352.874C413.367 352.153 413.78 351.339 414.101 350.432C414.421 349.497 414.661 348.55 414.821 347.589C415.008 346.628 415.128 345.68 415.182 344.746C415.262 343.785 415.302 342.931 415.302 342.184ZM460.266 351.192C459.331 352.394 458.304 353.515 457.183 354.556C456.088 355.597 454.887 356.504 453.579 357.278C452.298 358.052 450.937 358.666 449.495 359.12C448.054 359.574 446.559 359.801 445.011 359.801C443.035 359.801 441.22 359.454 439.565 358.76C437.91 358.039 436.482 357.065 435.281 355.837C434.08 354.582 433.146 353.114 432.479 351.433C431.811 349.724 431.478 347.896 431.478 345.947C431.478 344.346 431.704 342.771 432.158 341.223C432.612 339.674 433.253 338.22 434.08 336.858C434.908 335.497 435.882 334.243 437.003 333.095C438.151 331.92 439.405 330.919 440.767 330.092C442.128 329.264 443.569 328.624 445.091 328.17C446.612 327.689 448.174 327.449 449.775 327.449C450.896 327.449 451.951 327.583 452.938 327.85C453.953 328.117 454.847 328.544 455.621 329.131C456.395 329.691 457.009 330.425 457.463 331.333C457.917 332.214 458.144 333.268 458.144 334.496C458.144 335.51 457.837 336.578 457.223 337.699C456.635 338.82 455.848 339.941 454.86 341.062C453.899 342.184 452.805 343.291 451.577 344.386C450.349 345.453 449.095 346.454 447.813 347.389C446.559 348.296 445.344 349.097 444.17 349.791C442.995 350.485 441.968 351.019 441.087 351.393C442.075 352.62 443.222 353.621 444.53 354.396C445.838 355.17 447.226 355.557 448.694 355.557C449.629 355.557 450.576 355.383 451.537 355.036C452.498 354.662 453.419 354.195 454.3 353.635C455.207 353.074 456.062 352.46 456.862 351.793C457.69 351.126 458.424 350.498 459.064 349.911L460.266 351.192ZM450.616 335.978C450.616 335.364 450.509 334.776 450.296 334.216C450.109 333.655 449.829 333.175 449.455 332.774C449.081 332.347 448.628 332.014 448.094 331.773C447.587 331.507 446.999 331.373 446.332 331.373C445.131 331.373 444.023 331.8 443.009 332.654C441.994 333.482 441.114 334.509 440.366 335.737C439.646 336.965 439.072 338.273 438.645 339.661C438.244 341.022 438.044 342.224 438.044 343.265C438.044 344.279 438.204 345.32 438.524 346.388C438.845 347.455 439.285 348.483 439.846 349.471C440.913 348.883 442.075 348.069 443.329 347.028C444.584 345.987 445.745 344.853 446.812 343.625C447.907 342.37 448.814 341.076 449.535 339.741C450.256 338.407 450.616 337.152 450.616 335.978Z"
            fill="white"
          />
          <path
            id="skillet"
            d="M295.56 346.684C383.075 380.754 452.763 361.041 476.667 346.926C479.195 357.186 466.7 369.752 460.137 374.753C394.014 404.178 336.806 387.013 316.467 374.753L300.179 358.541C270.278 339.667 240.62 337.973 206.83 343.538C179.798 347.991 173.688 341.683 174.012 337.973C243.246 322.874 283.892 337.489 295.56 346.684Z"
            fill="#5B5B5B"
          />
          <path
            id="left-arm"
            d="M202.732 357.636C205.017 354.026 206.482 349.958 207.025 345.721C207.568 341.484 207.175 337.179 205.874 333.11C204.574 329.041 202.396 325.306 199.496 322.169C196.945 319.409 193.889 317.172 190.498 315.574C189.591 315.146 188.783 314.495 188.231 313.658C157.858 267.58 147.274 235.687 133.899 179.51C133.118 176.232 129.388 174.625 126.483 176.333L81.7974 202.609C79.4441 203.994 78.6358 207.01 79.9816 209.385L148.833 330.863C149.532 332.095 149.652 333.559 149.307 334.933C147.748 341.148 148.259 347.727 150.799 353.654C153.631 360.266 158.791 365.608 165.299 368.669C171.807 371.731 179.213 372.299 186.112 370.265C193.011 368.231 198.924 363.738 202.732 357.636Z"
            fill="#F2CFCF"
          />
          <path
            id="torso"
            d="M169 386.808L42.525 390.799C42.075 390.813 41.668 390.513 41.535 390.084C2.88482 265.332 -6.98459 207.156 30.8585 159.556C57.837 129.795 74.614 126.231 106.103 132.331C185.712 152.296 129.991 238.238 169 386.808Z"
            fill="#5B5B5B"
          />
          <path
            id="Vector 1"
            d="M31 156.525L44.9891 144C56.1804 277.47 122.879 269.421 154.83 248.712V266.748L174 386.992L72.4493 391V266.748C49.6522 244.303 35.3176 183.914 31 156.525Z"
            fill="white"
          />
          <g id="head">
            <path
              id="face"
              d="M130.06 222.525C74.639 208.718 40.905 152.599 54.711 97.1778C68.517 41.7575 124.637 8.02242 180.057 21.8288C235.478 35.6352 240.122 84.5078 226.316 139.929C212.51 195.349 185.481 236.331 130.06 222.525Z"
              fill="#FFD8D8"
            />
            <path
              id="hair"
              d="M68.456 95.2398C108.84 129.893 198.087 102.649 226.331 99.4378C231.588 100.748 229.897 117.892 228.675 128.567C242.088 105.559 239.55 72.0672 236.347 59.231C191.635 -25.6846 117.961 -1.00179 86.713 21.9542C43.652 53.3852 46.33 115.476 53.8 144.418C49.266 113.426 56.609 101.804 68.456 95.2398Z"
              fill="#2F2E41"
            />
            <path
              id="right-eye"
              d="M148.277 146.286C152.79 147.411 157.36 144.664 158.485 140.151C159.609 135.637 156.862 131.067 152.349 129.943C147.836 128.819 143.266 131.566 142.141 136.079C141.017 140.592 143.764 145.162 148.277 146.286Z"
              fill="#B9A57F"
            />
            <path
              id="left-eye"
              d="M201.276 156.284C205.788 157.408 210.357 154.662 211.481 150.149C212.605 145.637 209.859 141.068 205.346 139.944C200.834 138.819 196.265 141.566 195.141 146.078C194.017 150.591 196.763 155.16 201.276 156.284Z"
              fill="#B9A57F"
            />
            <path
              id="nose"
              d="M181.405 152.341C188.081 158.016 188.878 161.338 181.928 167.659"
              stroke="#C69494"
              strokeWidth="2"
            />
          </g>
          <g id="right-arm">
            <path
              id="Vector"
              d="M224.603 354.65C240.043 347.914 247.098 329.937 240.362 314.498C233.626 299.059 215.649 292.003 200.21 298.739C184.771 305.475 177.716 323.452 184.452 338.891C191.187 354.33 209.164 361.386 224.603 354.65Z"
              fill="#FFD8D8"
            />
            <path
              id="Vector_2"
              d="M66.6011 233.025C113.618 266.04 143.5 283.006 197.45 300.588C200.163 301.472 201.615 304.434 200.625 307.109L189.713 336.582C188.8 339.047 186.123 340.384 183.609 339.62C128.489 322.865 95.3828 302.748 50.5823 278.072C48.5263 276.94 47.524 274.529 48.184 272.277L58.8936 235.705C59.8585 232.41 63.7907 231.052 66.6011 233.025Z"
              fill="#FFD8D8"
            />
            <g id="Group" filter="url(#filter0_d)">
              <path
                id="Vector_3"
                d="M45.445 284.893L86.9441 222.987C62.6141 210.908 13.1801 192.222 10.0831 214.099C6.98627 235.975 32.3673 270.41 45.445 284.893Z"
                fill="#5B5B5B"
              />
            </g>
          </g>
          <path
            id="mouth"
            d="M191.5 190C191.5 191.835 189.595 193.5 187 193.5C184.405 193.5 182.5 191.835 182.5 190C182.5 188.165 184.405 186.5 187 186.5C189.595 186.5 191.5 188.165 191.5 190Z"
            fill="#C87F7F"
            stroke="#C69494"
          />
          <path
            id="Cooking&#226;&#128;&#168;With"
            d="M357.886 119.354C357.886 121.382 357.485 123.397 356.685 125.399C355.884 127.401 354.803 129.257 353.441 130.965C352.107 132.673 350.559 134.168 348.797 135.449C347.035 136.73 345.207 137.651 343.312 138.212L342.471 136.811C343.592 136.25 344.619 135.529 345.554 134.648C346.488 133.768 347.289 132.78 347.956 131.686C348.623 130.564 349.131 129.39 349.478 128.162C349.851 126.908 350.038 125.64 350.038 124.358C350.038 122.89 349.825 121.502 349.397 120.194C348.97 118.886 348.343 117.752 347.516 116.791C346.688 115.803 345.66 115.029 344.433 114.469C343.231 113.908 341.843 113.628 340.269 113.628C338.347 113.628 336.585 114.002 334.983 114.749C333.382 115.496 331.94 116.511 330.659 117.792C329.378 119.047 328.257 120.501 327.296 122.156C326.362 123.785 325.574 125.506 324.934 127.321C324.32 129.11 323.853 130.925 323.532 132.767C323.212 134.608 323.052 136.343 323.052 137.972C323.052 139.627 323.225 141.335 323.572 143.097C323.919 144.858 324.426 146.593 325.094 148.302C325.761 150.01 326.589 151.625 327.576 153.146C328.564 154.668 329.698 156.003 330.979 157.15C332.287 158.298 333.729 159.219 335.304 159.913C336.905 160.58 338.64 160.914 340.509 160.914C341.79 160.914 343.031 160.741 344.232 160.394C345.46 160.047 346.635 159.579 347.756 158.992C348.877 158.405 349.931 157.711 350.919 156.91C351.933 156.109 352.868 155.242 353.722 154.308L355.043 155.589C353.868 157.137 352.467 158.632 350.839 160.073C349.237 161.488 347.502 162.756 345.634 163.877C343.765 164.971 341.803 165.852 339.748 166.52C337.719 167.16 335.704 167.48 333.702 167.48C331.754 167.48 329.912 167.147 328.177 166.479C326.468 165.785 324.894 164.865 323.452 163.717C322.011 162.542 320.716 161.181 319.568 159.633C318.447 158.058 317.486 156.39 316.686 154.628C315.911 152.866 315.311 151.051 314.884 149.183C314.483 147.314 314.283 145.486 314.283 143.697C314.283 141.108 314.71 138.452 315.564 135.729C316.445 132.98 317.646 130.324 319.168 127.762C320.689 125.173 322.478 122.73 324.533 120.435C326.615 118.139 328.844 116.137 331.22 114.429C333.622 112.72 336.118 111.372 338.707 110.385C341.323 109.37 343.925 108.863 346.515 108.863C348.116 108.863 349.611 109.104 350.999 109.584C352.387 110.038 353.588 110.705 354.603 111.586C355.617 112.467 356.418 113.561 357.005 114.869C357.592 116.177 357.886 117.672 357.886 119.354ZM374.822 167.921C372.847 167.921 370.992 167.574 369.257 166.88C367.549 166.159 366.054 165.172 364.772 163.917C363.518 162.662 362.517 161.194 361.77 159.513C361.049 157.804 360.688 155.949 360.688 153.947C360.688 151.678 361.062 149.556 361.81 147.581C362.557 145.579 363.585 143.777 364.893 142.176C366.227 140.574 367.789 139.186 369.577 138.012C371.392 136.837 373.354 135.916 375.463 135.249L376.624 136.65C375.423 137.531 374.302 138.546 373.261 139.693C372.22 140.814 371.312 142.042 370.538 143.377C369.764 144.685 369.15 146.073 368.696 147.541C368.243 148.982 368.016 150.464 368.016 151.985C368.016 153.267 368.202 154.615 368.576 156.029C368.95 157.444 369.51 158.739 370.258 159.913C371.005 161.088 371.939 162.062 373.061 162.836C374.208 163.583 375.53 163.957 377.024 163.957C378.359 163.957 379.507 163.717 380.468 163.236C381.455 162.756 382.27 162.102 382.91 161.274C383.551 160.447 384.031 159.486 384.352 158.392C384.672 157.271 384.832 156.096 384.832 154.868C384.832 153.427 384.552 151.959 383.991 150.464C383.431 148.942 382.657 147.541 381.669 146.26C380.708 144.979 379.574 143.911 378.266 143.057C376.958 142.202 375.556 141.709 374.062 141.575C374.996 140.507 376.023 139.52 377.145 138.612C378.266 137.705 379.4 136.837 380.548 136.01C382.096 136.517 383.457 137.264 384.632 138.252C385.833 139.24 386.834 140.374 387.635 141.655C388.462 142.937 389.09 144.338 389.517 145.859C389.944 147.354 390.157 148.876 390.157 150.424C390.157 152.533 389.784 154.628 389.036 156.71C388.315 158.792 387.274 160.674 385.913 162.355C384.578 164.01 382.964 165.358 381.068 166.399C379.2 167.414 377.118 167.921 374.822 167.921ZM409.096 167.921C407.12 167.921 405.265 167.574 403.53 166.88C401.822 166.159 400.327 165.172 399.046 163.917C397.791 162.662 396.79 161.194 396.043 159.513C395.322 157.804 394.962 155.949 394.962 153.947C394.962 151.678 395.336 149.556 396.083 147.581C396.83 145.579 397.858 143.777 399.166 142.176C400.501 140.574 402.062 139.186 403.851 138.012C405.666 136.837 407.628 135.916 409.736 135.249L410.897 136.65C409.696 137.531 408.575 138.546 407.534 139.693C406.493 140.814 405.586 142.042 404.812 143.377C404.037 144.685 403.424 146.073 402.97 147.541C402.516 148.982 402.289 150.464 402.289 151.985C402.289 153.267 402.476 154.615 402.85 156.029C403.223 157.444 403.784 158.739 404.531 159.913C405.279 161.088 406.213 162.062 407.334 162.836C408.482 163.583 409.803 163.957 411.298 163.957C412.632 163.957 413.78 163.717 414.741 163.236C415.729 162.756 416.543 162.102 417.184 161.274C417.824 160.447 418.305 159.486 418.625 158.392C418.945 157.271 419.105 156.096 419.105 154.868C419.105 153.427 418.825 151.959 418.265 150.464C417.704 148.942 416.93 147.541 415.942 146.26C414.981 144.979 413.847 143.911 412.539 143.057C411.231 142.202 409.83 141.709 408.335 141.575C409.269 140.507 410.297 139.52 411.418 138.612C412.539 137.705 413.674 136.837 414.821 136.01C416.369 136.517 417.731 137.264 418.905 138.252C420.106 139.24 421.107 140.374 421.908 141.655C422.736 142.937 423.363 144.338 423.79 145.859C424.217 147.354 424.431 148.876 424.431 150.424C424.431 152.533 424.057 154.628 423.31 156.71C422.589 158.792 421.548 160.674 420.187 162.355C418.852 164.01 417.237 165.358 415.342 166.399C413.473 167.414 411.391 167.921 409.096 167.921ZM460.746 162.556C460.346 163.25 459.852 163.917 459.265 164.558C458.677 165.172 458.023 165.705 457.303 166.159C456.609 166.613 455.861 166.973 455.061 167.24C454.26 167.507 453.446 167.641 452.618 167.641C451.577 167.641 450.496 167.254 449.375 166.479C448.254 165.705 447.16 164.785 446.092 163.717C445.024 162.622 444.01 161.515 443.049 160.394C442.088 159.246 441.234 158.298 440.486 157.551L439.846 157.911C439.712 158.392 439.592 158.992 439.485 159.713C439.379 160.434 439.285 161.181 439.205 161.955C439.125 162.729 439.058 163.49 439.005 164.237C438.978 164.958 438.951 165.572 438.925 166.079L431.558 168.642V112.146L438.925 109.584V154.027C439.218 153.04 439.579 151.905 440.006 150.624C440.433 149.316 440.927 147.981 441.487 146.62C442.075 145.232 442.742 143.871 443.489 142.536C444.237 141.201 445.064 140.014 445.972 138.973C446.879 137.905 447.88 137.051 448.975 136.41C450.069 135.77 451.257 135.449 452.538 135.449C453.312 135.449 454.006 135.596 454.62 135.89C455.261 136.157 455.795 136.53 456.222 137.011C456.675 137.491 457.022 138.052 457.263 138.692C457.503 139.333 457.623 140.027 457.623 140.774C457.623 142.296 457.249 143.751 456.502 145.139C455.755 146.527 454.807 147.821 453.659 149.022C452.538 150.224 451.31 151.305 449.976 152.266C448.668 153.227 447.44 154.041 446.292 154.708C446.666 155.028 447.093 155.469 447.573 156.029C448.054 156.563 448.548 157.137 449.055 157.751C449.589 158.365 450.136 158.992 450.696 159.633C451.284 160.273 451.857 160.847 452.418 161.354C452.979 161.862 453.539 162.275 454.1 162.596C454.687 162.916 455.234 163.076 455.741 163.076C456.515 163.076 457.223 162.903 457.863 162.556C458.504 162.209 459.051 161.755 459.505 161.194L460.746 162.556ZM450.016 143.697C450.016 143.243 449.815 142.816 449.415 142.416C449.015 142.016 448.601 141.815 448.174 141.815C447.64 141.815 447.093 142.082 446.532 142.616C445.998 143.15 445.478 143.831 444.971 144.658C444.464 145.486 443.97 146.407 443.489 147.421C443.035 148.435 442.622 149.423 442.248 150.384C441.874 151.345 441.541 152.239 441.247 153.066C440.98 153.867 440.78 154.468 440.646 154.868C441.02 154.601 441.501 154.201 442.088 153.667C442.702 153.133 443.356 152.533 444.05 151.865C444.744 151.171 445.438 150.451 446.132 149.703C446.853 148.929 447.493 148.182 448.054 147.461C448.641 146.714 449.108 146.02 449.455 145.379C449.829 144.712 450.016 144.151 450.016 143.697ZM474.079 114.749L471.957 129.363L468.033 130.604L465.631 117.632L474.079 114.749ZM479.604 162.315C478.991 163.623 478.27 164.624 477.442 165.318C476.642 166.012 475.868 166.52 475.12 166.84C474.239 167.214 473.345 167.427 472.438 167.48C471.263 167.48 470.289 167.294 469.515 166.92C468.741 166.546 468.127 166.052 467.673 165.438C467.219 164.825 466.899 164.131 466.712 163.356C466.552 162.582 466.472 161.795 466.472 160.994V138.532L473.839 136.01V161.194C473.839 161.835 473.986 162.342 474.279 162.716C474.573 163.09 474.947 163.29 475.4 163.316C475.881 163.316 476.388 163.143 476.922 162.796C477.482 162.449 478.016 161.888 478.523 161.114L479.604 162.315ZM517.682 162.315C517.361 163.009 516.948 163.663 516.44 164.277C515.933 164.891 515.359 165.438 514.719 165.919C514.105 166.399 513.438 166.773 512.717 167.04C511.996 167.334 511.249 167.48 510.475 167.48C508.366 167.48 506.831 166.907 505.87 165.759C504.936 164.584 504.469 162.996 504.469 160.994V144.698C504.469 144.511 504.455 144.298 504.429 144.058C504.429 143.791 504.389 143.55 504.309 143.337C504.229 143.097 504.122 142.896 503.988 142.736C503.855 142.576 503.668 142.496 503.428 142.496C502.68 142.496 501.92 142.95 501.146 143.857C500.398 144.765 499.664 145.939 498.943 147.381C498.249 148.822 497.595 150.437 496.981 152.226C496.394 154.014 495.874 155.789 495.42 157.551C494.966 159.286 494.606 160.914 494.339 162.436C494.099 163.957 493.979 165.172 493.979 166.079L486.691 168.642V141.735C486.691 141.201 486.558 140.721 486.291 140.294C486.024 139.84 485.61 139.613 485.05 139.613C484.382 139.613 483.769 139.867 483.208 140.374C482.674 140.854 482.247 141.335 481.927 141.815L480.846 140.614C481.166 139.947 481.566 139.306 482.047 138.692C482.554 138.052 483.115 137.491 483.729 137.011C484.369 136.53 485.05 136.157 485.771 135.89C486.518 135.596 487.292 135.449 488.093 135.449C490.175 135.449 491.67 136.036 492.577 137.211C493.511 138.359 493.979 139.92 493.979 141.896V154.948C494.219 153.854 494.539 152.613 494.939 151.225C495.367 149.81 495.874 148.382 496.461 146.94C497.048 145.499 497.702 144.098 498.423 142.736C499.17 141.348 499.984 140.12 500.865 139.053C501.746 137.958 502.707 137.091 503.748 136.45C504.789 135.783 505.91 135.449 507.111 135.449C508.366 135.449 509.313 135.729 509.954 136.29C510.595 136.824 511.049 137.518 511.315 138.372C511.609 139.2 511.769 140.12 511.796 141.135C511.823 142.149 511.836 143.123 511.836 144.058V161.194C511.836 161.728 511.969 162.222 512.236 162.676C512.503 163.103 512.917 163.316 513.478 163.316C514.091 163.316 514.665 163.076 515.199 162.596C515.76 162.089 516.2 161.595 516.521 161.114L517.682 162.315ZM547.911 164.037C547.911 165.612 547.698 167.214 547.271 168.842C546.843 170.497 546.229 172.112 545.429 173.687C544.655 175.261 543.72 176.743 542.626 178.131C541.532 179.546 540.304 180.773 538.942 181.814C537.608 182.855 536.153 183.683 534.578 184.297C533.03 184.911 531.415 185.218 529.733 185.218C528.666 185.218 527.638 185.044 526.65 184.697C525.689 184.35 524.822 183.803 524.048 183.056L529.333 178.051C529.894 178.798 530.548 179.399 531.295 179.853C532.042 180.306 532.883 180.533 533.817 180.533C535.179 180.533 536.286 180.266 537.141 179.732C537.995 179.225 538.675 178.531 539.183 177.65C539.69 176.796 540.05 175.809 540.264 174.688C540.477 173.593 540.611 172.459 540.664 171.284C540.717 170.11 540.717 168.962 540.664 167.841C540.637 166.72 540.624 165.705 540.624 164.798V160.193C540.144 161.101 539.596 162.008 538.982 162.916C538.395 163.824 537.715 164.638 536.94 165.358C536.193 166.079 535.352 166.666 534.418 167.12C533.484 167.574 532.443 167.801 531.295 167.801C529.56 167.801 528.025 167.467 526.69 166.8C525.356 166.132 524.235 165.238 523.327 164.117C522.42 162.969 521.739 161.635 521.285 160.113C520.831 158.592 520.604 156.977 520.604 155.269C520.604 153.72 520.791 152.159 521.165 150.584C521.539 148.982 522.059 147.448 522.727 145.979C523.421 144.511 524.261 143.137 525.249 141.855C526.263 140.574 527.384 139.466 528.612 138.532C529.867 137.571 531.242 136.824 532.736 136.29C534.231 135.729 535.819 135.449 537.501 135.449C538.515 135.449 539.53 135.569 540.544 135.81C541.558 136.05 542.519 136.424 543.427 136.931C544.361 137.411 545.202 138.012 545.949 138.732C546.723 139.453 547.351 140.294 547.831 141.255L541.865 143.777C541.545 143.27 541.171 142.763 540.744 142.256C540.344 141.722 539.89 141.242 539.383 140.814C538.902 140.387 538.368 140.04 537.781 139.773C537.221 139.507 536.633 139.373 536.02 139.373C535.112 139.373 534.258 139.587 533.457 140.014C532.683 140.441 531.962 141.001 531.295 141.695C530.654 142.389 530.08 143.19 529.573 144.098C529.066 144.979 528.639 145.899 528.292 146.86C527.945 147.821 527.678 148.769 527.491 149.703C527.331 150.637 527.251 151.478 527.251 152.226C527.251 153.24 527.344 154.388 527.531 155.669C527.745 156.924 528.105 158.111 528.612 159.232C529.119 160.354 529.787 161.301 530.614 162.075C531.442 162.849 532.483 163.236 533.737 163.236C534.725 163.236 535.579 163.023 536.3 162.596C537.021 162.142 537.634 161.568 538.142 160.874C538.649 160.153 539.062 159.339 539.383 158.432C539.73 157.497 539.983 156.55 540.144 155.589C540.33 154.628 540.451 153.68 540.504 152.746C540.584 151.785 540.624 150.931 540.624 150.184V147.421L547.911 144.858V164.037ZM332.061 264.401L311.721 209.228L319.849 205.584L334.943 248.986L340.669 233.411L333.142 212.991L341.27 209.468L355.363 251.028C356.858 247.718 358.326 244.435 359.768 241.179C361.236 237.896 362.69 234.586 364.132 231.249C364.826 229.621 365.44 227.979 365.974 226.324C366.507 224.643 366.774 222.868 366.774 220.999C366.774 219.558 366.588 218.196 366.214 216.915C365.867 215.634 365.373 214.419 364.732 213.271C364.092 212.097 363.318 211.003 362.41 209.988C361.529 208.947 360.568 207.973 359.527 207.065L365.613 199.538C366.601 200.259 367.495 201.153 368.296 202.221C369.123 203.288 369.831 204.436 370.418 205.664C371.005 206.892 371.459 208.16 371.779 209.468C372.1 210.776 372.26 212.03 372.26 213.231C372.26 215.58 371.913 217.863 371.219 220.078C370.525 222.267 369.724 224.442 368.816 226.604C366.067 232.957 363.304 239.257 360.528 245.503C357.752 251.749 354.963 258.049 352.16 264.401L341.91 236.694L332.061 264.401ZM385.993 210.749L383.871 225.363L379.947 226.604L377.545 213.632L385.993 210.749ZM391.519 258.315C390.905 259.623 390.184 260.624 389.356 261.318C388.556 262.012 387.782 262.52 387.034 262.84C386.153 263.214 385.259 263.427 384.352 263.48C383.177 263.48 382.203 263.294 381.429 262.92C380.655 262.546 380.041 262.052 379.587 261.438C379.133 260.825 378.813 260.131 378.626 259.356C378.466 258.582 378.386 257.795 378.386 256.994V234.532L385.753 232.01V257.194C385.753 257.835 385.9 258.342 386.193 258.716C386.487 259.09 386.861 259.29 387.314 259.316C387.795 259.316 388.302 259.143 388.836 258.796C389.396 258.449 389.93 257.888 390.438 257.114L391.519 258.315ZM411.058 258.315C410.444 259.623 409.736 260.624 408.936 261.318C408.135 262.012 407.347 262.52 406.573 262.84C405.692 263.214 404.785 263.427 403.851 263.48C402.649 263.48 401.662 263.294 400.888 262.92C400.14 262.546 399.54 262.052 399.086 261.438C398.659 260.825 398.352 260.131 398.165 259.356C398.005 258.582 397.925 257.795 397.925 256.994V236.014H393.681L395.402 232.01H397.925V217.836L405.252 215.273V232.01H412.859L411.218 236.014H405.252V257.194C405.252 257.835 405.399 258.342 405.692 258.716C405.986 259.09 406.36 259.29 406.813 259.316C407.267 259.316 407.774 259.143 408.335 258.796C408.896 258.449 409.443 257.888 409.977 257.114L411.058 258.315ZM448.574 258.315C448.281 259.009 447.88 259.663 447.373 260.277C446.893 260.891 446.332 261.438 445.691 261.919C445.077 262.399 444.397 262.773 443.649 263.04C442.929 263.334 442.168 263.48 441.367 263.48C439.285 263.48 437.764 262.907 436.803 261.759C435.868 260.584 435.401 258.996 435.401 256.994V240.698C435.401 240.485 435.388 240.258 435.361 240.018C435.335 239.751 435.268 239.51 435.161 239.297C435.081 239.057 434.961 238.87 434.801 238.736C434.641 238.576 434.427 238.496 434.16 238.496C433.466 238.496 432.812 238.79 432.198 239.377C431.584 239.938 431.024 240.712 430.517 241.699C430.009 242.66 429.529 243.768 429.075 245.022C428.648 246.277 428.261 247.585 427.914 248.946C427.567 250.308 427.26 251.669 426.993 253.03C426.753 254.392 426.539 255.673 426.353 256.874C426.166 258.075 426.019 259.13 425.912 260.037C425.832 260.945 425.792 261.625 425.792 262.079L418.425 264.642V208.146L425.792 205.584V248.906C425.952 247.945 426.206 246.851 426.553 245.623C426.9 244.368 427.327 243.101 427.834 241.819C428.341 240.538 428.928 239.27 429.596 238.016C430.29 236.761 431.064 235.653 431.918 234.692C432.772 233.731 433.706 232.957 434.721 232.37C435.762 231.756 436.883 231.449 438.084 231.449C439.312 231.449 440.246 231.729 440.887 232.29C441.527 232.824 441.981 233.518 442.248 234.372C442.542 235.2 442.702 236.12 442.729 237.135C442.755 238.149 442.769 239.123 442.769 240.058V257.194C442.769 257.728 442.889 258.222 443.129 258.676C443.396 259.103 443.823 259.316 444.41 259.316C445.077 259.316 445.678 259.076 446.212 258.596C446.746 258.089 447.186 257.595 447.533 257.114L448.574 258.315Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="179.597"
            width="107.998"
            height="114.121"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="1" dy="1" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </LogoWrapper>
    </>
  );
};
