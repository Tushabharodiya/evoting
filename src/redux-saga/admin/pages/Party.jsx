import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'
import { Button, Table } from '../../atoms/Atoms'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_PARTY_PENDING, GET_PARTY_PENDING, POST_PARTY_PENDING } from '../redux/action'

const Party = () => {

  const [model, setmodel] = useState("hidden")
  let party_name = useRef();
  let party_logo = useRef();
  let short_code = useRef();

  let party = useSelector((state) => state.adminReducer)

  let dispatch = useDispatch();

  //add party
  let addData = () => {
    setmodel("visible")
  }

  let closee = () => {
    setmodel("hidden")
  }

  let addParty = () => {
    let data = {
      party_name: party_name.current.value,
      party_logo: party_logo.current.files[0],
      short_code: short_code.current.value,
    };
    let formdata = new FormData();

    formdata.append("party_name", data.party_name);
    formdata.append("party_logo", data.party_logo);
    formdata.append("short_code", data.short_code);

    dispatch({ type: POST_PARTY_PENDING, payload: formdata })
  }

  //get party
  useEffect(() => {
    dispatch({ type: GET_PARTY_PENDING })
  }, [])
  //remove party
  let remove = (party) => {
    console.log(party);
    dispatch({ type: DELETE_PARTY_PENDING, payload: party })
  }

  return (
    <div>
      <section className="party">
        <div className="container">
          <div className="puls text-end mb-4">
            <button onClick={addData} ><i className="fa-solid fa-plus"></i></button>
          </div>

          <div className="model" style={{ visibility: `${model}` }}>
            <div className="close text-end mb-3">
              <span onClick={closee}><i className="fa-regular fa-circle-xmark"></i></span>
            </div>
            <label>Party name : <input type="text" ref={party_name} /></label>
            <label>Party logo : <input type="file" ref={party_logo} /></label>
            <label>short code : <input type="text" ref={short_code} /></label>
            <button onClick={addParty}>add party</button>
            {/* <Button onClick={addparty} content="add party" style="button" /> */}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="main-table">
                <table border="1px" cellPadding="10px" className="w-100 text-center">
                  <thead>
                    <tr>
                      <th>party-logo</th>
                      <th>name</th>
                      <th>short code</th>
                      <th>remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      party.party?.map((val, index) => {
                        return (
                          <React.Fragment key={index}>
                            <tr>
                              <td><img src={val.party_logo} alt="logo image" /></td>
                              <td>{val.party_name}</td>
                              <td>{val.short_code}</td>
                              <td><button onClick={() => remove(val._id)}><i className="fa-solid fa-trash"></i></button></td>
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

export default Party
