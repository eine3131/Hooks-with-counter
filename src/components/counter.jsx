import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

function handleSetCount(e) {
    setCount(e.target.value)
}

    return (
        <div>
            <p>
                Le compteur est à : 
            </p>
            <input value={count} onChange={handleSetCount} />        
        </div>
    );
}

export default Counter;