
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";



function App() {


    return (
        
            <CustomProvider children={

                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>

            } />


    








    )



}

export default App