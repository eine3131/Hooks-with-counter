import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(null);

function handleSetCount(e) {
    setCount(Number(e.target.value));
}

    return (
        <div>
            <p>
                Le compteur est à : {count}
            </p>
            <input value={count} onChange={handleSetCount} />    
            <button 
                onClick={() => setCount(count + 1)}> +1
            </button>    
            <button 
                onclick={() => setCount(count - 1)}> -1
            </button>
        </div>
    );
}

export default Counter;