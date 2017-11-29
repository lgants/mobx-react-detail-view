// src/components/Profile.js
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  label: PropTypes.string,
};

const Profile = ({ onClick, label, selected }) => {
  // make fontweight bold if user selected
  const fontWeight = selected ? 'bold' : 'normal';
  return (
      <li onClick={ onClick } style={{fontWeight: fontWeight}}>
        { label }
      </li>
  );
};

Profile.propTypes = propTypes;
export default Profile;
