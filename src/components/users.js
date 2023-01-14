// How to show guest and admin

import {Outlet} from 'react-router-dom'



const Users = ()=>{
	// Outlet show nested route as admins and guests
	return(
       <>
         <h1>Users</h1>
           <Outlet/>   
           </>
		)
}

export default Users