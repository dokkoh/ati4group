import HeaderNav from "../components/HeaderNav/headernav.jsx";
import Footer from "../components/Footer/footer.jsx";

function Sitemap() {
    return (
        <>
            <HeaderNav />
        <main>
            <h1>Page <span style={{ color: 'red'}}>Sitemap</span></h1>
            <div style={{ color: 'green', height:764, fontWeight:"bold", fontSize:60, display:"flex" , alignItems:"center", textAlign: "center", margin:"auto 20" }}>
                <p>Ici viendront les composants de la page</p>
            </div>
        </main>
            <Footer />
        </>
    )
}

export default Sitemap;