import React, { Component } from 'react';

class MovieItem extends Component {

   render() {
       const {data:{name, year, rating, summary, medium_cover_image}} = this.props;
       return (
            <div>
                <div>
                    <img src={medium_cover_image} alt={name} />
                </div>
                <div>
                    <h2>{name}</h2>
                    <span>{year}</span>
                    <span>{rating}</span>
                    <p>{summary}</p>
                </div>


            </div>
       )
   }
}

export default MovieItem;