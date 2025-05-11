import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layout/Body/Body';
import LeftPanel from './layout/LeftPanel/LeftPanel';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность',
			date: new Date()
		},
		{
			title: 'Поход в годы',
			text: 'Различают альпинизм и горный туризм. Если в ',
			date: new Date()
		}
	];
	const [inputData, setInputData] = useState('');

	const InputChange = (event) => {
		setInputData(event.target.value);
		console.log(inputData);
	};

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<input type="text" value={inputData} onChange={InputChange}/>
			</Body>
		</div>
	);
}

export default App;
