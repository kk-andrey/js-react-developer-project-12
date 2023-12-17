import {useEffect} from "react";

export const App = () => {

    useEffect(() => {
        fetch('/api/v1/data')
            .then(res => res.json())
            .then(data => console.log('data'))
            .catch(e => console.log(e))
    }, []);

    return <>Welcome to study project</>
}
