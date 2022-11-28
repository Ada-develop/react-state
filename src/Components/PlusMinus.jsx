import { useState } from "react";

/*

    3. Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

*/

const PlusMinus = () => {  
    
const [intNumber , setIntNumber] = useState(0);

const plusOne = () => {
    setIntNumber(numberNow => numberNow + 1);
}

const minusThree = () => {
    setIntNumber(numberNow => numberNow - 3);
}
    
    return(
        <>
        <h1>Plus One | Minus Three</h1>
            <h1>{intNumber}</h1>
            <button onClick={plusOne}>Plus One</button>
            <button onClick={minusThree}>Minus Three</button>
        </>
    );
}

export default PlusMinus;