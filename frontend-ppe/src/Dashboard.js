import React from 'react';
//import GrapheCapteur from './grapheCapteur/grapheCapteur';
import Home from './grapheCapteur/grapheCapteur';
import Home2 from './grapheCapteur2/grapheCapteur2';
import Home3 from './grapheCapteur3/grapheCapteur3';

function Dashboard() {
    return (
        <div class="mainContent">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12" >
                    <div className="widget1">
                        <Home />
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12" >
                    <div className="widget1">
                        <Home2 />
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12" >
                    <div className="widget1">
                        <Home3 />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard;