import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import JobList from './comp/JobList';
import FormData from './comp/FormData';
import JobsPaginations from './comp/JobsPaginations';
import { jobJokes } from './jobJoke';
import useFetchJ from './useFetchJ';

function App() {
  const [datas, setDatas] = useState();
  const [page, setPage] = useState(1);
  const [joke, setJoke] = useState(jobJokes[0]);
  const { jobs, loading, error, isItNxt } = useFetchJ(datas, page);
  // console.log(jobs);
  useEffect(() => {
    setJoke(jobJokes[Math.floor(Math.random() * 11)]);
  }, []);

  const handleData = (...data) => {
    setPage(1);
    if (data.length === 0) return;
    if (data.length === 1) {
      if (data.join() === 'category') {
        setDatas((prev) => {
          return { ...prev, category: data.join() };
        });
      }
    }
  };
  console.log(datas);
  return (
    <div>
      <Container className="my-4">
        <h1>Job Seeker</h1>
        {loading && <h1> Loading ...</h1>}
        {error && <h1> Oops!!</h1>}
        {!loading && (
          <h2
            className="text-muted font-weight-light"
            style={{ fontWeight: 'lighter', fontSize: '1rem' }}
          >
            {joke} <span></span>
          </h2>
        )}
        {!loading && <FormData datas={datas} handleData={handleData} />}
        {!loading && (
          <JobsPaginations page={page} setPage={setPage} isItNxt={isItNxt} />
        )}

        <JobList jobs={jobs} />
        {!loading && (
          <JobsPaginations page={page} setPage={setPage} isItNxt={isItNxt} />
        )}
      </Container>

      {!loading && (
        <footer
          className="text-muted font-weight-light"
          style={{ textAlign: 'center', margin: '1rem' }}
        >
          .: Jobs from themuse API :.
        </footer>
      )}
    </div>
  );
}

export default App;
