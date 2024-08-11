import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
    return (
    <div>
    <Header />
    <div className="note">
        <h1>Note</h1>
        <p>Content</p>
    </div>
    <Footer />
    </div> );
}

export default App;