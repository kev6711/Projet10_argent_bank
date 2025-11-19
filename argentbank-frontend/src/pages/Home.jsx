import "../assets/css/main.min.css"
import chatIcon from "../assets/img/compressed/icon-chat.webp"
import moneyIcon from "../assets/img/compressed/icon-money.webp"
import securityIcon from "../assets/img/compressed/icon-security.webp"
import HomeFeatureItem from "../components/HomeFeatureItem"

function Home() {
    return (
        <div>
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <HomeFeatureItem
                        image={chatIcon}
                        alt="Chat Icon"
                        title="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in
                        less than 5 minutes."></HomeFeatureItem>
                    <HomeFeatureItem
                        image={moneyIcon}
                        alt="Money Icon"
                        title="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be!"></HomeFeatureItem>
                    <HomeFeatureItem
                        image={securityIcon}
                        alt="Security Icon"
                        title="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money is always safe"></HomeFeatureItem>
                </section>
            </main>
        </div>
    )
}

export default Home
