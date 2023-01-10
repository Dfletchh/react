import { useState, useEffect } from 'react';

export default function Definition() {
    const [word, setWord] = useState();

    useEffect(() => {
        console.log('page loaded')
    });

    return <p>Here we go!</p>;
}