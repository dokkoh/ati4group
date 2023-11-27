import FormContact from "../components/FormContact/formcontact.jsx"

import HeaderNav from "../components/HeaderNav/headernav.jsx";
import Footer from "../components/Footer/footer.jsx";

function Contact() {
    return (
        <>
            <HeaderNav />
            <main role="main">
                <FormContact />
            </main>
            <Footer />
        </>
    )
}

export default Contact;