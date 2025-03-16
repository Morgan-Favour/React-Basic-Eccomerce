import heroImage from '../assets/images/hero-image.png'
// import "../css/hero.css"
// import "../css/global.css"
// import "../css/responsive.css"

function Hero() {
    return (
        <main className='hero'>
            <div className='hero-content'>
                <h1>See everything with Clarity</h1>
                <p>Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
                <button className='btn-dark'>Show Now</button>
            </div>
            <img className='hero-image' src={heroImage} alt="" />
        </main>
    )
}

export default Hero