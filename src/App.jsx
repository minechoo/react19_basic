import { useState } from 'react';
import './app.css';
import Counter from './Counter';

function App() {
	const [Show, setShow] = useState(false);
	return (
		<>
			<h1>React hook</h1>
			<button onClick={() => setShow(!Show)}>Toggle</button>
			{Show && <Counter />}
		</>
	);
}
export default App;
