import ilustrationHero from '../assets/images/illustration-hero.svg'
import iconMusic from '../assets/images/icon-music.svg'
import Button from './Button';

import './card.css'

const Card = () => {
    return (
        <article className='card'>
            <figure>
                <img src={ilustrationHero} alt="" />
            </figure> 
            <h1> Order Summary </h1>           
            <p>
                You can now listen to millions of songs, audiobooks, and podcasts on any 
                device anywhere you like!
            </p>
            <div className='plan'>
                <img src={iconMusic} alt="" />
                <span className='annual'>Annual Plan</span>
                <span className='price'>$59.99/year </span>
                <Button classname='change' text='Change'/>
            </div>
            <Button classname='btnpay' text="Proceed to Payment" />

            <Button classname='cancel' text='Cancel Order' />

        </article>
    );
}

export default Card;
