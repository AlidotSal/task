import {
	DataVizPalette,
	GaugeChart,
	GaugeChartVariant,
} from "@fluentui/react-charting";

export default function Chart1({ value }: { value: number }) {
	return (
		<GaugeChart
			width={298}
			height={200}
			segments={[
				{ size: value, legend: "Label 1", color: "rgb(0 183 195)" },
				{
					size: 100 - value,
					color: DataVizPalette.disabled,
					legend: "Label 2",
				},
			]}
			chartValue={value}
			variant={GaugeChartVariant.SingleSegment}
			hideTooltip={true}
		/>
	);
}
