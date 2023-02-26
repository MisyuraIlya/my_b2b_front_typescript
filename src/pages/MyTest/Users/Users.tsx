/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

export interface IUsers {
    id: number;
    name: string;
}

const Users = () => {
    const [users, setUsers] = useState<IUsers[]>([]);

    const loadUsers = async () => {
        const resp = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(resp.data);
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div data-testid="users-page">
            <h1>hello world</h1>
            {users.map(user => <Link
                to={`/users/${user.id}`}
                key={user.id}
                data-testid="user-item"
            >
                {user.name}
            </Link>)}
        </div>
    );
};

export default Users;