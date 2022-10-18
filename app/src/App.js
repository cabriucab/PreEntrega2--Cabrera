import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
return(
<>

<Header />
<ItemListContainer
nombre="Martin Cabrera"
/>

<Footer
autor="Martin Cabrera"
anios="2022"

/>

</>




)



}

export default App