/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, {useState} from 'react';

import {postAPI} from "../../../services/PostService";

import { IPost } from '@/models/post.interface';

import PostItem from "./PostItem";

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        void deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        void updatePost(post)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {(error != null) && <h1>Произошла ошибка при загрузке</h1>}
                {posts?.map(post =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;