import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import useFetchJ from './useFetchJ';

function App() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJ(data, page);

  return (
    <div>
      <Container>
        {loading && <h1> Loading ...</h1>}
        {error && <h1> Oops!!</h1>}
        <h1>{jobs.length}</h1>
        {/* {jobs.map((job) => {
          return 
        })} */}
      </Container>
    </div>
  );
}

export default App;
