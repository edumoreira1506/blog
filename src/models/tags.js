import * as Post from './posts'

export const getAll = () =>
  Post.getAll().reduce((tags, post) => {
    const tagsPosts = post.tags.reduce((tagsPost, tagPost) =>
      tags.includes(tagPost) ? tagsPost : [...tagsPost, tagPost]
    , []).flat()
    return [...tags, ...tagsPosts]
  }, [])

export const getTag = ({ params }) => params.tag
