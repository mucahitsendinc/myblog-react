import {SearchContainer,SearchInput,SearchButton} from '../../../Styles/User/Search'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {useState,useEffect} from 'react'

import { useHistory } from 'react-router-dom';


const SearchBox=(props)=> {

  const [search,setSearch]=useState(props.searching!=undefined ? props.searching : '')

  const {data,setdata} = props

  const history=useHistory()
  
  const typing=search.replace(/\s+/,'').length>0

  useEffect(() => {
    if(props.type==undefined){
      if(typing){
        let filterResult=data.filter(item=>item.title.toLowerCase().includes(search.toLowerCase()))
        if(filterResult.length<1){
          filterResult=data.filter(item=>item.description.toLowerCase().includes(search.toLowerCase()))
          if(filterResult.length<1){
            filterResult=data.filter(item=>item.date.toLowerCase().includes(search.toLowerCase()))
          } 
        }
        setdata(filterResult)
      }else{
        setdata(data)
      }
    }
  }, [search])

  const searching=(e)=>{
    e.preventDefault()
    if(typing){
      history.push('/blogum/ara/'+search)
    }
  }

  return (

    <SearchContainer>

      <form action="" method="POST" onSubmit={searching}>
        
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