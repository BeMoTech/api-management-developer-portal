import * as React from "react";

export class CustomNavbar extends React.Component {
	public state: any;

	constructor(props) {
		super(props);
	}

	public render(): JSX.Element {
		return (
			<div dangerouslySetInnerHTML={{ __html: `<custom-navbar-runtime></custom-navbar-runtime>` }} />
		);
	}
}