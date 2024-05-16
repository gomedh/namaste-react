import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/mock-data.json"
import "@testing-library/jest-dom";

// it("Should render the component with the props Data", () => {
//  render(<RestaurantCard resData={MOCK_DATA} />)

//  const name = screen.getAllByText("McDonald's");
//  expect(name).toBeInTheDocument()
// })