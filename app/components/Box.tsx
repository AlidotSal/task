import {
	makeStyles,
	Button,
	Caption1,
	Text,
	tokens,
	CardFooter,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import { Card, CardHeader } from "@fluentui/react-components";

type Props = {
	title: string;
	description: string;
	footer?: React.ReactNode;
	width: "slim" | "normal" | "wide";
	children: React.ReactNode;
};

const useStyles = makeStyles({
	caption: {
		color: tokens.colorNeutralForeground3,
	},

	text: { margin: "0" },
});

export default function Box({
	title,
	description,
	footer,
	width,
	children,
}: Props) {
	const styles = useStyles();

	return (
		<Card className={`card ${width}`}>
			<CardHeader
				header={<Text weight="bold">{title}</Text>}
				description={
					<Caption1 className={styles.caption}>{description}</Caption1>
				}
				action={
					<Button
						appearance="transparent"
						icon={<MoreHorizontal20Regular />}
						aria-label="More options"
					/>
				}
			/>
			{children}
			{footer ? <CardFooter>{footer}</CardFooter> : null}
		</Card>
	);
}
