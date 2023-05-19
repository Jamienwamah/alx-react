import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notification />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;
