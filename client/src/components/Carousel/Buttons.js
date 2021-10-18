import React from "react";

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg
      id="icon_navigation_chevron_left_24px"
      data-name="icon/navigation/chevron_left_24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <rect id="Boundary" width="24" height="24" fill="none" />
      <path
        id="_Color"
        data-name=" ↳Color"
        d="M7.4,1.41,5.992,0,0,6l5.992,6L7.4,10.59,2.826,6Z"
        transform="translate(8 6)"
      />
    </svg>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg
      id="icon_navigation_chevron_right_24px"
      data-name="icon/navigation/chevron_right_24px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <rect id="Boundary" width="24" height="24" fill="none" />
      <path
        id="_Color"
        data-name=" ↳Color"
        d="M1.408,0,0,1.41,4.574,6,0,10.59,1.408,12,7.4,6Z"
        transform="translate(8.6 6)"
      />
    </svg>
  </button>
);
