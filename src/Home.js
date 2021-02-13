import React from 'react'
import Video from './assets/video/DPV.mp4'

export default function Home() {
    return (
        <div>
            <video autoPlay loop style={{objectFit: "cover"}}>
            <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
}
