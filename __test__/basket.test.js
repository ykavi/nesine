import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BasketProvider } from "../context";
import { sportBookMock } from "../__Mock__";
import "../__Mock__/intersectionObserverMock";
import { Basket, SportsBook } from "../components";

test("Render SportsBook", () => {
  render(
    <BasketProvider>
      <SportsBook data={sportBookMock} />
      <Basket />
    </BasketProvider>
  );

  fireEvent.click(screen.getByTestId(/2001-1-0/i));
  const basketItem = screen.getByTestId(/basket-2001/i);

  expect(basketItem).toBeInTheDocument();
});
