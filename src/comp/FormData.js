import { Form, Col } from 'react-bootstrap';
import { categoryList, companyOption, levelList } from '../sel/companySel';

function FormData({ datas, handleData }) {
  return (
    <Form className="mb-4">
      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          as={Col}
          name="category"
          value={datas?.category}
          onChange={(e) => handleData(e)}
        >
          <option value="default">Select Category</option>
          {categoryList.map((cat, i) => (
            <option value={cat} key={i}>
              {cat}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          as={Col}
          name="company"
          value={datas?.company}
          onChange={(e) => handleData(e)}
        >
          <option value="default">Select Company</option>
          {companyOption.map((opt) => opt)}
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Select
          aria-label="Default select example"
          as={Col}
          name="level"
          value={datas?.level}
          onChange={(e) => handleData(e)}
        >
          <option value="default">Select Your Level</option>
          {levelList.map((lvl, i) => (
            <option value={lvl} key={i}>
              {lvl}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
}

export default FormData;
