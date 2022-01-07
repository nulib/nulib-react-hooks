import React from "react";
import useFoo from "./use-foo";

const UseFooExample: React.FC = () => {
  const { foo } = useFoo();
  return <div>{foo}</div>;
};

export default UseFooExample;
