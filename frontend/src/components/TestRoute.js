import React from 'react';
import { useHistory } from 'react-router-dom';

const TestRoute = () => {
    let history = useHistory();
    return (
        <div>
            This is test component for the route {history.location.pathname}
        </div>
    );
};

export default TestRoute;
