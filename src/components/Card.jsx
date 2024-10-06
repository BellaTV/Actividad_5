import ilustrationHero from '../assets/images/illustration-hero.svg'

import Button from './Button';
import PlanComponent from './PlanComponent';

import './card.scss'

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
            <PlanComponent />
            <Button classname='btnpay' text="Proceed to Payment" />
            <Button classname='cancel' text='Cancel Order' />
        </article>
    );
}

export default Card;
