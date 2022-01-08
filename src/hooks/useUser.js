import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useUser = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState({});

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=> res.json())
        .then(data => setUsers(data.result))
    }, [user]);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=> res.json())
        .then(data => setActiveUser(data))
    }, [user.email]);

    return{ users, activeUser };
};

export default useUser;