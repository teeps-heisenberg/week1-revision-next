import React from 'react'
import Link from 'next/link';

export const getStaticProps = async () => {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    
    return {
        props:{
            users:data,
        }
    }
}

const Users = ({users}) => {

  return (
    <div>
        <h1>All Users</h1>
        {users.map(user => {
            return (
                <div key={user.id}>
                    <Link href ={`users/${user.id}`}>
                    <h2>{user.id}  {user.name}</h2>
                    <h4>{user.email}</h4>
                    </Link>
                </div>
            );
        })}
    </div>
  )
}

export default Users