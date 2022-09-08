/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import withReduxStore from "../lib/with-redux-store";
import "../public/style/style.css";

interface Props {
	reduxStore: any;
}

class MyApp extends App<Props> {
	render() {
		const { Component, pageProps, reduxStore } = this.props;
		const AnyComponent = Component as any;
		return (
			<Container>
				<Head>
					<meta name="viewport" content="width=device-width, user-scalable=no" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-core" />
					<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-converter" />
					<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/facemesh" />
					<link rel="manifest" href="/manifest.json" />
				</Head>
				<Provider store={reduxStore}>
					<AnyComponent {...pageProps} />
				</Provider>
			</Container>
		);
	}
}

export default withReduxStore(MyApp);
