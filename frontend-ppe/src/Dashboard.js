import React from 'react';
import DisplayOnePokemon from './onePokemonStat/DisplayOnePokemon';


function Dashboard() {
    return (
        <div class="mainContent">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-xs-12" >
                    <div className="widget1">
                        <DisplayOnePokemon />
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12" >
                    <div className="widget1">
                        <DisplayOnePokemon />
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12" >
                    <div className="widget1">
                        <DisplayOnePokemon />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dashboard;