/* ---------- Imports ---------- */
import React from "react"
import ReactDOM from "react-dom/client"

/* ---------- Define root element ---------- */
const root = ReactDOM.createRoot(document.getElementById("root"))

/* ---------- Components ---------- */
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
)
