import React from 'react'
import {
  Link
} from "react-router-dom";
import BloodHist from "./bloodgropuhist.png";
import BloodGroup from "./bloodgroup.png";
import BloodTypeHist from "./bloodtypehist.png";
import BloodTypePie from "./bloodtypepie.png";
import BoxPlot from "./boxplot.png";
import RelPlotGroup from "./relplotGroup.png"
import ViolinPlotGender from "./violinplotgender.png";
import ViolinPlotUnits from "./violinplotUnits.png";
function Analyse() {
  return (
    <div className="wrapper2">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="#">Blood Bank</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/">Home</Link>                    
                    </li>
                  
                    <li className="nav-item">
                    <Link to="/donardet">Recieve</Link>                    
                  </li>
                  <li className="nav-item">
                    <Link to="/analysis">Analysis</Link>                    
                  </li>
                  <li className="nav-item">
                    <Link to='/'>Logout</Link>                    
                    </li>
                  </ul>
                </div>
            </nav>
            <div className='images-ana'>
            <div class="card-group">
              <div class="card">
                <img className="card-img-top" src={BloodHist} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Blood Group Histogram</h5>
                  <p className="card-text">This Histogram helps visualize the number of units available in each blood group on an average</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={BloodGroup} alt="Card image cap" />
                <div class="card-body">
                  <h5 className="card-title">Blood Group Pie Chart</h5>
                  <p classname="card-text">The pie chart show the fraction of blood donors under each group</p>
                </div>
              </div>
                <div className="card">
                  <img className="card-img-top" src={BloodTypeHist} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Blood Type Histogram</h5>
                    <p className="card-text">The histogram represents the number of donors with positive blood group and negative blood group</p>
                  </div>
                </div>
            </div>

            <div class="card-group">
              <div class="card">
                <img className="card-img-top" src={BloodTypePie} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">The pie chart show the fraction of blood donors that have positive blood group and negative blood group</p>
                  
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={BoxPlot} alt="Card image cap" />
                <div class="card-body">
                  <h5 className="card-title">Box Plot</h5>
                  <p classname="card-text">From the box plot we can identify the average number of units donated which is close to 4</p>
                </div>
              </div>
                <div className="card">
                  <img className="card-img-top" src={RelPlotGroup} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">The relational plot helps visualize the number of units donated under each blood group</p>
            
                  </div>
                </div>
            </div>

            <div class="card-group">
              <div class="card">
                <img className="card-img-top" src={ViolinPlotGender} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Violin Plot Gender</h5>
                  <p className="card-text">From the violin plot it can be concluded that there are more number of female donors and comparatively less number male donors , the graph also shows that the maximum number of units are donated by male donors</p>
    
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={ViolinPlotUnits} alt="Card image cap" />
                <div class="card-body">
                  <h5 className="card-title">Violin Plot Units</h5>
                  <p classname="card-text">From the violin plot plotted for units the range of donations in terms of units can be concluded</p>
                  
                </div>
              </div>
                
            </div>
            </div>

            
    </div>
  )
}

export default Analyse