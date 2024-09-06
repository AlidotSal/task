export default function Nav() {
	return (
		<>
			<header className="px-2.5 md:px-4 flex items-center gap-2.5 md:gap-4 h-[60px]">
				<img
					className="rounded max-w-full h-8"
					width="32"
					height="32"
					src="https://s3-alpha-sig.figma.com/img/1df3/4672/41b1cd508803a057676b6ecc1bd748ff?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a-fO~y7FfToVPjFwuxy3cdDUwL8U0x8ID3gKGWZqmJ9HPdPNr8RQpodAbJtcmr4DWYmM-kElh2aAZbWWSp1gyjjV~Q1LFc38K-CTDQtBq0IVSM1sJ12D31FK2EvsTdu4qjZ3ITnL9HwqnVpbmwon83sta~sL41WM9F48GjmNij13sdi~Fy-70~5vQ-gASKtq3SuZy1Atlhn4b-RDAZbQnxv3-DPUCfw3Q~HHNjniCELjzZOPusdwyV7qmFO4qHEuBjUf~OoHmi5lO2i-bdh~XvBOjFZuclXqVRnsZ0KcGfx~ML8c1~Mrd5-X0DAmmNUT7ccW9kDq1CmnzrD0Rd~h~g__"
					alt=""
				/>
				<h2 className="m-0 text-[26px] md:text-lg font-bold">Van Arsdel</h2>
				<ul className="hidden md:flex m-0 p-0 gap-1.5 list-none">
					<li className="px-2.5 pt-3.5 pb-3">Home</li>
					<li className="px-2.5 pt-3.5 pb-3">Timeline</li>
					<li className="px-2.5 pt-3.5 pb-3">Chat</li>
					<li className="px-2.5 pt-3.5 pb-3">Assigned to you</li>
				</ul>
			</header>
			<section className="nav tabs grid grid-cols-3 justify-around items-center h-11 text-[15px] md:hidden">
				<div className="grid place-items-center h-full text-center font-semibold">
					<p className="m-0">Tab 1</p>
				</div>
				<div className="grid place-items-center h-full text-center">
					<p className="m-0">Tab 2</p>
				</div>
				<div className="grid place-items-center h-full text-center">
					<p className="m-0">Tab 3</p>
				</div>
			</section>
		</>
	);
}
