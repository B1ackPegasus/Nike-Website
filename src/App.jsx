import { Hero, PopularProducts,
    CostumerReviews, SuperQuality,
    SpecialOffers, Subscribe, Footer, Services} from './sections';
import Nav from './components/Nav';

const App = ()=> (
    <main className="relative">
        <Nav/>
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
        </section>
        <section className="padding">
         <PopularProducts/>
        </section>
        <section className="padding">
            <SuperQuality></SuperQuality>
        </section>
        <section className="padding-x py-10">
            <Services></Services>
        </section>
        <section className="padding">
            <SpecialOffers></SpecialOffers>
        </section>
        <section className="padding bg-pale-blue">
           <CostumerReviews></CostumerReviews>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe></Subscribe>
        </section>
        <section className="padding bg-black padding-x padding-t pb-8">
           <Footer></Footer>
        </section>
    </main>
)
export default App