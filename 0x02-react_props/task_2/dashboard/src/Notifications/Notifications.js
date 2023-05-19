import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {
  return (
    <div className="Notifications">
      <button style={{
        color: '#3a3a3a',
        fontWeight: 'bold',
        background: 'none',
        border: 'none',
        fontSize: '15px',
        position: 'absolute',
        right: '3px',
        top: '3px',
        cursor: 'pointer',
        outline: 'none',
      }}
      aria-label="Close"
      onClick={(e) => {
        console.log('Close button has been clicked');
      }}
      >
        <img src={closeIcon} alt="close icon" width="15px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available">
				</NotificationItem>
				<NotificationItem type="urgent" value="New resume available">
				</NotificationItem>
				<NotificationItem
					type="urgent"
					html={getLatestNotification()}
				>
				</NotificationItem>
      </ul>
    </div>
  );
};

export default Notifications;
