import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class MatchSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }
  
  render() {
    const style= {
      background: '#121212'
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-5">
            <CircularProgress
              
              mode="determinate"
              value={this.state.completed}
              size={60}
              thickness={7}
            />
          </div>
          <div className="col-xs-4">
          
          </div>
          <div className="col-xs-3">
          
          </div>
        </div>
      </div>
    );
  }
}

export default MatchSummary;