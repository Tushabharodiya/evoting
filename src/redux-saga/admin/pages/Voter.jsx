import React, { useEffect, useState } from 'react'
import { Table } from '../../atoms/Atoms'
import { useDispatch, useSelector } from 'react-redux'
import { GET_VOTER_PENDING, POST_VOTER_PENDING } from '../redux/action';

const Voter = () => {

  const [model, setmodel] = useState("hidden")
  const [data, setdata] = useState({})

  //post user_list

  let closee = () => {
    setmodel("hidden")
  }

  let add = () => {
    setmodel("visible")
  }
  let handle = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  let addvoter = () => {
    dispatch({ type: POST_VOTER_PENDING, payload: data })
  }


  //get user_list
  let dispatch = useDispatch();

  let voter = useSelector((state) => state.adminReducer)
  console.log(voter);

  useEffect(() => {
    dispatch({ type: GET_VOTER_PENDING })
  }, [])

  return (
    <div>
      <section className="voter">
        <div className="container">
          <div className="puls text-end mb-4">
            <button onClick={add} ><i className="fa-solid fa-plus"></i></button>
          </div>

          <div className="model" style={{ visibility: `${model}` }}>
            <div className="close text-end mb-3">
              <span onClick={closee}><i className="fa-regular fa-circle-xmark"></i></span>
            </div>
            <label>card Number : <input type="text" name='number' onChange={handle} /></label>
            <label>name : <input type="text" name='name' onChange={handle} /></label>
            <label>father Name : <input type="text" name='father name' onChange={handle} /></label>
            <label>sex : <input type="text" name='sex' onChange={handle} /></label>
            <label>DOB : <input type="number" name='dob' onChange={handle} /></label>
            <label>address : <input type="text" name='address' onChange={handle} /></label>
            <label>assemblyNoandNam : <input type="text" name='city number' onChange={handle} /></label>
            <label>partNoandNam : <input type="text" name='city' onChange={handle} /></label>
            <label>password : <input type="number" name='password' onChange={handle} /></label>
            <button onClick={addvoter} >add voter</button>
            {/* <Button onClick={addparty} content="add party" style="button" /> */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="main-table">
                <table border="1px" cellPadding="10px" className="w-100 text-center">
                  <thead>
                    <tr>
                      <th>card Number</th>
                      <th>name</th>
                      <th>father Name</th>
                      <th>sex</th>
                      <th>DOB </th>
                      <th>address</th>
                      <th>assemblyNoandNam</th>
                      <th>partNoandNam</th>
                      <th>password</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      voter.voter.data?.map((val, index) => {
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td>{val.cardNo}</td>
                              <td>{val.name}</td>
                              <td>{val.fatherName}</td>
                              <td>{val.sex}</td>
                              <td>{val.dob}</td>
                              <td>{val.address}</td>
                              <td>{val.assemblyNoandName}</td>
                              <td>{val.partNoandName}</td>
                              <td>{val.password}</td>
                            </tr>
                          </React.Fragment>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Voter
