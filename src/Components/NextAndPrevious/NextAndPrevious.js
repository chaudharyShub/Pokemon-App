import React from 'react';
import './NextAndPrevious.css';

function NextAndPrevious({ offset, setOffset, heading, limit, isDisable, setImageArray }) {

    return (
        <>
            <h1 className='next_previous_heading'>{heading}</h1>
            <div className='btn_container'>

                <button
                    className='btn btn-warning'
                    onClick={() => {
                        setOffset(prevState => prevState - 20);
                        setImageArray([]);
                    }}
                    disabled={!offset}
                >&larr; Previous</button>

                <button
                    className='btn btn-warning'
                    onClick={() => {
                        setOffset(prevState => prevState + 20);
                        setImageArray([]);
                    }}
                    disabled={limit < 20 || isDisable}
                >Next &rarr;</button>

            </div>
        </>
    );
}

export default NextAndPrevious;
