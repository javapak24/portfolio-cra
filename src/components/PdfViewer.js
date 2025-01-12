import { Button } from 'semantic-ui-react';
import React, { useState } from 'react';

const PdfViewer = ({ pdfUrl }) => {
  const [currentPage, setCurrentPage] = useState(1);
  pdfUrl = './case-study-aws.pdf';
  // Handler for changing pages
  const handlePageChange = (increment) => {
    setCurrentPage((prevPage) => Math.max(1, prevPage + increment)); // Prevent page < 1
  };

  // Update the iframe src with the current page
  const pdfWithParams = `${pdfUrl}#page=${currentPage}`;

  return (
    <div>
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <Button
          onClick={() => handlePageChange(-1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        <span style={{ margin: '0 10px' }}>Page: {currentPage}</span>
        <Button onClick={() => handlePageChange(1)}>Next Page</Button>
      </div>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={pdfWithParams}
          title="PDF Viewer"
          style={{ width: '100%', height: '600px', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
