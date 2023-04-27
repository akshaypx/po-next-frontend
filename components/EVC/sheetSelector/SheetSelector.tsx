import { useEffect, useState } from 'react';
import { utils } from 'xlsx';
import { Card, DropdownButton, Dropdown } from 'react-bootstrap';

export interface ISheetSelector {
  workbook: any;
  selectedSheetIndex: any;
  setSelectedSheetIndex: any;
  setData: any;
  data: any;
  setHeader: any;
}

const SheetSelector = ({
  workbook,
  selectedSheetIndex,
  setSelectedSheetIndex,
  setData,
  data,
  setHeader,
}: ISheetSelector) => {
  useEffect(() => {
    setSelectedSheetIndex(0);
  }, []);

  useEffect(() => {
    const readData = () => {
      const sheetdata = data;
      setData(sheetdata);
    };
    readData();
  }, [data, setData]);

  const handleSelectChange = (e: any) => {
    setSelectedSheetIndex(e);
    const worksheetNames = workbook.SheetNames;
    const selectedWorksheet = workbook.Sheets[worksheetNames[e]];
    const sheetData = utils.sheet_to_json(selectedWorksheet, {
      raw: false,
      dateNF: 'yyyy-mm-dd',
      // cellDates: true,
    });
    const sheetData1 = utils.sheet_to_json(selectedWorksheet, {
      header: 1,
      raw: false,
      dateNF: 'yyyy-mm-dd',
      // cellDates: true,
    });
    console.log(sheetData1, 'sheetdata header');
    setData(sheetData);
    setHeader(sheetData1[0]);
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between mt-1">
          <h5 className="mt-1 fw-bolder">
            Selected Sheet: {workbook.SheetNames[selectedSheetIndex]}
          </h5>
          <DropdownButton
            className="mb-1"
            variant="outline-dark"
            title="Select sheet"
            onSelect={handleSelectChange}
          >
            {workbook.SheetNames.map((sheetName: any, index: number) => (
              <Dropdown.Item key={index} eventKey={index}>
                {sheetName}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SheetSelector;
