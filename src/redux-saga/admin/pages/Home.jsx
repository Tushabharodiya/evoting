import React from 'react'
import { Link } from 'react-router-dom'
import Dashborad from './Dashborad'
import Party from './Party'

const Home = () => {
    return (
        <>
            <div className="side_bar">
                <div className="side-list">
                    <Link to={"/"}> <h5><i className="fa-solid fa-house"></i> dashborad</h5></Link>
                    <Link to={"/party"}> <h5><i className="fa-regular fa-handshake"></i> party</h5></Link>
                    <Link to={"/voter"}> <h5> <i className="fa-solid fa-square-poll-vertical"></i> voter</h5></Link>
                    <Link to={"/election"}> <h5><i className="fa-solid fa-atom"></i> election</h5></Link>
                    <Link to={"/conction"}> <h5><i className="fa-solid fa-address-book"></i> conction</h5></Link>
                </div>  
            </div>
        </>
    )
}

export default Home
