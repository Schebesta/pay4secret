import styles from "../../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
import { useSigner, useNetwork, useBalance } from 'wagmi';
import { useState, useEffect } from 'react';





export function fetchText(address, requestPath) {
	
	setLoading(true);
	const baseUrl = 'http://localhost:3001/'
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	};

	console.log(`${baseUrl}${requestPath}/${address}`)

	fetch(`${baseUrl}${requestPath}/${address}`, requestOptions)
		.then(response => response.text()) 
		.then((response) => {
			setTxData(response);
			setLoading(false);
		});
}

export function fetchBody(requestPath) {
	const baseUrl = 'http://localhost:3001/'
	setLoading(true);
	const requestOptions = {
		method: "GET",
		headers: { "Content-Type": "application/json" },
		body: {}
	};
	console.log("test")
	fetch(`${baseUrl}${requestPath}`, requestOptions)
		.then(response => response.body) 
		.then((response) => {
			setTxData(response);
			setLoading(false);
		});
}
