import { Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";

export default function List() {
	return (
		<Tree
			aria-label="Default Open"
			defaultOpenItems={[
				"default",
				"default-subtree-1",
				"default-subtree-2",
				"default-subtree-2-1",
				"default-subtree-2-2",
				"default-subtree-2-3",
				"default-subtree-2-4",
				"default-subtree-2-5",
			]}
		>
			<TreeItem itemType="branch" value="default">
				<TreeItemLayout>Group title</TreeItemLayout>
				<Tree>
					<TreeItem itemType="branch" value="default-subtree-1">
						<TreeItemLayout>Option</TreeItemLayout>
					</TreeItem>
					<TreeItem itemType="branch" value="default-subtree-2">
						<TreeItemLayout>Option</TreeItemLayout>
						<Tree>
							<TreeItem itemType="branch" value="default-subtree-2-1">
								<TreeItemLayout>Item</TreeItemLayout>
							</TreeItem>
							<TreeItem itemType="branch" value="default-subtree-2-2">
								<TreeItemLayout>Item</TreeItemLayout>
							</TreeItem>
							<TreeItem itemType="branch" value="default-subtree-2-3">
								<TreeItemLayout>Item</TreeItemLayout>
							</TreeItem>
							<TreeItem itemType="branch" value="default-subtree-2-4">
								<TreeItemLayout>Item</TreeItemLayout>
							</TreeItem>
							<TreeItem itemType="branch" value="default-subtree-2-5">
								<TreeItemLayout>Item</TreeItemLayout>
							</TreeItem>
						</Tree>
					</TreeItem>
				</Tree>
			</TreeItem>
		</Tree>
	);
}
