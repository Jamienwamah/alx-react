import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList() {
  return (
    <table id="CourseList" cellpadding="0" cellspacing="0">
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        <CourseListRow isHeader={false} textFirstCell='ES6' textSecondCell="60" />
        <CourseListRow isHeader={false} textFirstCell='Webpack' textSecondCell="20" />
        <CourseListRow isHeader={false} textFirstCell='React' textSecondCell="40" />
      </tbody>
    </table>
  );
}

export default CourseList;