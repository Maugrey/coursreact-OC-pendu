import React from 'react'
import './Key.css'
import PropTypes from 'prop-types'

const Key = ({letter, status, onClick}) => <div className={`letter ${status}`} onClick={() => onClick()}>{letter}</div>

Key.propTypes = {
    letter: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
        'untry',
        'correct',
        'error',
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}

Key.defaultProps = {
    status: 'untry',
}

export default Key