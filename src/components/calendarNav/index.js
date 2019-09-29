import React from 'react';
import Typography from '@material-ui/core/Typography';
import YearSelector from '../yearSelector';
import MonthSelector from '../monthSelector';

class CalendarNav extends React.Component {
  constructor() {
    super();

    this.resetMonth = this.resetMonth.bind(this);
    this.setMonthIndex = this.setMonthIndex.bind(this);

    this.state = {
      activeMonthIndex: 0
    };
  }

  resetMonth() {
    this.setState({
      activeMonthIndex: 0
    });
  }

  setMonthIndex(index) {
    this.setState({
      activeMonthIndex: index
    });
  }

  render() {
    return (
      <div>
        <Typography variant="h5" className="header">
          Calendar
      </Typography>
        <YearSelector resetSelectedMonth={this.resetMonth} selectYear={this.props.selectYear} />
        <MonthSelector selectMonth={this.props.selectMonth} setMonthIndex={this.setMonthIndex} activeMonthIndex={this.state.activeMonthIndex} />
      </div>
    )
  };
}

export default CalendarNav;
