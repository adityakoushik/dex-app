import React, { useState } from 'react';
import { getQuote, swapTokens } from '../1inch';

const Swap = ({ user }) => {
	const [fromToken, setFromToken] = useState('');
	const [toToken, setToToken] = useState('');
	const [amount, setAmount] = useState('');
	const [quote, setQuote] = useState(null);

	const handleSwap = async () => {
		if (!fromToken || !toToken || !amount) return;

		const swapData = await swapTokens(fromToken, toToken, amount, user.get('ethAddress'), user.get('ethAddress'));
		console.log('Swap data:', swapData);
	};

	const handleGetQuote = async () => {
		if (!fromToken || !toToken || !amount) return;

		const quoteData = await getQuote(fromToken, toToken, amount);
		setQuote(quoteData);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="From Token Address"
				value={fromToken}
				onChange={(e) => setFromToken(e.target.value)}
			/>
			<input
				type="text"
				placeholder="To Token Address"
				value={toToken}
				onChange={(e) => setToToken(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<button onClick={handleGetQuote}>Get Quote</button>
			{quote && <div>Quote: {quote.toTokenAmount}</div>}
			<button onClick={handleSwap}>Swap Tokens</button>
		</div>
	);
};

export default Swap;
