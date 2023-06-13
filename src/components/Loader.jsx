import React from "react";
import { Vortex } from "react-loader-spinner";
import PropTypes from 'prop-types';

const Load = ({ onLoader, loadingMore }) => {
  return (
    <div>
      {onLoader && onLoader(
        loadingMore ? ( 
          <Vortex
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : null
      )}
    </div>
  );
}

Load.propTypes = {
  onLoader: PropTypes.func.isRequired,
  loadingMore: PropTypes.bool.isRequired
};

export default Load;