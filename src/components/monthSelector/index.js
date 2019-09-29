import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './style.scss';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class MonthSelector extends React.Component {
  constructor() {
    super();

    this.state = {
      currentMonth: months[0],
      activeMonthIndex: 0
    };
  }

  componentDidMount() {
    this.setState({
      currentMonth: months[this.props.activeMonthIndex],
      activeMonthIndex: this.props.activeMonthIndex
    })
  }

  static getDerivedStateFromProps(props, state) {
    if (state.activeMonthIndex !== props.activeMonthIndex) {
      return {
        currentMonth: months[props.activeMonthIndex],
        activeMonthIndex: props.activeMonthIndex
      };
    }

    return null;
  }

  isMonthActive(targetMonth) {
    return this.state.currentMonth === targetMonth;
    
  }

  activateMonth(month) {
    const newMonthIndex = months.findIndex(el => el === month);

    this.setState({
      currentMonth: month,
      activeMonthIndex: newMonthIndex
    })

    this.props.setMonthIndex(newMonthIndex);
    this.props.selectMonth(newMonthIndex + 1);
  }

  renderMonths() {
    return months.map(
      month => (
        <ListItem button
          key={month}
          // selected={this.state.activeMonthIndex}
          onClick={this.activateMonth.bind(this, month)}>
          <ListItemText>
            {month}
            </ListItemText>
        </ListItem>
      )
    );
  }

  render() {
    return (
      <List component="nav">
        {this.renderMonths()}
      </List>
    )
  };
}

export default MonthSelector;
