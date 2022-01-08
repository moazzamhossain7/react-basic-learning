import { useEffect, useRef } from 'react';
import Input from './Input';

function Form() {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <Input ref={inputRef} type="text" placeholder="Enter username" />
        </div>
    );
}

export default Form;
