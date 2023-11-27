import React, { useRef } from 'react';
import Eventinfo from "../components/EventInfo/eventinfo.jsx";
import HeaderNav from "../components/HeaderNav/headernav.jsx";
import Footer from "../components/Footer/footer.jsx";
import FormConfirmation from "../components/FormConfirmation/formconfirmation.jsx";

function Home() {
    const formRef = useRef(null);


    return (
        <>
            <HeaderNav />
            <main role="main">
                <Eventinfo formRef={formRef} />
                <div ref={formRef}>
                    <FormConfirmation />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;
