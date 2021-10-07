import React, {useState} from 'react'

import {BlogItemList,MainHr,PageButton,PageButtonList} from '../../../Styles/User/BlogCard'

import BlogItem from './BlogItem'

import {AboutLoading} from '../../../Styles/User/About'

import ActivityIndicator from 'react-activity-indicator'

const BlogItems=(props)=> {
  
  const data=props.itemData

  const [pageNumberList,setPageNumberList]=useState(undefined)

  const [currentPage,setCurrentPage]=useState(0)

  let pageNumbers=[]
  
  const dataPerPage=20

  for (let index = 0; index < Math.ceil(data.length/20); index++) {

    pageNumbers.push({number:index,active:index==0? true : false})

  }

  const getBlogData=()=>{

    return(
 
      data.slice(currentPage*dataPerPage,currentPage*dataPerPage+dataPerPage).map(function(element){
        return(
          <BlogItem key={element.unid} itemData={element} proces={props.proces!=undefined ? props.proces : undefined} />

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

        <PageButton disabled={currentPage+1== Math.ceil(data.length/dataPerPage) ? true : false} onClick={()=>pageUp()} > {'>'} </PageButton>
      
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
    
    <React.Fragment>
     

        <MainHr>Öne Çıkmamış Gönderiler</MainHr>

        <BlogItemList>

        {

          data!=null ? 
          
          <React.Fragment>

            {
              
              getBlogData()
            
            }
            {
            
              data.length<20 ? <React.Fragment/> : pageNumberList!=undefined  ? getPageNumbers(pageNumberList) : getPageNumbers(pageNumbers)
            
            }
            { 
              data.length==0 ? 
              <div style={{padding:50,fontSize:23,textAlign:'center'}}>
                Öne çıkanlara eklenecek gönderi bulunamadı, sıralama yükseltmek için önerilenleri yönet sayfasını kullanın.
              </div>
              :
              <React.Fragment/>
            }

          </React.Fragment>
            
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

    </React.Fragment>

  )

}

export default BlogItems