import axios from 'axios';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import config from '../../../../config.json';
import { sortedData } from '../../../../interface';
import '../../DMR.module.css';

const PODesc = ({ searchDetails }: { searchDetails: sortedData }) => {
  const data = searchDetails;
  const [inputList, setInputList] = useState(data);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('DMR DESC', data);
    e.preventDefault();
    //Type 'MouseEvent<HTMLButtonElement, MouseEvent>'
    axios
      .patch(`${config.SERVER_URL}poDetails/${data.ponumber}`, data.details)
      .then((res) => {
        console.log('Response', res);
        if (res.status === 200) {
          toast.success('Data Updated Successfully.');
        }
        // ;
      })
      .catch((err) => {
        toast.error('Data Not Updated.');
        console.log(err);
      });
  };
  return (
    <div className="container-table100 " style={{ justifyContent: 'center' }}>
      <div className="wrap-table100" style={{ width: 'inherit' }}>
        <div className="table">
          <div className="rowo header">
            <div className="cell"></div>
            <div className="cell">PO Number</div>
            <div className="cell">PO Name</div>
            <div className="cell">Project Name</div>
            <div className="cell">Date</div>
            <div className="cell">File</div>
          </div>
          <div className="rowo">
            <div className="cell"></div>
            <div className="cell" data-title="PO Number">
              {data.ponumber}
            </div>
            <div className="cell" data-title="PO Name">
              {data.poname}
            </div>
            <div className="cell" data-title="Project Name">
              {data.projectName}
            </div>
            <div className="cell" data-title="Date">
              {data.date}
            </div>
            <div
              className="cell dflex justify-content-center"
              data-title="filename"
              style={{ display: 'flex' }}
            >
              <div>{data.filename}</div>
              <div className="submitBTN" style={{ width: '2.5rem' }}>
                <a
                  href={data.filePath}
                  // `${'https://team1backendbucket.s3.ap-south-1.amazonaws.com/'}${data.filename?.replace(
                  //   /\s+/g,
                  //   '_'
                  // )}`
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="m8 12 4 4 4-4"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M12 16V4M19 17v.6c0 1.33-1.07 2.4-2.4 2.4H7.4C6.07 20 5 18.93 5 17.6V17"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data.details?.map((elementInArray, index) => {
        return (
          <Row
            key={index}
            className=""
            style={{ display: 'block', marginTop: '2rem', width: '100%' }}
          >
            <Row style={{ margin: '0', width: '100%', padding: '0' }}>
              <Col className="form__group field" style={{ maxWidth: '4rem' }}>
                <input
                  className="text-input form__field"
                  type="text"
                  name="index"
                  id="index"
                  value={index + 1}
                  disabled
                />
                <label htmlFor="index" className="form__label">
                  S.No.
                </label>
              </Col>
              <Col className="form__group field">
                <input
                  className="text-input form__field"
                  type="text"
                  name="description"
                  id="description"
                  value={elementInArray?.description}
                  onChange={(e) => {
                    elementInArray.description = e.target.value;
                    setInputList({ ...inputList });
                  }}
                  required
                  aria-required
                />
                <label htmlFor="description" className="form__label">
                  Product
                </label>
              </Col>
              <Col className="form__group field">
                <input
                  className="text-input form__field"
                  type="currency"
                  name="amount"
                  id="amount"
                  value={elementInArray.amount}
                  onChange={(e) => {
                    elementInArray.amount = e.target.value;
                    setInputList({ ...inputList });
                  }}
                  required
                  aria-required
                />
                <label htmlFor="amount" className="form__label">
                  Amount
                </label>
              </Col>
            </Row>
            <Row
              className="mt-3"
              style={{ margin: '0', width: '100%', padding: '0' }}
            >
              <Col className="form__group field">
                <input
                  className="text-input form__field"
                  type="currency"
                  name="raisedAmount"
                  id="raisedAmount"
                  value={elementInArray.raisedAmount}
                  onChange={(e) => {
                    elementInArray.raisedAmount = e.target.value;
                    setInputList({ ...inputList });
                  }}
                  required
                  aria-required
                />
                <label htmlFor="raisedAmount" className="form__label">
                  Raised Amount
                </label>
              </Col>
              <Col className="form__group field">
                <input
                  className="text-input form__field"
                  type="number"
                  name="dmrNo"
                  id="dmrNo"
                  value={elementInArray.dmrNo}
                  onChange={(e) => {
                    elementInArray.dmrNo = e.target.value;
                    setInputList({ ...inputList });
                  }}
                  required
                  aria-required
                />
                <label htmlFor="dmrNO" className="form__label">
                  DMR No.
                </label>
              </Col>
              <Col className="form__group field">
                <input
                  className="text-input form__field"
                  name="date"
                  id="date"
                  type="date"
                  value={elementInArray.date}
                  onChange={(e) => {
                    elementInArray.date = e.target.value;
                    setInputList({ ...inputList });
                  }}
                  required
                  aria-required
                />
                <label htmlFor="amount" className="form__label">
                  Date
                </label>
              </Col>
            </Row>
          </Row>
        );
      })}
      {data.details ? (
        <div className=" justify-content-between mt-3">
          <button
            type="submit"
            className="mx-auto col-md-6 submitBtn btn btn-outline-dark"
            onClick={handleSubmit}
            style={{ width: ' auto' }}
          >
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PODesc;
