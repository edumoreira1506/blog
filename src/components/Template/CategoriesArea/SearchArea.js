import React from 'react'
import './SearchArea.scss'

const SearchArea = ({
  onSubmit,
  value,
  onChange
}) =>
  <form className="SearchArea" onSubmit={onSubmit}>
    <input value={value} onChange={onChange} required type="text" placeholder="Buscar..." />
  </form>

export default SearchArea
