const NavLogo = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" fill="none">
    <path fill="transparent" d="M0 20V0h100v20Z"></path>
    <path
      className={className}
      fill="currentColor"
      d="M28.173 12.544V6.263h1.306v6.242c0 1.452.794 2.272 2.128 2.272 1.346 0 2.114-.82 2.114-2.272V6.263h1.32v6.281c0 2.246-1.495 3.456-3.434 3.456s-3.434-1.21-3.434-3.456M45.961 15.799l-5.156-7.774v7.774h-1.321V6.263h1.766l4.766 7.316V6.263h1.32v9.536ZM62.377 6.263h2.182l-2.6 9.536h-2.192l-2.032-6.32-2.047 6.32h-2.239l-2.6-9.536h2.266l1.573 6.106 1.98-6.106h2.181l1.98 6.119ZM67.115 6.263h2.495l1.953 3.538 1.976-3.538h2.371l-3.354 5.554v3.979h-2.128v-3.979ZM85.282 15.799l-3.933-6.268v6.268h-2.114V6.263h2.586l3.582 5.797V6.263h2.128v9.536ZM91.746 15.799V6.263h3.461c2.868 0 4.794 1.83 4.794 4.775s-1.926 4.759-4.808 4.759Zm3.366-2.005c1.468 0 2.667-.847 2.667-2.756S96.58 8.27 95.112 8.27h-1.238v5.527ZM19.718 5.133c-1.27-1.976-3.276-3.599-5.462-4.456A10.1 10.1 0 0 0 11.287.01c-.115-.01-.517-.053-.505.146.006.078.129.137.185.169q.264.134.547.226c1.586.619 3.073 1.477 4.346 2.609 1.185 1.05 2.187 2.34 2.75 3.83a7.6 7.6 0 0 1 .457 3.369 8 8 0 0 1-.186 1.092c-.847 3.449-4.227 5.972-7.857 5.583a.04.04 0 0 1-.026-.015.05.05 0 0 1-.009-.028.05.05 0 0 1 .012-.027.04.04 0 0 1 .027-.013c1.699-.234 3.281-.745 4.657-1.804.837-.647 1.567-1.404 2.086-2.334.726-1.302.887-2.88.57-4.336s-1.094-2.79-2.1-3.888c1.429 1.984 2.295 4.591 1.464 6.89-1.452 4.018-8.047 5.878-11.308 2.989-1.939-1.716-2.062-4.385-.404-6.34 1.003-1.182 2.244-1.526 3.704-1.795 1.132-.21 2.792-1.044 2.648-2.423-.171-1.645-2.472-2.419-3.873-2.407-3.187.032-6.235 2.238-7.509 4.721-2.038 3.977-.743 9.223 2.959 11.807 3.471 2.424 8.341 2.591 12.049.603 2.013-1.079 3.672-2.773 4.578-4.876.906-2.102 1.061-4.63.163-6.776a12 12 0 0 0-.994-1.849"
    ></path>
  </svg>
);

const HandHeart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M13.993 4.253c2.458-1.523 4.603-.909 5.892.069.529.4.793.601.948.601.156 0 .42-.2.949-.601 1.288-.978 3.434-1.592 5.892-.069 3.226 2 3.956 8.593-3.485 14.157C22.77 19.47 22.063 20 20.833 20s-1.938-.53-3.355-1.59c-7.441-5.563-6.711-12.158-3.485-14.157Z"
    ></path>
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6.667 23.333h3.991c.49 0 .974.11 1.412.323l3.404 1.647c.438.212.922.322 1.412.322h1.738c1.68 0 3.043 1.319 3.043 2.945a.15.15 0 0 1-.11.142l-4.235 1.17c-.76.21-1.574.137-2.28-.205l-3.638-1.76"
    ></path>
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m21.667 27.5 7.654-2.352c1.357-.423 2.824.079 3.674 1.256.615.85.365 2.07-.53 2.586l-12.527 7.228a3.32 3.32 0 0 1-2.613.311L6.667 33.367"
    ></path>
  </svg>
);

