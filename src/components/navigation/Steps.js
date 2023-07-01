import React from "react";

import signupImage from "../../assets/img/illustrations/signup.png";
import walletImage from "../../assets/img/illustrations/buy.png";
import arrow from "../../assets/img/arrow.svg";
import bank from "../../assets/img/illustrations/banks.png"
import deal from "../../assets/img/illustrations/deal.png"
import { Fade } from "@successtar/react-reveal";

export default function StepSection() {
	return (
		<section className="px-6 bg-white dark:bg-slatee-900">
			<div className="rounded-3xl py-20">
				<div className="container mx-auto text-center">
					<h2 className="font-bold text-2xl sm:text-4xl mb-12 leading-normal text-black dark:text-whitee-900">
						Get started in just a few minutes
					</h2>
					<div className="md:flex justify-center gap-20">
						<Fade up delay={450}>
							<div className="text-center relative px-4">
								<div className="relative">
									<img
										src={signupImage}
										className="w-44 mt-10 sm:mt-0 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
										alt=""
									/>
									<img
										src={arrow}
										alt=""
										className="w-28 hidden md:block absolute top-1/2 -right-28"
									/>
								</div>
								<h3 className="text-xl font-bold mb-4 text-black dark:text-whitee-900">Explore Events</h3>
								<p className="text-gray text-justify max-w-sm text-blackk-700 dark:text-whitee-400">
									Explore our wide selection of events and choose the one you like the most.
								</p>
							</div>
						</Fade>
						<Fade up delay={550}>
							<div className="text-center relative px-4">
								<div className="relative">
									<img
										src={walletImage}
										className="w-44 mt-10 sm:mt-0 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
										alt=""
									/>
									<img
										src={arrow}
										alt=""
										className="w-28 hidden md:block absolute top-1/2 -right-28"
									/>
								</div>
								<h3 className="text-xl font-bold mb-4 text-black dark:text-whitee-900">Buy Tickets</h3>
								<p className="text-gray text-justify max-w-sm text-blackk-700 dark:text-whitee-400">
									Select the number of tickets you want and make a secure transaction with our blockchain technology.
								</p>
							</div>
						</Fade>
						<Fade up delay={650}>
							<div className="text-center relative px-4">
								<div className="relative">
									<img
										src={bank}
										className="w-44 mt-10 sm:mt-0 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
										alt=""
									/>
									<img
										src={arrow}
										alt=""
										className="w-28 hidden md:block absolute top-1/2 -right-28"
									/>
								</div>
								<h3 className="text-xl font-bold mt-8 mb-4 text-black dark:text-whitee-900">Validate Tickets</h3>
								<p className="text-gray text-justify max-w-sm text-blackk-700 dark:text-whitee-400">
									Once the purchase is made, your tickets will be linked to your blockchain identity, which guarantees their authenticity and avoids duplicity.
								</p>
							</div>
						</Fade>
						<Fade up delay={750}>
							<div className="text-center relative px-4">
								<img
									src={deal}
									className="w-44 mt-10 sm:mt-0 mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
									alt=""
								/>
								<h3 className="text-lg font-bold mt-12 mb-4 text-black dark:text-whitee-900">Enjoy your Event</h3>
								<p className="text-gray text-justify max-w-sm text-blackk-700 dark:text-whitee-400">
									Arrive at the event with complete confidence, knowing that your tickets are legitimate and that you have contributed to the fight against counterfeit tickets.
								</p>
							</div>
						</Fade>

					</div>
				</div>
			</div>
		</section>
	);
}
