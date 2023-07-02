/* eslint-disable @next/next/no-img-element */
//Hero.tsx

export default function Hero() {
    return (
        <div className="min-h-screen hero bg-gradient-to-b from-transparent to-primary-black mix-blend-overlay" style={{backgroundImage: "url('ship_bg.jpg')"}} >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}