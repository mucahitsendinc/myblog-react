import {useState} from 'react'

import {BlogItemList,MainHr,PageButton,PageButtonList} from '../../../Styles/User/BlogCard'

import BlogItem from './BlogItem'

import SearchBox from './SearchBox'

import {AboutLoading} from '../../../Styles/User/About'

import ActivityIndicator from 'react-activity-indicator'

import { MainContext,useContext } from '../../../Context'

const BlogItems=(props)=> {
  
  const {data}=useContext(MainContext)

  const [blogdata,setBlogData]=useState(data)
  
  const [pageNumberList,setPageNumberList]=useState(undefined)

  const [currentPage,setCurrentPage]=useState(0)

  let pageNumbers=[]
  
  const dataPerPage=20

  for (let index = 0; index < Math.ceil(blogdata.length/20); index++) {

    pageNumbers.push({number:index,active:index==0? true : false})

  }

  const getBlogData=()=>{

    return(
 
      blogdata.slice(currentPage*dataPerPage,currentPage*dataPerPage+dataPerPage).map(function(element){
        return(
          <BlogItem key={element.unid} itemData={element} />

        )

      })

    )

  }
  
  const getPageNumbers=(pageNumberItem)=>{

    return(

      <PageButtonList>
      
        <PageButton disabled={currentPage==0 ? true : false} onClick={()=>pageDown()} > {'<'} </PageButton>
        
        {
        
          pageNumberItem.map(function(element){
          
            return(
              
              <>

                <PageButton key={'mgoUs'+element.number} onClick={()=>pageChange(element)} active={element.active}>{element.number+1}</PageButton>
              
              </>

            )

          })
        
        }

        <PageButton disabled={currentPage+1== Math.ceil(blogdata.length/dataPerPage) ? true : false} onClick={()=>pageUp()} > {'>'} </PageButton>
      
      </PageButtonList>
    
    )
  
  }
  
  const pageDown=async()=>{

    let newNumbers=await []
    
    pageNumbers.forEach(element => {
    
      newNumbers.push({number:element.number,active:currentPage-1==element.number ? true : false})
    
    });
    
    pageNumbers= await newNumbers
    
    const page=await setCurrentPage(currentPage-1)
    
    const setter=await setPageNumberList(newNumbers)
  
  }
  
  const pageUp=async()=>{
  
    let newNumbers=await []
  
    pageNumbers.forEach(element => {
  
      newNumbers.push({number:element.number,active:currentPage+1==element.number ? true : false})
  
    });
  
    pageNumbers= await newNumbers
  
    const page=await setCurrentPage(currentPage+1)
  
    const setter=await setPageNumberList(newNumbers)
  
  }
  
  const pageChange=async(main)=>{
  
    let newNumbers=await []
  
    pageNumbers.forEach(element => {
  
      newNumbers.push({number:element.number,active:main.number==element.number ? true : false})
  
    });
  
    pageNumbers= await newNumbers
  
    const page=await setCurrentPage(main.number)
  
    const setter=await setPageNumberList(newNumbers)

  }

  return (
    
    <>
      <SearchBox data={data} setdata={setBlogData} searching={props.searching} />

        <MainHr> {props.searching!= undefined ? `"${props.searching}" ile ilgili arama sonuçları` : "Mücahit'in Paylaşımları"} </MainHr>

        <BlogItemList>

        {

          blogdata!=null ? 
          
          <>

            {
              
              getBlogData()
            
            }
          
          
            {
            
              blogdata.length<20 ? <></> : pageNumberList!=undefined  ? getPageNumbers(pageNumberList) : getPageNumbers(pageNumbers)
            
            }

          </>
            
            :
          
          <AboutLoading>
        
          <ActivityIndicator 
              number={3}
              diameter={28}
              borderWidth={3}
              duration={60}
              activeColor="#fff"
              borderColor="#ccc"
              borderRadius="100%" 
          />
        
          </AboutLoading>

        }

      </BlogItemList>

    </>

  )

}

export default BlogItems