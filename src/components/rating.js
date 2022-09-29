import './rating.css';
import starIcon from '../assets/images/icon-star.svg';
import Confirmed from './confirmed';
import { useState } from 'react';

const Rating = () => {

    const [value, setValue] = useState();
    const [confirmed, setConfirm] = useState();

    function handleSubmit () {
        if(value != null) {
            setConfirm(true);
            console.log('yes!');
        }else{
            console.log('no');
        }
    }

    return (
        <div className="content-container">
            <img src={starIcon} alt="star icon" className='star-sprite' />
            <h1 className="main-heading">How did we do?</h1>
            <p className="calltoaction">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
            <div className="buttons-container">
                <button className="value-btn" onClick={() => setValue(1)}>1</button>
                <button className="value-btn" onClick={() => setValue(2)}>2</button>
                <button className="value-btn" onClick={() => setValue(3)}>3</button>
                <button className="value-btn" onClick={() => setValue(4)}>4</button>
                <button className="value-btn" onClick={() => setValue(5)}>5</button>
            </div>
            <button className="submit" onClick={handleSubmit}>Submit</button>
            {confirmed === true && <Confirmed selection={value}/>}
        </div>
    );
}

export default Rating;