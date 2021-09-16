import React, { memo } from 'react'
import loading from './loading.gif'

export default memo(function Spinner() {
    return (
        <div className ="text-center center-block">
            <img src={loading} alt="loading" style={{width:'70px'}} />
        </div>
    )
})
