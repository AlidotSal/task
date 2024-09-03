import Box from "../Box";
import Tabs from "../Tabs";
import Chart3 from "../charts/Chart3";

export default function Card3() {
	return (
		<Box
			title="Chart 3"
			description="Description"
			footer={
				<a className="card-footer" href="#">
					View details
				</a>
			}
			width="wide"
		>
			<Tabs list={["7 days", "30 days", "60 days"]} />
			<Chart3 />
		</Box>
	);
}
