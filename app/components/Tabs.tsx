import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import type { SelectTabData, SelectTabEvent } from "@fluentui/react-components";

type Props = {
	list: string[];
	onTabSelect?: (_event: SelectTabEvent, data: SelectTabData) => void;
};

const useStyles = makeStyles({
	root: {
		alignItems: "flex-start",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		rowGap: "20px",
	},
	tabList: {
		margin: "0 auto",
		"@media (min-width:768px)": {
			margin: "0",
		},
	},
});

export default function Tabs({ list, onTabSelect }: Props) {
	const styles = useStyles();

	return (
		<div className={styles.root}>
			<TabList
				className={styles.tabList}
				defaultSelectedValue="tab1"
				size="small"
				onTabSelect={onTabSelect}
			>
				<Tab id="tab1" value="tab1">
					{list[0]}
				</Tab>
				<Tab id="tab2" value="tab2">
					{list[1]}
				</Tab>
				<Tab id="tab3" value="tab3">
					{list[2]}
				</Tab>
			</TabList>
		</div>
	);
}
