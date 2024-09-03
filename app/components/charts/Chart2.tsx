import {
	VerticalBarChart,
	IVerticalBarChartDataPoint,
} from "@fluentui/react-charting";

export default function Chart2() {
	const points: IVerticalBarChartDataPoint[] = [
		{
			x: "Jan",
			y: 68000,
			color: "rgb(0 183 195)",
		},
		{
			x: "Feb",
			y: 80000,
			color: "rgb(0 183 195)",
		},
		{
			x: "Mar",
			y: 64000,
			color: "rgb(0 183 195)",
		},
		{
			x: "Apr",
			y: 70000,
			color: "rgb(0 183 195)",
		},
		{
			x: "May",
			y: 64000,
			color: "rgb(0 183 195)",
		},
		{
			x: "Jun",
			y: 90000,
			color: "rgb(0 183 195)",
		},
	];
	return (
		<VerticalBarChart
			data={points}
			height={200}
			width={200}
			barWidth={23}
			maxBarWidth={30}
			yMaxValue={100000}
			yAxisTickCount={5}
			yAxisTitle={"Y-axis title"}
			xAxisTitle={"X-axis title"}
		/>
	);
}
