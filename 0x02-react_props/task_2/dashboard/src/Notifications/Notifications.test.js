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
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
  });

  it("verify that the first NotificationItem element renders the right html", () => {
    expect(wrapper.find("NotificationItem").first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });

});
