/**
 * 작성자: 김은영
 * 목적: 게시글 정보를 가져와서 펼치기
 * 날짜: 2023-03-21
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/getPostsSlice";
import Card from "../Card";

function Posts() {

    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts)

    useEffect(()=> {
        dispatch(__getPosts())
    }, ['뭘 넣어야하지']);

    return (
        <section>
            {posts.map((post)=> {
                <Card key={post.id} />
            })}
            
        </section>
    )
}

export default Posts;