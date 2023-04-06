import "react-native";
import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { HomeScreen } from "./HomeScreen";
import navigationHelper from "../../navigationHelper";

const mockonPress = jest.fn();

describe("App", () => {
  beforeEach(() => {
    navigationHelper.navigate = mockonPress;
    mockonPress.mockReset();
  });

  it("renders correctly", () => {
    const { getByText } = render(<HomeScreen />);
    fireEvent.press(getByText("Go to Details"));
    expect(mockonPress).toBeCalledTimes(1);
  });
});
