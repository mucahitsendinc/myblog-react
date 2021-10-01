import { MenuItem } from '../../Styles/User/Header'

import {Link,useLocation} from 'react-router-dom'

const ListItems=(props)=>{

  const Location=useLocation()

  return(

    <>
    
      <MenuItem active={Location.pathname=="/" ? true : false }>

        <Link to="/">Ana Sayfa</Link>

      </MenuItem>

      <MenuItem active={ Location.pathname.indexOf('/blogum')!=-1 ? true : false }>

        <Link to="/blogum">Blogum</Link>

      </MenuItem>

      <MenuItem active={Location.pathname.indexOf("/hakkimda")!=-1 ? true : false }>

        <Link to="/hakkimda">Hakkımda</Link>

      </MenuItem>

      <MenuItem active={Location.pathname.indexOf("/iletisim")!=-1 ? true : false }>

        <Link to="/iletisim">İletişim</Link>

      </MenuItem>
      
    </>

  )

}

export default ListItems