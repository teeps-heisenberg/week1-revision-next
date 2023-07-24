import React from 'react'

export const getStaticPaths = async () => {
    const res= await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    const paths = data.map(element => {
        return {
            params:{
                userId:element.id.toString(),
            },
        }
    });
    return{
        paths:paths,
        fallback:false,
    }
}

export const getStaticProps = async (context) => {
    const {params} = context;
    console.log(params.userId);
    const res= await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json();
    
    return {
        props:{
            user:data,
        }
    }
}


const User = ({user}) => {
  return (
    <div>
        <h1>User Details</h1>
        <h3>User ID: {user.id}</h3>
        <h3>Full Name: {user.name}</h3>
        <h3>Username: {user.username}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>

        <h4>Address Details</h4>
        <p> Street: {user.address.street} </p>
        <p> City: {user.address.city} </p>
        <p> Zipcode: {user.address.zipcode} </p>
    </div>
  )
}

export default User