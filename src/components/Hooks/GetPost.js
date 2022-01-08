import { useEffect, useReducer } from 'react';

const initialState = {
    post: null,
    error: null,
    loading: true,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return { post: action.result, error: null, loading: false };
        case 'ERROR':
            return { post: null, error: 'There was something went wrong!', loading: false };
        default:
            return state;
    }
};

export default function GetPost() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setTimeout(() => dispatch({ type: 'SUCCESS', result: json }), 1000);
            })
            .catch(() => {
                dispatch({ type: 'ERROR' });
            });
    }, []);

    return (
        <div>
            <h1>{state.loading ? 'Loading...' : ''}</h1>
            <h1>{state.post ? state.post.title : ''}</h1>
            <h4>{state.error || null}</h4>
        </div>
    );
}
