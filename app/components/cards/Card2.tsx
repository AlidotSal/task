import Box from "../Box";
import Tabs from "../Tabs";
import Chart2 from "../charts/Chart2";

export default function Card2() {
	return (
		<Box
			title="Chart 2"
			description="Description"
			footer={
				<a className="card-footer" href="#">
					View details
				</a>
			}
			width="normal"
		>
			<Tabs list={["7 days", "30 days", "60 days"]} />
			<Chart2 />
		</Box>
	);
}
