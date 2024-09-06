"use client";
import dynamic from "next/dynamic";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import List from "./components/List";
const Card1 = dynamic(() => import("./components/cards/Card1"));
const Card2 = dynamic(() => import("./components/cards/Card2"));
const Card3 = dynamic(() => import("./components/cards/Card3"));
const Card4 = dynamic(() => import("./components/cards/Card4"));
const Card5 = dynamic(() => import("./components/cards/Card5"));
// const Card6 = dynamic(() => import("./components/cards/Card6"));
import Card6 from "./components/cards/Card6";
import Toolbar from "./components/Toolbar";
import Nav from "./components/Nav";

export default function Home() {
	return (
		<FluentProvider theme={webLightTheme}>
			<Nav />
			<Toolbar />
			<div className="grid grid-cols-none md:grid-cols-[183px_1fr]">
				<aside className="sidebar hidden md:block pl-4">
					<List />
				</aside>
				<main className="flex flex-wrap gap-4 md:max-w-[85%] md:p-5">
					<Card1 />
					<Card2 />
					<Card3 />
					<Card4 />
					<Card5 />
					<Card6 />
				</main>
			</div>
		</FluentProvider>
	);
}
