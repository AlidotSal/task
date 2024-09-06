import React from "react";
import type {
	SelectTabData,
	SelectTabEvent,
	TabValue,
} from "@fluentui/react-components";

import Box from "../Box";
import Tabs from "../Tabs";
import Chart1 from "../charts/Chart1";

export default function Card1() {
	const [selectedValue, setSelectedValue] = React.useState<TabValue>("tab1");
	const onTabSelect = React.useCallback(
		(_event: SelectTabEvent, data: SelectTabData) => {
			setSelectedValue(data.value);
		},
		[],
	);
	const value =
		selectedValue === "tab1" ? 72 : selectedValue === "tab2" ? 56 : 85;

	return (
		<Box
			title="Chart 1"
			description="Description"
			footer={
				<a className="card-footer" href="#">
					View details
				</a>
			}
			width="normal"
		>
			<Tabs list={["7 days", "30 days", "60 days"]} onTabSelect={onTabSelect} />
			<Chart1 value={value} />
		</Box>
	);
}
