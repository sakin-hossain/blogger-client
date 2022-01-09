import { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useUser = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [activeUser, setActiveUser] = useState({});

    useEffect(()=>{
        fetch('https://serene-garden-66797.herokuapp.com/users')
        .then(res=> res.json())
        .then(data => setUsers(data.result))
    }, [user]);

    useEffect(()=>{
        fetch(`https://serene-garden-66797.herokuapp.com/users/${user.email}`)
        .then(res=> res.json())
        .then(data => setActiveUser(data))
    }, [user.email]);

    return{ users, activeUser };
};

export default useUser;