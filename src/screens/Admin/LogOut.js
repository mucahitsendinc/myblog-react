import React from 'react'

import { MainContext,useContext } from '../../Context'

import {useHistory} from 'react-router-dom'

const LogOut=()=>{

  const {setLogin} = useContext(MainContext)

  const History = useHistory()

  localStorage.removeItem('login')
  
  localStorage.removeItem('token')

  setLogin(false)

  History.push('/')

  return (
    <React.Fragment/>
  )

}

export default LogOut 