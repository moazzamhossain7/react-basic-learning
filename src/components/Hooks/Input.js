import { forwardRef } from 'react';

function Input({ type, placeholder }, inputRef) {
    return (
        <div>
            <input ref={inputRef} type={type} placeholder={placeholder} />
        </div>
    );
}

const forwardRefInput = forwardRef(Input);

export default forwardRefInput;
