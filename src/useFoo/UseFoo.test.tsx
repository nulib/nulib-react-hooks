import React from "react";
import UseFooExample from "./UseFoo.example";
import { render, screen } from "@testing-library/react";

describe("UseFoo.example component", () => {
  test("renders", () => {
    render(<UseFooExample />);
    expect(screen.getByText(/bar/i));
  });
});
