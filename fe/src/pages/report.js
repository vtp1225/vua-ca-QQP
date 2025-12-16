import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"

export default function Home() {


    return (
        <div className="bg-background-light dark:bg-background-dark font-body text-text-color dark:text-gray-300 min-h-screen flex flex-col">
            <Header />
            <Banner />

            <main className="flex-grow">
                <div>
                    <h1>Báo cáo</h1>
                    <h1>Ha Hong Quan</h1>
                </div>
            </main>

            <Footer />
        </div>
    )
}