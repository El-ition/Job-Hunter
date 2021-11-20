import { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
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

  const handleData = (e) => {
    const data = e.target.name;
    const value = e.target.value;
    console.log(data, value);
    setPage(1);
    setDatas((prev) => {
      return { ...prev, [data]: value };
    });
  };

  return (
    <div>
      <Container className="my-4">
        <h1>Job Seeker</h1>
        {loading && (
          <div
            className="d-flex align-items-center"
            style={{ justifyContent: 'space-between' }}
          >
            <strong>Loading...</strong>
            <div
              className="spinner-border ml-5"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        )}
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
        {!loading && jobs.length !== 0 && (
          <JobsPaginations page={page} setPage={setPage} isItNxt={isItNxt} />
        )}

        {jobs.length !== 0 ? (
          <JobList jobs={jobs} />
        ) : !loading ? (
          <Card>
            <Card.Title
              className="p-3"
              style={{ color: '#0886bd', textAlign: 'center' }}
            >
              No Job Found!
            </Card.Title>
          </Card>
        ) : (
          ''
        )}
        {!loading && jobs.length !== 0 && (
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
