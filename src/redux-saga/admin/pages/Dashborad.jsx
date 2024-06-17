import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import Card from '../../component/Card'
import { Table } from '../../atoms/Atoms'

const Dashborad = () => {
    return (
        <>
            <section className="dashborad">
                <div className="container">
                    <div className="row">
                       
                        <div className="col-lg-12">
                            <div className="dashborad-data">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <Card />
                                    </div>
                                    <div className="col-lg-4">
                                        <Card />
                                    </div>
                                    <div className="col-lg-4">
                                        <Card />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-11">
                                        <Table/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashborad
