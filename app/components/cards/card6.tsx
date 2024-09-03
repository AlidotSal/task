import Box from "../Box";
import Tabs from "../Tabs";
import Chart6 from "../charts/Chart6";

export default function Card6() {
	return (
		<Box title="Chart 6" description="Description" width="wide">
			<Tabs list={["First tab", "Second tab", "Third tab"]} />
			<Chart6 />
		</Box>
	);
}
