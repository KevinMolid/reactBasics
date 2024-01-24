/* ---------- Imports ---------- */
import React from "react"
import ReactDOM from "react-dom/client"

/* ---------- Components ---------- */
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

/* ---------- Define root element ---------- */
const root = ReactDOM.createRoot(document.getElementById("root"))


/* ---------- Render elements ---------- */
root.render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
)
