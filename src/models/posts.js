import posts from '../posts.json'

export const getAll = () =>
  getYears(posts).map(year =>
    Object.keys(posts[year]).map(month =>
      Object.keys(posts[year][month]).map(day => ({
          ...posts[year][month][day],
          date: `${day}/${month}/${year}`
        })
      ).flat()
    ).flat()
  ).flat()

export const search = keyWord =>
  getAll().filter(post => post.description.includes(keyWord) || post.title.includes(keyWord))

export const getContent = content => `${content.substring(0, 300)}...`

const getYears = posts => Object.keys(posts)