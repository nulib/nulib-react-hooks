import React from "react";
import useMedia from "./use-media";

const UseMediaExample: React.FC = () => {
  const isBig = useMedia("(min-width: 1000px)");
  const isMedium = useMedia("(max-width: 999px) and (min-width: 700px)");
  const isSmall = useMedia("(max-width: 699px)");
  const size = isBig ? "Big" : isMedium ? "Medium" : isSmall ? "Small" : null;

  return (
    <div
      style={{
        display: "inline-block",
        border: "1px solid",
        padding: "20px",
        margin: "20px",
      }}
    >
      Size: {size}
    </div>
  );
};

export default UseMediaExample;
