import { render,screen } from "@testing-library/react";
import UserClass from "../components/UserClass";
import MOCK_DATA from '../Mocks/product_mock.json'
import '@testing-library/dom'
import '@testing-library/react'
import "@testing-library/jest-dom"
import { act } from "react";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> Promise.resolve(MOCK_DATA)
    })
})
test("is heading availble", async() => {
  await act(async()=> render(<UserClass/>))
  const heading = screen.getAllByRole("heading");
//   console.log(heading);
  expect(typeof heading).toBe('object')
});
