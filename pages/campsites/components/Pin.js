const Camper = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="caravan"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path
        fill="currentColor"
        d="M0 112C0 67.82 35.82 32 80 32H416C504.4 32 576 103.6 576 192V352H608C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H288C288 469 245 512 192 512C138.1 512 96 469 96 416H80C35.82 416 0 380.2 0 336V112zM320 352H448V256H416C407.2 256 400 248.8 400 240C400 231.2 407.2 224 416 224H448V160C448 142.3 433.7 128 416 128H352C334.3 128 320 142.3 320 160V352zM96 128C78.33 128 64 142.3 64 160V224C64 241.7 78.33 256 96 256H224C241.7 256 256 241.7 256 224V160C256 142.3 241.7 128 224 128H96zM192 464C218.5 464 240 442.5 240 416C240 389.5 218.5 368 192 368C165.5 368 144 389.5 144 416C144 442.5 165.5 464 192 464z"
      ></path>
    </svg>
  );
};

const Tent = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="campground"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M328.1 112L563.7 405.4C571.7 415.4 576 427.7 576 440.4V464C576 490.5 554.5 512 528 512H48C21.49 512 0 490.5 0 464V440.4C0 427.7 4.328 415.4 12.27 405.4L247 112L199 51.99C187.1 38.19 190.2 18.05 204 7.013C217.8-4.027 237.9-1.789 248.1 12.01L288 60.78L327 12.01C338.1-1.789 358.2-4.027 371.1 7.013C385.8 18.05 388 38.19 376.1 51.99L328.1 112zM407.5 448L288 291.7L168.5 448H407.5z"
      ></path>
    </svg>
  );
};

const Sneaky = (props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="user-ninja"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M64 192c27.25 0 51.75-11.5 69.25-29.75c15 54 64 93.75 122.8 93.75c70.75 0 127.1-57.25 127.1-128s-57.25-128-127.1-128c-50.38 0-93.63 29.38-114.5 71.75C124.1 47.75 96 32 64 32c0 33.37 17.12 62.75 43.13 80C81.13 129.3 64 158.6 64 192zM208 96h95.1C321.7 96 336 110.3 336 128h-160C176 110.3 190.3 96 208 96zM337.8 306.9L256 416L174.2 306.9C93.36 321.6 32 392.2 32 477.3c0 19.14 15.52 34.67 34.66 34.67H445.3c19.14 0 34.66-15.52 34.66-34.67C480 392.2 418.6 321.6 337.8 306.9z"
      ></path>
    </svg>
  );
};

const Pin = ({ pin }) => {
  let title;
  if (pin === "camper") {
    title = "A camp site that is camper or RV friendly";
  } else if (pin === "tent") {
    title = "A camp site that is tent friendly";
  } else {
    title = "A camp site that isn't really a camp site";
  }

  return (
    <div className="pin-container" title={title}>
      <div className="pin" draggable="true">
        {pin === "camper" && <Camper />}
        {pin === "tent" && <Tent />}
        {pin === "sneaky" && <Sneaky />}
      </div>
    </div>
  );
};

export default Pin;
