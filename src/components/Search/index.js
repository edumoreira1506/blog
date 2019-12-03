import React from 'react'
import './Search.scss'

const Search = ({
  onSubmit,
  value,
  onChange
}) =>
  <form className="Search" onSubmit={onSubmit}>
    <input value={value} onChange={onChange} required type="text" placeholder="Buscar..." />
  </form>

export default Search
