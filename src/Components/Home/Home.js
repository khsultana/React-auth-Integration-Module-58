import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <h2>THis is Home {user.email}</h2>
        </div>
    );
};

export default Home;