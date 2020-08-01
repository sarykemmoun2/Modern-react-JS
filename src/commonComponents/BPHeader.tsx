import React from 'react';
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../routes/Router';

const BPHeader: React.FC = () => {
    const location = useLocation();

    console.log("location", location);
    
    return location.pathname !== LOGIN_ROUTE && <button>התנתק</button>;
}
export default BPHeader;