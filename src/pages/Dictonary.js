import { useState, useEffect } from 'react';

export default function Dictionary() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');

    useEffect(() => {
        console.log('State Updated ' + first)
    }, [first]);
    useEffect(() => {
        console.log('State Updated2 ' + second)
    }, [second]);

    return (
        <>
            <input type="text" onChange={(e) => {
                setFirst(e.target.value);
            }}
            />
            <h2>Let's get the definition for word {first}</h2>

            <input type="text" onChange={(e) => {
                setSecond(e.target.value);
            }}
            />
            <h2>Let's get the definition for word2 {second}</h2>
        </>
    )
}