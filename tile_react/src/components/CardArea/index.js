import React from 'react';
import "./style.css"

function CardArea(props) {
    return (
        <div>
            <div className="row">
                {props.results.slice(0,12).map(result => (
                    <div className="col-3 align-content-center tileCol" key={result.id}>
                        <div className="card border-dark mb-3">
                            <div className="card-body">
                                <img alt={result.title} id={result.id}  src={result.images.fixed_height.url} onClick={props.handleClick}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default CardArea;