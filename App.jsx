import { useEffect } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { init } from './src/utils/database';

export default function App() {
    useEffect(() => { 
        init();
    },[]);

    return <AppNavigation />
}

