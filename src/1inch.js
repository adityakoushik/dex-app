export const getQuote = async (fromToken, toToken, amount) => {
	const response = await fetch(`https://api.1inch.io/v4.0/1/quote?fromTokenAddress=${fromToken}&toTokenAddress=${toToken}&amount=${amount}`);
	const data = await response.json();
	return data;
};

export const swapTokens = async (fromToken, toToken, amount, fromAddress, toAddress) => {
	const response = await fetch(`https://api.1inch.io/v4.0/1/swap`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			fromTokenAddress: fromToken,
			toTokenAddress: toToken,
			amount,
			fromAddress,
			slippage: 1,
			disableEstimate: false,
			referrerAddress: '',
			recipientAddress: toAddress,
		}),
	});
	const data = await response.json();
	return data;
};
