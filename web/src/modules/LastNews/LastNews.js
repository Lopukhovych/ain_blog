import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class LastNews extends Component {
    componentDidMount() {
        console.log('history: ', this.props.history);
    }

    render() {
        return (
            <div>
                <h3>LastNews</h3>
            </div>
        );
    }
}

export default withRouter(LastNews);
