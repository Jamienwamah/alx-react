import React from 'react';

function NotificationItem({ type, html, value }) {
  return (
    value ? 
    <li
    data-notification-type={type}
    >{value}</li> 
    :
    <li
    data-notification-type={type}
    dangerouslySetInnerHTML={{ __html: html }}
    ></li> 
  );
}

export default NotificationItem;
