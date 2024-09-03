import { GroupedVerticalBarChart } from "@fluentui/react-charting";

export default function Chart6() {
	const data = [
		{
			name: "XS",
			series: [
				{
					key: "series1",
					data: 67,
					color: "rgb(147 197 253)",
					legend: "MetaData1",
				},
				{
					key: "series2",
					data: 83,
					color: "rgb(29 78 216)",
					legend: "MetaData2",
				},
				{
					key: "series3",
					data: 30,
					color: "rgb(136 136 136)",
					legend: "MetaData3",
				},
			],
		},
		{
			name: "S",
			series: [
				{
					key: "series1",
					data: 67,
					color: "rgb(147 197 253)",
					legend: "MetaData1",
				},
				{
					key: "series2",
					data: 83,
					color: "rgb(29 78 216)",
					legend: "MetaData2",
				},
				{
					key: "series3",
					data: 30,
					color: "rgb(136 136 136)",
					legend: "MetaData3",
				},
			],
		},
		{
			name: "M",
			series: [
				{
					key: "series1",
					data: 67,
					color: "rgb(147 197 253)",
					legend: "MetaData1",
				},
				{
					key: "series2",
					data: 83,
					color: "rgb(29 78 216)",
					legend: "MetaData2",
				},
				{
					key: "series3",
					data: 30,
					color: "rgb(136 136 136)",
					legend: "MetaData3",
				},
			],
		},
		{
			name: "L",
			series: [
				{
					key: "series1",
					data: 67,
					color: "rgb(147 197 253)",
					legend: "MetaData1",
				},
				{
					key: "series2",
					data: 83,
					color: "rgb(29 78 216)",
					legend: "MetaData2",
				},
				{
					key: "series3",
					data: 30,
					color: "rgb(136 136 136)",
					legend: "MetaData3",
				},
			],
		},
		{
			name: "XL",
			series: [
				{
					key: "series1",
					data: 67,
					color: "rgb(147 197 253)",
					legend: "MetaData1",
				},
				{
					key: "series2",
					data: 83,
					color: "rgb(29 78 216)",
					legend: "MetaData2",
				},
				{
					key: "series3",
					data: 30,
					color: "rgb(136 136 136)",
					legend: "MetaData3",
				},
			],
		},
		{
			name: "XXL",
			series: [
				{
					key: "series1",
					data: 67,
					color: "rgb(147 197 253)",
					legend: "MetaData1",
				},
				{
					key: "series2",
					data: 83,
					color: "rgb(29 78 216)",
					legend: "MetaData2",
				},
				{
					key: "series3",
					data: 30,
					color: "rgb(136 136 136)",
					legend: "MetaData3",
				},
			],
		},
	];

	return (
		<GroupedVerticalBarChart
			data={data}
			height={250}
			width={400}
			hideLegend={true}
			hideTooltip={true}
			barwidth={16}
			maxBarWidth={40}
			yMaxValue={100}
			yAxisTickCount={10}
		/>
	);
}
