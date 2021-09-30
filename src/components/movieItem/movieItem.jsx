import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class MovieItem extends Component {
   render() {
       const {id, title, year, rating, summary, medium_cover_image} = this.props.data;
       return (
        <Link to={{
            pathname:`/movies/${id}`,
            state: {
                id,
                title,
                year,
                rating,
                summary,
                medium_cover_image
            }
        }}>
            <div>
                <div>
                    <img src={medium_cover_image} alt={title} />
                </div>
                <div>
                    <h2>{title}</h2>
                    <span>{year}</span>
                    <span>{rating}</span>
                    <p>{summary.slice(0,150)}</p>
                </div>
            </div>
        </Link>
       )
   }
}

MovieItem.propTypes = { 
	name : PropTypes.string,
	year : PropTypes.number,
	rating : PropTypes.number,
	summary : PropTypes.string,
	medium_cover_image : PropTypes.string
}

export default MovieItem;