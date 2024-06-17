import { Route, Routes } from "react-router-dom";
import { Navbar } from "./redux-saga/atoms/Atoms";
import Dashborad from "./redux-saga/admin/pages/Dashborad";
import Party from "./redux-saga/admin/pages/Party";
import Voter from "./redux-saga/admin/pages/Voter";
import Election from "./redux-saga/admin/pages/Election";
import Conction from "./redux-saga/admin/pages/Conction";
import Home from "./redux-saga/admin/pages/Home";
import Vote from "./redux-saga/user/Vote";

function App() {
  let role = "admin"

  if (role == "admin") {
    return (
      <>
        <Navbar element={role} />
        <div className="adminbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="sidebar">
                  <Home />
                </div>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-6">
                <Routes>
                  <Route path="/" element={<Dashborad />} />
                  <Route path="/party" element={<Party />} />
                  <Route path="/voter" element={<Voter />} />
                  <Route path="/election" element={<Election />} />
                  <Route path="/conction" element={<Conction />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>



      </>
    );
  } else if (role == "user") {
    return (
      <>
        <Navbar />
        <Vote />
      </>
    )
  }
}

export default App;
