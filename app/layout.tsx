import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Interview Task",
	description: "A Dashboard To DIsplay Information.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="m-0 font-body">{children}</body>
		</html>
	);
}
