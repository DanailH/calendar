import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Donut from '../donutChart/Donut';
import Divider from '@material-ui/core/Divider';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './style.scss';

class DashboardBox extends Component {
  state = {
    isDrawerOpen: false
  }

  toggleDrawer = () => { 
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen,
    });
  }; 

  render() {

    return (
      <div className="content-box dashboard-box">
        <div className="d-flex justify-space ">
          <div className="content-header">DASHBOARD</div>
          <Link to="/dashboard" className="back-btn">
            <span className="more-text">More ></span>
          </Link>
        </div>

        <Donut remaining={this.props.remaining} total={this.props.total} />

        <Divider />

        <div className="text-center">
          <div className="holiday-icon add-icon">
            <AddCircleIcon />
          </div>
          <div className={`holiday-number ${this.props.remainingHolidays <= 0 ? 'error' : ''}`}>
            {this.props.remainingHolidays}
          </div>
          <div className="holiday-header">
            Left days
						</div>
          <Divider />
          <div className="holiday-subheader">
            *The number of left holidays
					</div>
        </div>
      </div>
    )
  }
}

export default DashboardBox;
