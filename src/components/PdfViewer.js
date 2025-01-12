import { Button } from 'semantic-ui-react';
import React, { useState } from 'react';

const PdfViewer = ({ pdfUrl }) => {
  pdfUrl = './case-study-aws.pdf';

  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState(0); // Force re-render

  const handlePageChange = (increment) => {
    const newPage = Math.max(1, currentPage + increment);
    setCurrentPage(newPage);
    setKey((prevKey) => prevKey + 1); // Forces iframe to reload
  };

  const pdfWithParams = `${pdfUrl}#page=${currentPage}`;

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      {/* Page Navigation Buttons */}
      <div style={{ marginBottom: '10px' }}>
        <Button
          onClick={() => handlePageChange(-1)}
          disabled={currentPage === 1}
          // style={{
          //   backgroundColor: "#333",
          //   color: "#fff",
          //   border: "none",
          //   borderRadius: "5px",
          //   padding: "8px 16px",
          //   fontSize: "14px",
          //   cursor: currentPage === 1 ? "not-allowed" : "pointer",
          //   marginRight: "10px",
          // }}
        >
          Previous Page
        </Button>
        <span
          style={{ fontWeight: 'bold', fontSize: '16px', margin: '0 10px' }}
        >
          Page: {currentPage}
        </span>
        <Button
          onClick={() => handlePageChange(1)}
          // style={{
          //   backgroundColor: "#333",
          //   color: "#fff",
          //   border: "none",
          //   borderRadius: "5px",
          //   padding: "8px 16px",
          //   fontSize: "14px",
          //   cursor: "pointer",
          //   marginLeft: "10px",
          // }}
        >
          Next Page
        </Button>
      </div>

      {/* Responsive PDF Viewer */}
      <div className="responsive-iframe">
        <iframe
          key={key} // Force iframe re-render with updated page
          src={pdfWithParams}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default PdfViewer;
