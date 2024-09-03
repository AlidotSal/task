"use client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import List from "./components/List";
import Card1 from "./components/cards/Card1";
import Card2 from "./components/cards/Card2";
import Card3 from "./components/cards/Card3";
import Card4 from "./components/cards/Card4";
import Card5 from "./components/cards/Card5";
import Card6 from "./components/cards/card6";
import Toolbar from "./components/Toolbar";
import Nav from "./components/Nav";

export default function Home() {
	return (
		<FluentProvider theme={webLightTheme}>
			<Nav />
			<Toolbar />
			<div className="app">
				<aside className="sidebar">
					<List />
				</aside>
				<main className="content grid">
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
