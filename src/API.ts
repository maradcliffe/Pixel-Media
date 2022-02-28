/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content?: string | null,
  files?: Array< S3ObjectInput > | null,
  postImageId?: string | null,
};

export type S3ObjectInput = {
  key: string,
  identityId?: string | null,
  level?: string | null,
  type?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  files?: Array< S3ObjectInput > | null,
  postImageId?: string | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
  postId: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
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
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateMediaInput = {
  id?: string | null,
  name?: string | null,
  attachment: S3ObjectInput,
};

export type ModelMediaConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelMediaConditionInput | null > | null,
  or?: Array< ModelMediaConditionInput | null > | null,
  not?: ModelMediaConditionInput | null,
};

export type UpdateMediaInput = {
  id: string,
  name?: string | null,
  attachment?: S3ObjectInput | null,
};

export type DeleteMediaInput = {
  id?: string | null,
};

export type ModelMediaFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMediaFilterInput | null > | null,
  or?: Array< ModelMediaFilterInput | null > | null,
  not?: ModelMediaFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string | null,
    image:  {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null,
    files:  Array< {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    } > | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        postId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string | null,
    image:  {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null,
    files:  Array< {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    } > | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        postId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string | null,
    image:  {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null,
    files:  Array< {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    } > | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        postId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    postId: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    postId: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    postId: string,
  } | null,
};

export type CreateMediaMutationVariables = {
  input: CreateMediaInput,
  condition?: ModelMediaConditionInput | null,
};


export type CreateMediaMutation = {
  createMedia:  {
    __typename: "Media",
    id: string,
    name: string | null,
    attachment:  {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    },
    owner: string | null,
  } | null,
};

export type UpdateMediaMutationVariables = {
  input: UpdateMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type UpdateMediaMutation = {
  updateMedia:  {
    __typename: "Media",
    id: string,
    name: string | null,
    attachment:  {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    },
    owner: string | null,
  } | null,
};

export type DeleteMediaMutationVariables = {
  input: DeleteMediaInput,
  condition?: ModelMediaConditionInput | null,
};

export type DeleteMediaMutation = {
  deleteMedia:  {
    __typename: "Media",
    id: string,
    name: string | null,
    attachment:  {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    },
    owner: string | null,
  } | null,
};

export type GetMediaQueryVariables = {
  id: string,
};

export type GetMediaQuery = {
  getMedia:  {
    __typename: "Media",
    id: string,
    name: string | null,
    attachment:  {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    },
    owner: string | null,
  } | null,
};

export type ListMediasQueryVariables = {
  filter?: ModelMediaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMediasQuery = {
  listMedias:  {
    __typename: "ModelMediaConnection",
    items:  Array< {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string | null,
    image:  {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null,
    files:  Array< {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    } > | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        postId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content: string | null,
      image:  {
        __typename: "Media",
        id: string,
        name: string | null,
        owner: string | null,
      } | null,
      files:  Array< {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      } > | null,
      owner: string | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    postId: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string | null,
      postId: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type CommentsByPostQueryVariables = {
  postId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByPostQuery = {
  commentsByPost:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string | null,
      postId: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string | null,
    image:  {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null,
    files:  Array< {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    } > | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        postId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
  editors?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string | null,
    image:  {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null,
    files:  Array< {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    } > | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        postId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string | null,
    image:  {
      __typename: "Media",
      id: string,
      name: string | null,
      attachment:  {
        __typename: "S3Object",
        key: string,
        identityId: string | null,
        level: string | null,
        type: string | null,
      },
      owner: string | null,
    } | null,
    files:  Array< {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    } > | null,
    owner: string | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
        postId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    postId: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    postId: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    postId: string,
  } | null,
};

export type OnCreateMediaSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateMediaSubscription = {
  onCreateMedia:  {
    __typename: "Media",
    id: string,
    name: string | null,
    attachment:  {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    },
    owner: string | null,
  } | null,
};

export type OnUpdateMediaSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateMediaSubscription = {
  onUpdateMedia:  {
    __typename: "Media",
    id: string,
    name: string | null,
    attachment:  {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    },
    owner: string | null,
  } | null,
};

export type OnDeleteMediaSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteMediaSubscription = {
  onDeleteMedia:  {
    __typename: "Media",
    id: string,
    name: string | null,
    attachment:  {
      __typename: "S3Object",
      key: string,
      identityId: string | null,
      level: string | null,
      type: string | null,
    },
    owner: string | null,
  } | null,
};
