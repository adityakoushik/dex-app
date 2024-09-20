import './App.css';
import ConnectButton from './Components/ConnectButton';
import { useState } from 'react';
import Swap from './Components/Swap';

function App() {
	const [user, setUser] = useState(null);
	return (
		<div className="App">
			<h1>Token Swap DEX</h1>
			<ConnectButton onConnect={setUser} />
			{
				user && <Swap user={user} />
			}
		</div>
	);
}

export default App;
