import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe("Testing the <Notifications /> Component", () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("<Notifications /> renders NotificationItems", () => {
    wrapper.setProps({displayDrawer: true});
    expect(wrapper.find('NotificationItem')).not.toHaveLength(0);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    wrapper.setProps({displayDrawer: true});
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  });

  it("verify that the first NotificationItem element renders the right html", () => {
    wrapper.setProps({displayDrawer: true});
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

  it("menu item is being displayed when displayDrawer is false", () => {
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });
});

describe("Testing <Notification ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true}/>);
  });

  it("menu item is being displayed when displayDrawer is true", () => {
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it("div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});
