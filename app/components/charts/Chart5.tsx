import {
	DonutChart,
	IChartProps,
	IChartDataPoint,
	getGradientFromToken,
	DataVizGradientPalette,
} from "@fluentui/react-charting";

export default function Chart5() {
	const points: IChartDataPoint[] = [
		{
			legend: "first",
			data: 125,
			color: "rgb(166 233 237)",
			gradient: getGradientFromToken(DataVizGradientPalette.gradient1),
			xAxisCalloutData: "2020/04/30",
		},
		{
			legend: "second",
			data: 75,
			color: "rgba(0, 102, 109, 1)",
			gradient: getGradientFromToken(DataVizGradientPalette.gradient2),
			xAxisCalloutData: "2020/04/20",
		},
		{
			legend: "third",
			data: 60,
			color: "rgba(0, 91, 112, 1)",
			gradient: getGradientFromToken(DataVizGradientPalette.gradient1),
			xAxisCalloutData: "2020/04/30",
		},
		{
			legend: "fourth",
			data: 25,
			color: "rgba(0, 183, 195, 1)",
			gradient: getGradientFromToken(DataVizGradientPalette.gradient2),
			xAxisCalloutData: "2020/04/20",
		},
		{
			legend: "fifth",
			data: 75,
			color: "rgba(245, 245, 245, 1)",
			gradient: getGradientFromToken(DataVizGradientPalette.gradient2),
			xAxisCalloutData: "2020/04/20",
		},
	];

	const data: IChartProps = {
		chartTitle: "Donut chart dynamic example",
		chartData: points,
	};

	return (
		<DonutChart
			data={data}
			width={210}
			height={300}
			valueInsideDonut={1000}
			innerRadius={80}
			hideLegend={true}
			hideLabels={true}
			showLabelsInPercent={true}
		/>
	);
}
