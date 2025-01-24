export default function Hero() {
	return (
		<section className="bg-white py-20">
			<div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
				<h1 className="mb-5 text-3xl font-extrabold md:text-4xl lg:text-5xl text-black">
					Harmony Education Services
				</h1>
				<p className="mb-8 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48">
					Creating Harmony through unique, innovative and personalized educational solutions.
				</p>
				<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<a href="/login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg border border-gray-300 hover:bg-gray-800 hover:border-gray-800 hover:text-white focus:ring-4 focus:ring-gray-100">
						Get Started
					</a>
				</div>
			</div>
		</section>
	);
}