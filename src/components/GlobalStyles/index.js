import './GlobalStyles.scss';
import PropTypes from 'prop-types'
import React from 'react';

function GlobalStyles({ children }) {
    return React.Children.only(children);
}// luôn luôn chỉ muốn component chỉ wrap duy nhất 1 Element làm children

GlobalStyles.prototype = {
    children: PropTypes.node.isRequired
}

export default GlobalStyles;
