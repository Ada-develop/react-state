import { useState } from 'react';
import './CircleSquare.scss';

/*

    1. Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

    2. Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25
*/



const CircleSquare = () =>{

// Toggle Square and Circle

const [sqaureOrCircle, setSquareOrCircle] = useState(false);

const toggleSqCircle = () => setSquareOrCircle( sq => !sq);


// Random number 5 - 25


const randomIntFromInterval = (min, max)  => { // min and max included 
    
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const [ randomDigit, setRandomDigit]  = useState(5);


const setRnd = () =>{
    const rnd = randomIntFromInterval(5,25);
    setRandomDigit(rnd);
}


    return(
        <>
        
        <h1>Square / Circle change and Random number</h1>

        <div className={sqaureOrCircle ? 'Sq' : 'Circle'}><div className='rndDigit'><h5>{randomDigit}</h5></div></div>

        <button onClick={toggleSqCircle}>Change</button>

        <button onClick={setRnd}>Rabdom</button>

        </>
    );
}

export default CircleSquare;