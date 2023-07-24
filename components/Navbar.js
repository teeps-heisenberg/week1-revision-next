import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <Link href='/'>
                    <li>Add Todos</li>
                </Link>
                <Link href='/todos'>
                    <li>View Todos</li>
                </Link>
                <Link href='/about'>
                    <li>About Us</li>
                </Link>
                <Link href='/contact'>
                    <li>Contact</li>
                </Link>
                <Link href='/products'>
                    <li>Products</li>
                </Link>
                <Link href='/users'>
                    <li>Users</li>
                </Link>
                <Link href='/comments'>
                    <li>Comments</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar