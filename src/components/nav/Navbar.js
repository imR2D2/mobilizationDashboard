//Fragment viene de HeadlessUI como Poper
import { useState, Fragment } from "react";
//Agrega la clase active, mientras que LINK no
import { NavLink, Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import DarkModeSwitch from "../darkMode/DarkMode";

const Navbar = () => {
	//Activar Scroll
	window.onscroll = function () {
		scrollFunction();
	};
	const scrollFunction = () => {
		if (document.getElementById("navbar")) {
			//Cuanta en N el scroll
			console.log(document.body.scrollTop);
			if (
				document.body.scrollTop > 50 ||
				document.documentElement.scrollTop > 50
			) {
				document.getElementById("navbar").classList.add("shadow-navbar");
				document.getElementById("navbar").classList.add("bg-white");
			} else {
				document.getElementById("navbar").classList.remove("shadow-navbar");
				document.getElementById("navbar").classList.remove("bg-white");
			}
		}
	};

	const [open, setOpen] = useState(false);

	return (
		<div
			id="navbar"
			className="fixed bg-white dark:bg-black w-full top-0 z-50 px-4 py-3"
		>
			<div className="ml-6 -mt-2 flex justify-end sm:justify-center">
				<div id="menu" className=" hidden md-1:block ml-4 mt-2">
					<NavLink to="/" className="text-sm border-2 rounded-full px-6 py-1.5 ml-3 font-medium text-blue-900 border-blue-900 hover:bg-blue-950 hover:border-blue-950 hover:text-whitee-900 dark:hover:text-black dark:text-whitee-900 transition duration-700">
						Home
					</NavLink>

					<NavLink to="/registro" className="text-sm border-2 rounded-full px-6 py-1.5 ml-3 font-medium text-blue-900 border-blue-900 hover:bg-blue-950 hover:border-blue-950 hover:text-whitee-900 dark:hover:text-black dark:text-whitee-900 transition duration-700">
						Registro
					</NavLink>
				</div>

				<div className="mt-3 ml-5">
					<DarkModeSwitch />
				</div>

				<Popover className="relative">
				<Popover.Button className="block md-1:hidden focus:ring-none focus:outline-none mt-2.5 ml-3">
					{open ? (
						<svg onClick={() => {setOpen(false);}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(30,58,138)" className="w-7 h-7">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					) : (
						<svg onClick={() => {setOpen(true);}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(30,58,138)" className="w-7 h-7">
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					)}
				</Popover.Button>



					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>	
						<Popover.Panel className="absolute -right-5 z-10 mt-2 w-screen">			
							<div class="text-center block lg:hidden w-full border-b-2 border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-950 h-36">
								<br/>
								<Link to="/" className="text-lg hover:text-xl hover:font-semibold duration-500 text-black dark:text-whitee-900">
									Inicio
								</Link>
								<br/>
								<br/>
								
								<Link to="/registro" className="text-lg hover:text-xl hover:font-semibold duration-500 text-black dark:text-whitee-900">
									Registro
								</Link>
								<br/>
								<br/>
								
								<br/>
								<br/>
								
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>
			</div>
		</div>
	);
};

export default Navbar