import { IChartProps, LineChart } from "@fluentui/react-charting";

export default function Chart3() {
	const data: IChartProps = {
		chartTitle: "Line Chart",
		lineChartData: [
			{
				legend: "Line 1",
				data: [
					{
						x: new Date("2020-01-03T00:00:00.000Z"),
						y: 50000,
						onDataPointClick: () => alert("click on 217000"),
					},
					{
						x: new Date("2020-02-03T10:00:00.000Z"),
						y: 59000,
						onDataPointClick: () => alert("click on 217123"),
					},
					{
						x: new Date("2020-03-05T11:00:00.000Z"),
						y: 40000,
						onDataPointClick: () => alert("click on 217124"),
					},
					{
						x: new Date("2020-04-14T00:00:00.000Z"),
						y: 50000,
						onDataPointClick: () => alert("click on 248000"),
					},
					{
						x: new Date("2020-05-15T00:00:00.000Z"),
						y: 52000,
						onDataPointClick: () => alert("click on 252000"),
					},
					{
						x: new Date("2020-06-06T00:00:00.000Z"),
						y: 62000,
						onDataPointClick: () => alert("click on 274000"),
					},
				],
				color: "rgba(0, 183, 195, 1)",
				lineOptions: {
					lineBorderWidth: "1",
				},
				onLineClick: () => console.log("From_Legacy_to_O365"),
			},
			{
				legend: "Line 2",
				data: [
					{
						x: new Date("2020-01-03T00:00:00.000Z"),
						y: 70000,
					},
					{
						x: new Date("2020-02-04T00:00:00.000Z"),
						y: 93000,
					},
					{
						x: new Date("2020-03-05T00:00:00.000Z"),
						y: 88000,
					},
					{
						x: new Date("2020-04-06T00:00:00.000Z"),
						y: 20000,
					},
					{
						x: new Date("2020-05-16T00:00:00.000Z"),
						y: 82000,
					},
					{
						x: new Date("2020-06-08T00:00:00.000Z"),
						y: 10000,
					},
				],
				color: "rgba(177, 70, 194, 1)",
				lineOptions: {
					lineBorderWidth: "2",
				},
			},
		],
	};

	return (
		<LineChart
			culture={"rs-ss"}
			data={data}
			legendsOverflowText={"Overflow Items"}
			yMinValue={0}
			yMaxValue={100000}
			yAxisTickCount={5}
			height={200}
			width={550}
			xAxisTickCount={6}
			xAxisTitle="X-axis title"
			yAxisTitle="Y-axis title"
			rotateXAxisLables={true}
			enablePerfOptimization={true}
		/>
	);
}
