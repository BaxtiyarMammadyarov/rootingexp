import React from 'react'
import "./style.css"

function Profile({ data }) {
    console.log(data)
    return (
        <div className='profile'>
            <p>{data.companyName}</p>
            <p>{data.contactName}</p>
            <p>{data.contactTitle}</p>
        </div>
    )
}

export default Profile
