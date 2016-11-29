import React from 'react';
//import TripSummary from './tripsummary';
import {Link} from 'react-router';

export default class UserGeneratedPage extends React.Component{
  render(){
    return (
      <div>
        <div className="panel panel-default user-generated">
          <div className="panel-body">
            <div className="media-top">
              <div className="row">
                <div className="col-md-12">
                  <h3>Trips Generated by <Link to={"/profile/"}>You</Link>:</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>);
  }
}