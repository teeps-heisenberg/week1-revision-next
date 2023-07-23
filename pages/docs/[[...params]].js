import React from 'react'
import { useRouter } from 'next/router'
const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    if (params.length == 2) {
        return (
            <div>
                <h1>Showing Docs for feature {params[0]} and concept {params[1]}</h1>
            </div>
        );
    }
    else if (params.length == 1) {
        return (
            <div>
                <h1>Showing Docs for feature {params[0]}</h1>
            </div>
        );
    }
    else {
        <div>
            <h1>Showing Docs</h1>
        </div>
    }
}

export default Docs