import {  BlogItemContainer } from '../../../Styles/User/BlogCard'

import Title from './Title'

import Description from './Description'

import GoBlog from './GoBlog'

import TagList from './TagList'

import Resource from './Resource'

import Date from './Date'

const BlogItem=(props)=> {

  const {image,title,date,url,tags,description} = props.itemData

  
  const link='blogum/'+url

  const text="Devamını oku"
  return (

    <BlogItemContainer >

        <Resource image={image} link={link} />

        <Title title={title} link={link} />

        <TagList tags={tags} name={url} />

        <Description desc={description} />
 
        <GoBlog text={text} link={link} />

        <Date date={date} /> 

    </BlogItemContainer>

  )

}

export default BlogItem