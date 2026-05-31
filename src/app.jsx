// import all function names from the .jsx content files

import Header from './lessons/components/header';
import Footer from './lessons/components/footer';
import Welcome from './lessons/JSX/welcome_module';
import Calculate_age from './lessons/JSX/calculate_age';
import Passing from './lessons/props/pass_parameters';

// define functions for displaying content into 'root' element of index.html
// the function exported at last will be inserted into root

function App(){     // Learning & Implementation
    return(
        <>
        <Header/>   <br />

        <Welcome/>  <br />

        <Calculate_age/>    <br />

        <Footer/>   <br />

        <Passing name='Femila' age='45' />  <br />
        
        </>
    );
}

function Portfolio(){   // Personal portfolio webapp
    return;     // --- currently not exported ---
}

export default App;