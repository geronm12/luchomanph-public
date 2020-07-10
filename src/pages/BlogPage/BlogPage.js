import React from 'react';
import BasicLayout from "../../layout/basiclayout";
import PostsContainer from "../../components/postsContainer"

export default function BlogPage() {
    return (
        <BasicLayout>
          <PostsContainer></PostsContainer>
        </BasicLayout>
    )
}
