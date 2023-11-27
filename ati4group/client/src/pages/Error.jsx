import HeaderNav from "../components/HeaderNav/headernav.jsx";
import Footer from "../components/Footer/footer.jsx";

function Error() {
    return (
        <>
            <HeaderNav />
            <main className="grid min-h-full place-items-center bg-background-grey px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-primary-orange">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page non trouvée</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Désolé, nous n&#39;avons pas trouvé la page que vous recherchez.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="rounded-md bg-primary-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Retour à l&#39;accueil
                        </a>
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Contactez le support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Error;