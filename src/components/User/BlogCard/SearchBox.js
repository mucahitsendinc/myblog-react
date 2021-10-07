import {SearchContainer,SearchInput,SearchButton} from '../../../Styles/User/Search'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {useState} from 'react'

const SearchBox=()=> {

  const [search,setSearch]=useState()

  return (

    <SearchContainer>

      <form action="" method="POST">
        
        <SearchInput>

          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Ara..."/>

        </SearchInput>

        <SearchButton>
          
          <button>
      
            <FontAwesomeIcon  icon={faSearch} />
      
          </button>

        </SearchButton>
        
      </form> 
    
    </SearchContainer>

  ) 

}

export default SearchBox