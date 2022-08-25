import React from "react"
import facePicture from "../assets/face.jpg"

export default function Info() {
    return (
        <div className="info">
            <img src={facePicture} className="facePicture"/>
            <h1>Justin Chen</h1>
            <h2>Frontend Developer</h2>
            <p>justinchen.website</p>
            <button type="button" className="button-email">
                <span className="button-email-icon">
                    <ion-icon name="mail-outline"></ion-icon>
                </span>
                <span className="button-email-text">Email</span>
            </button>
            <button type="button" className="button-linkedin">
                <span className="button-linkedin-icon">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span className="button-linkedin-text">LinkedIn</span>
            </button>
        </div>
    )
}