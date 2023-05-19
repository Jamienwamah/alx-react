import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("Testing <CourseList />", () => {
  it("Renders CourseList component without crashing", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  });

  it("CourseList renders the 5 different rows", () => {
    let wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow")).toHaveLength(5);
  });
});
