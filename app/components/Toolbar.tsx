import { Checkbox, SearchBox } from "@fluentui/react-components";
import Menu from "./Menu";

export default function Toolbar() {
	return (
		<section className="toolbar hidden h-12 px-4 py-1.4 md:flex md:justify-between md:items-center">
			<div className="flex items-center">
				<Menu />
				<Checkbox shape="circular" label="Text" />
				<Checkbox shape="circular" label="Text" />
				<Checkbox shape="circular" label="Text" />
				<span />
				<Checkbox shape="circular" label="Text" />
				<Checkbox shape="circular" label="Text" />
				<Checkbox shape="circular" label="Text" />
				<span />
				<Checkbox shape="circular" label="Text" />
				<Checkbox shape="circular" label="Text" />
			</div>
			<div>
				<span className="filter mr-5">Filter</span>
				<SearchBox placeholder="Find" />
			</div>
		</section>
	);
}
