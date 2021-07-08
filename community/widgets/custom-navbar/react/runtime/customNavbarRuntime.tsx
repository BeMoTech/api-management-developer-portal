import * as React from "react";
import {RuntimeComponent} from "@paperbits/react/decorators";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	}),
);

@RuntimeComponent({
	selector: "custom-navbar-runtime"
})
export class CustomNavbarRuntime extends React.Component {

	public toggleMenu(): void {
	}

	constructor(props) {
		super(props);
	}

	public render() {
		const classes = useStyles();

		return (
			// <div className="custom-navbar">
			// 	<div className="mdc-layout-grid">
			// 		<div className="mdc-layout-grid__inner">
			// 			<div className="navbar-infos mdc-layout-grid__cell--span-3">
			// 				<a href="/">
			// 					<img src="Logo.svg" alt=""/>
			// 				</a>
			// 				<span className="navbar-title">&#x3c;dev/portal&#x3e;</span>
			// 			</div>
			// 			<div
			// 				className="navbar-navigation mdc-layout-grid__cell--span-7 mdc-layout-grid--align-right">
			// 				<nav>
			// 					<a href="/">HOME</a>
			// 					<a href="/api">API</a>
			// 					<a href="/documentation">DOCUMENTATION</a>
			// 				</nav>
			// 			</div>
			// 			{/* Avatar BUTTON */}
			// 			<div
			// 				className="navbar-navigation mdc-layout-grid__cell--span-2 mdc-layout-grid--align-right">
			// 				<button className="navbar-avatar-button">AA</button>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
			<div><h1>TOTO</h1></div>
		);
	}
}
