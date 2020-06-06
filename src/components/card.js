import React from 'react';
function Card(props){
    const {name,email,id} = props;
    return(
        <div className='tc bg-blue dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/test${id}?100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;