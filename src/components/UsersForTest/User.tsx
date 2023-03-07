import React, {FC} from 'react';
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { IUser } from '@/models/users.interface';
export interface TestUser {
    user: IUser
    onDelete: (id: number) => void
}
const User: FC<TestUser> = ({user, onDelete}) => {
    return (
        <div>
            {user.name}
            <button id="user-delete" onClick={() => onDelete(user.id)}>delete</button>
        </div>
    );
};

export default User;