const Slider = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 11.667h5M5 28.333h10m15 0h5M25 11.667h10"
    ></path>
    <path
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      d="M10 11.667c0-1.553 0-2.33.254-2.943a3.33 3.33 0 0 1 1.804-1.804c.612-.253 1.389-.253 2.942-.253s2.33 0 2.942.253a3.33 3.33 0 0 1 1.804 1.804c.254.613.254 1.39.254 2.943s0 2.33-.254 2.942a3.33 3.33 0 0 1-1.804 1.804c-.612.254-1.389.254-2.942.254s-2.33 0-2.942-.254a3.33 3.33 0 0 1-1.804-1.804C10 13.996 10 13.219 10 11.667Zm10 16.666c0-1.553 0-2.33.254-2.942a3.33 3.33 0 0 1 1.804-1.804c.612-.254 1.389-.254 2.942-.254s2.33 0 2.942.254a3.33 3.33 0 0 1 1.804 1.804c.254.613.254 1.39.254 2.942 0 1.554 0 2.33-.254 2.943a3.33 3.33 0 0 1-1.804 1.804c-.612.253-1.389.253-2.942.253s-2.33 0-2.942-.253a3.33 3.33 0 0 1-1.804-1.804C20 30.663 20 29.886 20 28.333Z"
    ></path>
  </svg>
);

const HeartBeat = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M32.438 6.656c-4.47-2.742-8.37-1.637-10.714.123-.96.722-1.441 1.082-1.724 1.082s-.763-.36-1.724-1.082c-2.343-1.76-6.244-2.865-10.713-.123C1.697 10.254.37 22.124 13.9 32.138c2.577 1.907 3.865 2.86 6.1 2.86 2.236 0 3.524-.953 6.101-2.86 13.53-10.014 12.203-21.884 6.337-25.482Z"
    ></path>
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M26.667 21.667H25c-.759 0-1.558.058-2.239-.465-.26-.2-.431-.475-.776-1.026L19.167 15l-5 8.333-2.595-3.613c-.427-.512-.843-1.032-1.408-1.237-.41-.15-.884-.15-1.83-.15H5"
    ></path>
  </svg>
);

const ScanSearch = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m32.334 32.333 4.333 4.334M34.5 24.75c0-5.385-4.365-9.75-9.75-9.75S15 19.365 15 24.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75"
    ></path>
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M3.333 10c.218-2.226.71-3.723 1.828-4.84C6.277 4.044 7.774 3.55 10 3.333m0 33.334c-2.227-.218-3.724-.71-4.84-1.827-1.117-1.117-1.61-2.614-1.827-4.84m33.333-20c-.218-2.226-.71-3.723-1.827-4.84s-2.614-1.61-4.84-1.827M3.334 16.667v6.666m20-20h-6.667"
    ></path>
  </svg>
);

const Wind = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M3.333 9.902c5.834 5.72 14.293 3.269 16.221 0 .284-.48.446-1.038.446-1.634C20 6.463 18.508 5 16.667 5s-3.334 1.463-3.334 3.268m15 6.612c0-2.695 1.866-4.88 4.167-4.88s4.167 2.185 4.167 4.88c0 1.195-.367 2.29-.976 3.138-3.447 5.634-20.23 3.51-29.024 1.742M21.81 33.146c.342 1.08 1.268 1.854 2.357 1.854 1.38 0 2.5-1.245 2.5-2.782 0-.522-.13-1.01-.355-1.428-2.145-4.136-12.979-6.917-22.979.501"
    ></path>
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M31.667 25.833H35"
    ></path>
  </svg>
);

const Pause = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M6.667 11.667c0-2.357 0-3.536.732-4.268s1.91-.732 4.268-.732 3.535 0 4.267.732.733 1.91.733 4.268v16.666c0 2.357 0 3.536-.733 4.268-.732.732-1.91.732-4.267.732s-3.536 0-4.268-.732-.732-1.91-.732-4.268zm16.666-.001c0-2.357 0-3.535.733-4.267.732-.732 1.91-.732 4.267-.732s3.536 0 4.268.732.732 1.91.732 4.267v16.667c0 2.357 0 3.536-.732 4.268s-1.91.732-4.268.732-3.535 0-4.267-.732-.733-1.91-.733-4.268V11.667Z"
    ></path>
  </svg>
);

const Lamp = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <path
      className={className}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
      d="M20 3.333c2.725 0 4.087 0 5.275.483.639.26 1.234.618 1.763 1.064.983.827 1.628 2.038 2.917 4.46l1.334 2.505c2.334 4.384 3.502 6.576 2.54 8.199s-3.428 1.623-8.36 1.623H14.53c-4.932 0-7.398 0-8.36-1.623s.206-3.815 2.54-8.199l1.334-2.505c1.29-2.422 1.934-3.633 2.917-4.46a6.6 6.6 0 0 1 1.763-1.064c1.188-.483 2.55-.483 5.275-.483Zm0 18.334v10m-4.24 2.165c.449-.758.673-1.137 1.001-1.42.334-.285.744-.5 1.196-.623.445-.122.947-.122 1.95-.122h.187c1.003 0 1.505 0 1.95.122.452.124.862.338 1.196.624.328.282.552.661 1 1.42.536.904.804 1.356.754 1.725-.05.37-.293.703-.663.907-.368.202-.966.202-2.164.202h-4.334c-1.197 0-1.796 0-2.164-.202-.37-.204-.613-.537-.663-.907-.05-.369.218-.821.754-1.726Z"
    ></path>
  </svg>
);

const Vector = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="42"
    fill="none"
    viewBox="0 0 48 42"
  >
    <path
      fill="url(#paint0_linear_3070_152)"
      d="M41.63 2.32c-6.335-3.838-11.865-2.292-15.186.172C25.082 3.502 24.4 4.007 24 4.007s-1.082-.505-2.444-1.515C18.235.028 12.706-1.518 6.37 2.32c-8.315 5.037-10.196 21.655 8.982 35.675C19.005 40.665 20.832 42 24 42c3.169 0 4.995-1.335 8.648-4.005C51.826 23.975 49.945 7.357 41.63 2.32"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_3070_152"
        x1="0.375"
        x2="42.086"
        y1="0"
        y2="46.924"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1F3FEA"></stop>
        <stop offset="0.2" stopColor="#671FEA"></stop>
        <stop offset="0.4" stopColor="#EA1FC9"></stop>
        <stop offset="0.6" stopColor="#EA1F5E"></stop>
        <stop offset="0.8" stopColor="#EAAD1F"></stop>
        <stop offset="1" stopColor="#AAEA1F"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const Graphic = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
    <path
      className={className}
      fill="currentColor"
      d="M12.569 6.077q-7.53 4.836-8.367 11.258c-.869 6.665 5.091 9.927 8.111 6.996s1.21-6.651-.976-7.668S7.813 16 8.046 14.641c.233-1.36 3.344-5.127 6.077-6.882a.5.5 0 0 0 .076-.68l-.676-.879c-.293-.381-.574-.367-.954-.123m13.217 0q-7.53 4.836-8.367 11.258C16.55 24 22.51 27.262 25.53 24.331s1.21-6.651-.977-7.668c-2.188-1.018-3.524-.663-3.291-2.022.233-1.36 3.345-5.127 6.078-6.882a.5.5 0 0 0 .075-.68L26.74 6.2c-.293-.381-.575-.367-.954-.123"
    ></path>
  </svg>
);

const HealthCare = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
    <path
      className={className}
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2.5"
      d="M29.878 10c0 3.314-2.632 6-5.878 6s-5.878-2.686-5.878-6S20.754 4 24 4s5.878 2.686 5.878 6ZM34.512 33.676v-8.735c0-4.386-3.621-7.941-8.088-7.941h-4.852c-4.466 0-8.087 3.555-8.087 7.941v8.735l7.279 5.559m13.748-5.558c2.83-.662 8.41-1.271 8.087 1.588-.35 3.092-5.242 7.374-14.153 8.471m6.066-10.059-8.896 6.352m0 0 2.83 3.707m-2.83-3.707-1.618-.794m4.448 4.501a36 36 0 0 1-4.448.264s-3.058-.093-4.444-.264c-8.911-1.097-13.803-5.379-14.153-8.471-.323-2.859 5.257-2.25 8.087-1.588l7.276 5.558m3.234 0v-3.176m0 3.176h-3.234m3.234-3.176 5.661-6.353v-3.574m-5.661 9.927-5.661-6.353v-3.574"
    ></path>
  </svg>
);

