'use client'

import { SearchIcon } from 'lucide-react'
import { FC } from 'react'
import { Input } from './input'

interface Props {
  searchText: string
  searchAction: (value: string) => void
}

const SearchBar: FC<Props> = ({ searchAction, searchText }) => {
  function handleSearchAction() {
    // do previous actions such as debouncing

    // call the sent search action
    searchAction(searchText)
  }

  return (
    <div className="searchMasterContainer flex justify-center items-center border-2 rounded-2xl px-4">
      <SearchIcon />
      <Input
        value={searchText}
        className="border-0 focus-visible:outline-0"
        onChange={handleSearchAction}
      />
    </div>
  )
}

export default SearchBar
