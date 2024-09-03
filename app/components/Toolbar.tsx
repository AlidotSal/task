import { Checkbox, SearchBox } from "@fluentui/react-components";
import Menu from "./Menu";

export default function Toolbar() {
	return (
		<section className="toolbar">
			<div>
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
				<span className="filter">Filter</span>
				<SearchBox placeholder="Find" />
			</div>
		</section>
	);
}
