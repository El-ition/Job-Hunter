import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { categoryList, companyOption, levelList } from '../sel/companySel';

const companyList = [];

function FormData({ datas, handleData }) {
  const [category, setcategory] = useState('');
  const [company, setCompany] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category, company, level);
    handleData(category);
  };
  return (
    <Form className="mb-4" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          as={Col}
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          name="category"
        >
          <option>Select Category</option>
          {categoryList.map((cat) => (
            <option value={cat}>{cat}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          as={Col}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          name="company"
        >
          <option>Select Company</option>
          {companyOption.map((opt) => opt)}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          as={Col}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          name="level"
        >
          <option>Select Your Level</option>
          {levelList.map((lvl) => (
            <option value={lvl}>{lvl}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button
        variant="dark"
        type="submit"
        style={{ justifyContent: 'flex-end' }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default FormData;
