import React from 'react'

export default class Reviews extends React.Component {
    render() {
        return (
            <div>
                {/* <h2>{this.props.reviews.movie}</h2> */}
                <h2>
                    {this.props.reviews.comment}
                </h2>
            </div>
        )
    }
}