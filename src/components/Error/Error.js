import {ErrorContainer,ErrorCode,ErrorMessage,ErrorMessageContainer,CopyRight} from '../Styles/Error'

import {useHistory} from 'react-router-dom'

const Error=(props)=>{

  const history=useHistory()
  
  setTimeout(() => {
  
    history.push('/')
  
  }, 4000);
  
  return (

    <ErrorContainer>

      <ErrorMessageContainer>

        <ErrorCode>{props.code}</ErrorCode>

        <ErrorMessage>

          {props.message}

        </ErrorMessage>

        <CopyRight> 2021 &copy; Mücahit Sendinç</CopyRight>

      </ErrorMessageContainer>

    </ErrorContainer>
  )

}

export default Error