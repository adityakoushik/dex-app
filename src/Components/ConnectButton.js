import React, { useEffect, useState } from 'react';
import Moralis from 'moralis';

const ConnectButton = ({ onConnect }) => {
	const [user, setUser] = useState(null);

	const handleConnect = async () => {
		try {
			await Moralis.Web3.authenticate();
			const currentUser = Moralis.User.current();
			setUser(currentUser);
			onConnect(currentUser);
		} catch (error) {
			console.error('Error connecting to Moralis:', error);
		}
	};

	useEffect(() => {
		const currentUser = Moralis.User.current();
		if (currentUser) setUser(currentUser);
	}, []);

	return (
		<button onClick={handleConnect}>
			{user ? `Connected: ${user.get('ethAddress')}` : 'Connect Wallet'}
		</button>
	);
};

export default ConnectButton;
