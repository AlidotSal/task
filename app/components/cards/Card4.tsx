import Box from "../Box";
import Chart4 from "../charts/Chart4";

export default function Card4() {
	return (
		<Box
			title="Chart 4"
			description="Description"
			footer={
				<a className="card-footer" href="#">
					View details
				</a>
			}
			width="slim"
		>
			<Chart4 />
		</Box>
	);
}
