import React from 'react'
import "semantic-ui-css/semantic.min.css";


export default function Review(props) {
    return (
        <div>
            {props.review.comment}
            <button onClick={()=>props.handleEditForm(props.review)} class='mini ui icon button'><i class="edit icon"></i></button>
            <button onClick={()=>props.handleDelete(props.review)}class='mini ui icon button'><i class="delete icon"></i></button>
        </div>
    )
}
