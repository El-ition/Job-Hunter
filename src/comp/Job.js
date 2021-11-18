import { Badge, Card, Button } from 'react-bootstrap';

function Job({ job }) {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.name} -{' '}
              <span
                className="text-muted font-weight-light"
                style={{ fontWeight: 'normal' }}
              >
                {job.company.name}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(job.publication_date).toLocaleDateString()}
            </Card.Subtitle>
            {/* {job.locations.map((loc, i) => (
              <Badge key={i}>{loc}</Badge>
            ))} */}
            <Badge bg="dark" className="mr-2" style={{ marginRight: '5px' }}>
              {job.locations[0]?.name}
            </Badge>
            <Badge bg="secondary">{job.levels[0]?.short_name}</Badge>
          </div>
          <Button
            variant="secondary"
            onClick={() => window.open(job.refs.landing_page, '_blank')}
          >
            Source
          </Button>
        </div>
        <Card.Text>
          <Button variant="primary" className="mt-2">
            Details
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Job;
