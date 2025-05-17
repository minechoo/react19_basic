import { useEffect, useState } from 'react';
import './app.css';

function App() {
	const [MovieData, setMovideData] = useState([]);

	useEffect(() => {
		//가급적 fetching함수 정의도 useEffect안쪽에서 선언하는 것이 효율적
		//컴포넌트 재랜더링시 마다 함수가 불필요하게 재 정의되는 것 방지
		const fetchMovies = async () => {
			const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
			const API_KEY = 'ab9b6a7b403af65679b0659d8ede19bc';
			const REQ_URL = `${BASE_URL}?api_key=${API_KEY}&language=ko-KR`;

			const response = await fetch(REQ_URL);
			const data = await response.json();
			console.log(data.results);
			setMovideData(data.results);
		};

		fetchMovies();
	}, []);

	return (
		<>
			{MovieData.map((el) => {
				return (
					<article key={el.id}>
						<h2>{el.title}</h2>
					</article>
				);
			})}
		</>
	);
}
export default App;

/*
  서버 데이터를 컴포넌트 출력 흐름
  1. 서버 데이터가 담길 빈 배열 state생성
  2. useEffect를 활용해서 컴포넌트 처음 마운트시 한번만 서버 데이터 호출 뒤 빈 state에 담아줌 (async await)
  3. JSX를 통해 state에 담겨있는 배열값을 map으로 반복돌면서 렌더링
*/
