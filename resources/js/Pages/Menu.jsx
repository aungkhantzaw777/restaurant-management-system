import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Menu({ auth, laravelVersion, phpVersion }) {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            <Head title="Menu Management system" />
            <div>
              hello menu
                <div>
                    {count}
                </div>
              <button onClick={addCount}>count 1</button>
            </div>
        </>
    );
}
