import React, {useEffect, useState} from 'react';
import User from "./User";
import { IUser } from '@/models/users.interface';
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable no-trailing-spaces */
const UsersForTest = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setUsers(json)
                    setIsLoading(false)
                }, 1000)
            })
    }, [])

    const onDelete = (id: number) => {
        setUsers(users.filter(user => user?.id !== id))
    }

    return (
        <div>
            {isLoading && <h1 id="users-loading">Идет загрузка...</h1>}
            {users.length && (
                <div id="users-list">
                    {users.map((user, index) => (
                        <div key={index}>
                            <User onDelete={onDelete} user={user} />
                        </div>    
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersForTest;