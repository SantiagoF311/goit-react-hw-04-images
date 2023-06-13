import React from "react";
import { ButtonLoadMoreStyled } from "./styledComponents/Button";
import PropTypes from 'prop-types';

const ButtonLoadMore = ({ onLoadPics }) => {
  return (
    <ButtonLoadMoreStyled onClick={onLoadPics}>Load more</ButtonLoadMoreStyled>
  );  
}

ButtonLoadMore.propTypes = {
  onLoadPics: PropTypes.func.isRequired
};

export default ButtonLoadMore;