import {Degree,Title} from '../../Styles/User/About'

const UserTitle=(props)=> {

  const {title,degree}=props

  return (

    <>

    <Title>

      {

        title

      }

    </Title>

    <Degree>

      {

        degree

      }

    </Degree>

    </>

  )

}

export {UserTitle}