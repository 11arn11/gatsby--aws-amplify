/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreatePostLikeInput = {
  id?: string | null,
  userId: string,
  postId: string,
};

export type UpdatePostLikeInput = {
  id: string,
  userId?: string | null,
  postId?: string | null,
};

export type DeletePostLikeInput = {
  id?: string | null,
};

export type ModelPostLikeFilterInput = {
  id?: ModelIDFilterInput | null,
  userId?: ModelStringFilterInput | null,
  postId?: ModelStringFilterInput | null,
  and?: Array< ModelPostLikeFilterInput | null > | null,
  or?: Array< ModelPostLikeFilterInput | null > | null,
  not?: ModelPostLikeFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreatePostLikeMutationVariables = {
  input: CreatePostLikeInput,
};

export type CreatePostLikeMutation = {
  createPostLike:  {
    __typename: "PostLike",
    id: string,
    userId: string,
    postId: string,
  } | null,
};

export type UpdatePostLikeMutationVariables = {
  input: UpdatePostLikeInput,
};

export type UpdatePostLikeMutation = {
  updatePostLike:  {
    __typename: "PostLike",
    id: string,
    userId: string,
    postId: string,
  } | null,
};

export type DeletePostLikeMutationVariables = {
  input: DeletePostLikeInput,
};

export type DeletePostLikeMutation = {
  deletePostLike:  {
    __typename: "PostLike",
    id: string,
    userId: string,
    postId: string,
  } | null,
};

export type GetPostLikeQueryVariables = {
  id: string,
};

export type GetPostLikeQuery = {
  getPostLike:  {
    __typename: "PostLike",
    id: string,
    userId: string,
    postId: string,
  } | null,
};

export type ListPostLikesQueryVariables = {
  filter?: ModelPostLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostLikesQuery = {
  listPostLikes:  {
    __typename: "ModelPostLikeConnection",
    items:  Array< {
      __typename: "PostLike",
      id: string,
      userId: string,
      postId: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePostLikeSubscription = {
  onCreatePostLike:  {
    __typename: "PostLike",
    id: string,
    userId: string,
    postId: string,
  } | null,
};

export type OnUpdatePostLikeSubscription = {
  onUpdatePostLike:  {
    __typename: "PostLike",
    id: string,
    userId: string,
    postId: string,
  } | null,
};

export type OnDeletePostLikeSubscription = {
  onDeletePostLike:  {
    __typename: "PostLike",
    id: string,
    userId: string,
    postId: string,
  } | null,
};
