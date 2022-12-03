import React from 'react';
import { Link } from 'react-router-dom';

const Navebar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor portal</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 gap-3">
            <li><Link to='/' className="btn btn-outline rounded-lg">Home</Link></li>
            <li><Link to='/' className='rounded-lg'>About</Link></li>
            <li><Link to='/appoipnment' className="btn btn-outline btn-primary rounded-lg">Appoitment</Link></li>
            <li><Link to='/' className='rounded-lg'>Reviwe</Link></li>
            <li><Link to='/' className='rounded-lg'>Contuct us</Link></li>
            <li><Link to='/login' className="btn btn-outline btn-accent rounded-lg">Login</Link></li>
          </ul>
        </div>
      </div>
    );
};

export default Navebar;