const Elements = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" fill="none">
    <path
      className={className}
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M27.874 15.793a10 10 0 0 0-2.654-.353 10.08 10.08 0 0 0-9.374 6.367m12.028-6.014c4.279 1.165 7.426 5.079 7.426 9.727 0 5.567-4.513 10.08-10.08 10.08-2.582 0-4.937-.97-6.72-2.567m9.374-17.24c.455-1.149.706-2.402.706-3.713C28.58 6.513 24.067 2 18.5 2S8.42 6.513 8.42 12.08c0 1.311.25 2.564.706 3.713m6.72 6.014a10 10 0 0 0-.706 3.713 10.05 10.05 0 0 0 3.36 7.513m-2.654-11.226a10.1 10.1 0 0 1-6.72-6.014m0 0C4.846 16.958 1.7 20.872 1.7 25.52c0 5.567 4.513 10.08 10.08 10.08 2.581 0 4.936-.97 6.72-2.567"
    ></path>
  </svg>
);

const Music = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" fill="none">
    <path
      className={className}
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M11.5 17a5 5 0 1 1-10.001-.001A5 5 0 0 1 11.5 17m0 0V2c.667 1 1.2 5.2 6 6M13.5 37a5 5 0 1 1 10.001.001A5 5 0 0 1 13.5 37M33.5 34a4 4 0 1 1 8 0 4 4 0 0 1-8 0"
    ></path>
    <path
      className={className}
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M23.5 37V16c9.6 0 16-4.617 18-6v23.852"
    ></path>
    <path
      className={className}
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M23.5 24c9.6 0 16-4.667 18-6"
    ></path>
  </svg>
);

const Flow = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="32" fill="none">
    <path
      className={className}
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M37.5 3.265c-2.273-1.637-5.181-1.637-7.454 0-1.371 1.004-3.209.967-4.579-.037-2.273-1.637-5.182-1.637-7.421 0-1.404 1.004-3.176 1.004-4.546 0M1.5 10.753c2.337 1.637 5.326 1.637 7.663 0a4 4 0 0 1 4.674 0c2.337 1.637 5.361 1.675 7.663.038M37.5 21.247c-2.273-1.637-5.181-1.637-7.454 0a3.81 3.81 0 0 1-4.546 0c-2.273-1.637-5.215-1.675-7.454-.038-1.404 1.005-3.176 1.005-4.546 0M1.5 28.753c2.337 1.637 5.326 1.637 7.663 0a4 4 0 0 1 4.674 0c2.337 1.637 5.361 1.675 7.663.038"
    ></path>
  </svg>
);

const HandPrayer = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
    <path
      className={className}
      fill="transparent"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M24 40.984c-6.26.285-19.224-3.247-21-19.654 2.279-.12 5.397.229 8.537 1.448M24 40.984c6.26.285 19.224-3.247 21-19.653-2.279-.12-5.397.228-8.537 1.447M24 40.985c.797-10.732 6.667-15.955 12.463-18.207M24 40.985c-.198-2.662-.707-4.985-1.451-7.007m-11.012-11.2c-.171-1.394-.137-5.036 1.365-8.454 1.262.62 3.026 1.657 4.781 2.986m-6.146 5.468c4.359 1.694 8.759 5.067 11.012 11.2M24 25.432c-1.423-3.371-3.401-5.914-6.317-8.122M24 25.432c1.423-3.371 3.401-5.914 6.317-8.122M24 25.432c-1.01 2.393-1.792 6.085-1.451 8.546M17.683 17.31C18.48 15.232 20.859 10.461 24 8c3.142 2.461 5.52 7.232 6.317 9.31m6.146 5.468c.171-1.394.137-5.036-1.365-8.454-1.262.62-3.026 1.657-4.781 2.986"
    ></path>
  </svg>
);

export {
  NavLogo,
  HandHeart,
  Slider,
  HeartBeat,
  ScanSearch,
  Wind,
  Pause,
  Lamp,
  Vector,
  Graphic,
  HealthCare,
  Elements,
  Music,
  Flow,
  HandPrayer,
};
