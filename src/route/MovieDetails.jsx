import React from 'react';

class MovieDetails extends React.Component {
    componentDidMount () {
        const {location,history} = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }
    
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div>
                    <h1>Details Page</h1>
                    <h2>{location.state.title}</h2>
                    <span>{location.state.year},{location.state.summary}</span>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default MovieDetails;