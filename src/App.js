import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { generateData } from './generate-data';

const App = () => {
  const [titles, setTitles] = useState([]);
  const [credits, setCredits] = useState([]);

  const generateDummyData = () => {
    const { titles: generatedTitles, credits: generatedCredits } = generateData();
    setTitles(generatedTitles);
    setCredits(generatedCredits);
  };
  return (
    <div>
      <button onClick={generateDummyData}>Generate dummy data</button>

      {titles?.length && credits?.length ? (
        <div>
          <CSVLink data={titles} filename={'titles.csv'}>
            Download Titles
          </CSVLink>
          <br />
          <CSVLink data={credits} filename={'credits.csv'}>
            Download Credits
          </CSVLink>
        </div>
      ) : null}
    </div>
  );
};

export { App };
