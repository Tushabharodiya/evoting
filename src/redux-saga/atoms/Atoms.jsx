
import { useState } from "react"
import logo from "../images/logo.png"

let Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="head-logo d-flex align-items-center">
                        <img src={logo} alt="logo image" />
                        <h4 className="mb-0 ms-2">E-ELECTION</h4>
                    </div>
                    <div className="user">
                        <button><i className="fa-regular fa-user"></i></button>
                    </div>
                </div>
            </nav>
        </>
    )
}

let Table = ({ party_name, party_logo, short_code }) => {
    return (
        <>
            <div className="main-table">
                <table border="1px" cellPadding="10px" className="w-100">
                    <thead>
                        <tr>
                            <th>party name</th>
                            <th>logo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{party_name}</td>
                            <td>{party_logo}</td>
                            <td>{short_code}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

let Button=({content,style})=>(
    <button className={style}>{content}</button>
)


export { Navbar, Table,Button }