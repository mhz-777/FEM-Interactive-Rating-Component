import './confirmed.css'
import confirmedImage from '../assets/images/illustration-thank-you.svg'

const Confirmed = (props) => {
    return (
      <div className="confirmed-container">
            <img src={confirmedImage} alt="confirmed thank you" className='confirmed-image'/>
            <p className="dynamic-results">You selected {props.selection} out of 5</p>
            <h1 className="thanks-heading">Thank you!</h1>
            <p className="thanks-message">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>  
    );
}

export default Confirmed;