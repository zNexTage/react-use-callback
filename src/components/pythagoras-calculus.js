import { useCallback, useEffect, useState } from "react";

const PythagorasCalculus = () => {

    const [adjacent, setAdjacent] = useState(0);
    const [opposite, setOpposite] = useState(0);
    const [hypotenuse, setHypotenuse] = useState(0);

    const handleChange = (setState, value) => {
        setState(value);
    }

    /*
        When the component is re-render, the calculate fn will be created again;     
        it's a simple function, but with larger functions, it can become very costly.

        useCallback:
            - stores the reference of a function;            
            - often used in complex functions to prevent those functions from being recreated every time the component renders.
    */

    /**
     *  
     * @param {*} adjacent 
     * @param {*} opposite 
     * @returns 
     */
    const calculate = useCallback((adjacent, opposite) => {
        const squareAdjacent = Math.pow(adjacent, 2);
        const squareOpposite = Math.pow(opposite, 2);

        return Math.sqrt(squareAdjacent + squareOpposite);
    }, []); // We can add dependencies to useCallback; When this depedencies change, the useCallback will be called again.

    useEffect(() => {
        if (adjacent > 0 && opposite > 0) {
            setHypotenuse(
                calculate(adjacent, opposite)
            );
        }

    }, [adjacent, opposite]);

    return (
        <div>
            <div>
                <label htmlFor="txtAdjacent">
                    Cateto adjacente:
                </label>
                <input
                    placeholder="Insira o valor do cateto adjacente"
                    value={adjacent}
                    onChange={(event) => handleChange(setAdjacent, parseInt(event.target.value))}
                    type="number"
                    id="txtAdjacent" />
            </div>

            <div>
                <label htmlFor="txtOpposite">
                    Cateto oposto:
                </label>
                <input
                    placeholder="Insira o valor do cateto oposto"
                    value={opposite}
                    onChange={(event) => handleChange(setOpposite, parseInt(event.target.value))}
                    type="number"
                    id="txtOpposite"
                />
            </div>

            <p>
                O valor da hipotenusa é: <strong>{hypotenuse}</strong>
            </p>
        </div>
    )
}

export default PythagorasCalculus;