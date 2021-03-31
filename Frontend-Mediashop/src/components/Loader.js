import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
    return (
        <>
            <Spinner animation='border' variant='info' size='sm' />
            <Spinner animation='border' variant='info' />
            <Spinner animation='grow' variant='info' size='sm' />
            <Spinner animation='grow' variant='info' />

            <span className='sr-only'>Loading...</span>
        </>
    )
}

export default Loader
