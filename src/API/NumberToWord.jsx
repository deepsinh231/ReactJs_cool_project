import React, { useState } from 'react';
import './NumberToWord.css'
const NumberToWord = () => {
    const [state, setstate] = useState("");
    const [number, word] = useState("");
    let oneToTwenty = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ',
        'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const doConvert = (e) => {
        const numberInput = e.target.value;
        if (numberInput.toString().length > 7) {
            setstate('overlimit');
            word("")
        } else {
            setstate('');
            let num = ('000000' + numberInput).slice(-7).match(/^(\d{1})(\d{1})(\d{2})(\d{1})(\d{2})$/);
            console.log(num);
            if (!num) return;
            let outputText = num[1] != 0 ? (oneToTwenty[Number(num[1])] || `${tenth[num[1][0]]} ${oneToTwenty[num[1][1]]}`) + ' million ' : '';

            outputText += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tenth[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + 'hundred ' : '';
            outputText += num[3] != 0 ? (oneToTwenty[Number(num[3])] || `${tenth[num[3][0]]} ${oneToTwenty[num[3][1]]}`) + ' thousand ' : '';
            outputText += num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tenth[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + 'hundred ' : '';
            outputText += num[5] != 0 ? (oneToTwenty[Number(num[5])] || `${tenth[num[5][0]]} ${oneToTwenty[num[5][1]]} `) : '';
            word(outputText)
        }


    }
    return (
        <div className='w100'>
            <p className='NumberToWord-p'>Number To Word</p>
            <input className='NumberToWord-input' autofocus type="number" onChange={doConvert} />
            <div className='NumberToWord-ovelimit'>{state}</div>
            <div className='NumberToWord-number'>{number}</div>
        </div>
    );
}

export default NumberToWord;
