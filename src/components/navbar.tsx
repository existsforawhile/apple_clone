import Image from "next/image"

export default function Navbar() {
	return(
		<header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
			<nav className="flex w-full screen-max-width">
				<Image alt="Apple" width={14} height={18} src="/assets/images/apple.svg" />
			<div className="flex flex-1 justify-center max-sm:hidden">
				{["Store", "Mac", "iPhone", "Support"].map((nav, i) => (
		<div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
			{nav}	
		</div>
				))}
			</div>

			<div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
				<Image width={18} height={18} alt="search" src="/assets/images/search.svg"/>
				<Image width={18} height={18} alt="bag" src="/assets/images/bag.svg"/>
			</div>
			</nav>
		</header>
	)
}	
