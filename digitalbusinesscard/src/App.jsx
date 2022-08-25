import React from "react"
import About from "./components/about.jsx"
import Footer from "./components/footer.jsx"
import Info from "./components/info.jsx"
import Interests from "./components/interests.jsx"
import './App.css'

export default function App() {
    return (
        <div className="container">
            <Info />
            <main className="about-interests-box">
                <About />
                <Interests />
            </main>
            <Footer />
        </div>
    )
}
