export default function Hero() {
    return (
        <section className="w-full bg-white">
            <div className="container ml-auto mr-auto">
                <div className="text-center py-40">
                    <h1 className="text-5xl font-bold text-black pb-6">Harmony Education Services</h1>
                    <p className="text-black text-2xl">Creating Harmony through unique, innovative and personalized educational solutions.</p>
                    <div className="flex justify-center">
                        <a href="/login" className="btn-primary">Get Started</a>
                        <a href="/about">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
}