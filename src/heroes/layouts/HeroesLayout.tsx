import { lazy } from 'react'
import { Link, Outlet } from 'react-router'


export const HeroesLayout = () => {
  return (
    <div className='bg-red-500'>
        <div>
      <ol className="mt-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/heroes/1">Hero</Link>
        </li>
        <li>
          <Link to="/search">Búsqueda</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ol>
    
    </div>
    <section className='mt-10'>
        <Outlet></Outlet>
    </section>
    </div>
  )
}
