import {useHistory} from 'react-router-dom'

import {GoBackButton} from '../../../Styles/User/BlogContent'

const GoBack=()=>{
  
  const history=useHistory()

  return (

    <GoBackButton onClick={()=>history.goBack()}>

      Geri Dön

    </GoBackButton>

  )

}

export default GoBack 