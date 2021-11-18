import { Pagination } from 'react-bootstrap';

function JobsPaginations({ page, setPage, isItNxt }) {
  const handlePage = (amount) => {
    setPage((prev) => prev + amount);
  };
  return (
    <Pagination size="sm">
      {page !== 1 && <Pagination.Prev onClick={() => handlePage(-1)} />}
      {page > 2 && (
        <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
      )}
      {page > 2 && <Pagination.Ellipsis />}
      {page !== 1 && (
        <Pagination.Item onClick={() => handlePage(-1)}>
          {page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{page} </Pagination.Item>
      {isItNxt && (
        <Pagination.Item onClick={() => handlePage(1)}>
          {page + 1}
        </Pagination.Item>
      )}

      {isItNxt && <Pagination.Next onClick={() => handlePage(1)} />}
    </Pagination>
  );
}

export default JobsPaginations;
