import Header from './Header'
import {Outlet} from 'react-router-dom'
function RootLayout() {
  return (
    <div>
       <Header/>
       <div className='min-h-screen mx-20 bg-amber-100 flex items-center justify-center'>
       <Outlet/>
    </div>
    </div>
  )
}

export default RootLayout