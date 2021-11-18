import { useState } from 'react';
import { Badge, Card, Button, Collapse } from 'react-bootstrap';

function Job({ job }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="mb-3">
      <Card.Body>
        <div
          className="d-flex justify-content-between"
          style={{ alignItems: 'flex-start' }}
        >
          <div>
            <Card.Title>
              <span style={{ color: '#0886bd' }}>{job.name} - </span>
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
            size="sm"
            onClick={() => window.open(job.refs.landing_page, '_blank')}
            // style={{ padding: '1rem', height: '2rem' }}
          >
            Source
          </Button>
        </div>
        <Card.Text>
          <Button
            variant="outline-dark"
            className="mt-2 noout"
            onClick={() => setOpen((prev) => !prev)}
          >
            {!open ? 'Show Details' : 'Hide Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: job.contents }}
          ></div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default Job;
