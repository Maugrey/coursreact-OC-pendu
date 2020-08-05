import React from 'react'
import Key from './Key'
import './Keyboard.css'
import PropTypes from 'prop-types'

const Keyboard = ({letters, triedLetters, goodLetters, onClick}) => (
    <div className='keyboard'>
    {
        letters.split('').map(
            l => <Key
                    key={l}
                    letter={l}
                    onClick={() => onClick(l)}
                    status={getLetterStatus(l, triedLetters, goodLetters)}
                />
        )
    }
    </div>
)

function getLetterStatus(letter, triedLetters, goodLetters) {
    return goodLetters.indexOf(letter) >= 0
                ? 'correct'
                : triedLetters.indexOf(letter) >= 0 ? 'error' : 'untry'
}

Keyboard.propTypes = {
    letters: PropTypes.string.isRequired,
    triedLetters: PropTypes.string,
    goodLetters: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

Keyboard.defaultProps = {
    triedLetters: '',
    goodLetters: '',
}

export default Keyboard

