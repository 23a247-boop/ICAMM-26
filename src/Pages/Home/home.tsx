import './home.css';

import Committee from '../Comitte/comittee';
import Domain from '../Domin/domain';
import Speaker from '../Speaker/speakers';
import Accord from '../Accordion/accordion';
import Dates from '../dates/dates';
import Details from '../details/details';
import Registration from '../registration/registration';
import Payment from '../payment/payment';
import Hero from '../../Components/Hero/hero';
import About from '../About/about';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <div id="about">
                <About />
            </div>
            <div id="committee" className='cmtee'>
                <Committee />
            </div>
            <div id="speakers">
                <Speaker />
            </div>
            <div id="accord" className='.accordi'>
                <Accord />
            </div>
            <div id="domain">
                <Domain />
            </div>
            <div id="dates">
                <Dates />
            </div>
            <div id="details">
                <Details />
            </div>
            <div id="registration">
                <Registration />
            </div>
            <div id="payment">
                <Payment />
            </div>
        </div>
    );
};

export default Home;