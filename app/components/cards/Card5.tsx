import Box from "../Box";
import Tabs from "../Tabs";
import Chart5 from "../charts/Chart5";

export default function Card5() {
	return (
		<Box
			title="Chart 5"
			description="Description"
			footer={
				<a className="card-footer" href="#">
					View details
				</a>
			}
			width="normal"
		>
			<Tabs list={["7 days", "30 days", "60 days"]} />
			<Chart5 />
		</Box>
	);
}
