import { useParams } from 'react-router-dom';

export default function Post() {
    const params = useParams();

    return (
        <main>
            <h2>Welcome to the post page! -- {params.category} </h2>
            <p>You can do this, I believe in you.</p>
        </main>
    );
}
