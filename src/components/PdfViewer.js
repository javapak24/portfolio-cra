import { Button } from 'semantic-ui-react';
import React, { useState } from 'react';

const PdfViewer = ({ pdfUrl }) => {
  pdfUrl = './case-study-aws.pdf';
  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState(0); // Key to force iframe reload

  // Handler for changing pages
  const handlePageChange = (increment) => {
    const newPage = Math.max(1, currentPage + increment); // Prevent page < 1
    setCurrentPage(newPage);
    setKey((prevKey) => prevKey + 1); // Update key to force iframe re-render
  };

  // Generate the URL with the current page
  const pdfWithParams = `${pdfUrl}#page=${currentPage}`;

  return (
    <div>
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <Button
          onClick={() => handlePageChange(-1)}
          disabled={currentPage === 1}
          // style={{
          //   backgroundColor: '#333',
          //   color: '#fff',
          //   border: 'none',
          //   borderRadius: '5px',
          //   padding: '8px 16px',
          //   fontSize: '14px',
          //   cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
          //   marginRight: '10px',
          // }}
        >
          Previous Page
        </Button>
        <span style={{ margin: '0 10px', fontWeight: 'bold' }}>
          Page: {currentPage}
        </span>
        <Button
          onClick={() => handlePageChange(1)}
          // style={{
          //   backgroundColor: '#333',
          //   color: '#fff',
          //   border: 'none',
          //   borderRadius: '5px',
          //   padding: '8px 16px',
          //   fontSize: '14px',
          //   cursor: 'pointer',
          //   marginLeft: '10px',
          // }}
        >
          Next Page
        </Button>
      </div>
      <div
        style={{
          border: '1px solid #ccc',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <iframe
          className="responsive-iframe"
          key={key} // Force iframe re-render when key changes
          src={pdfWithParams}
          title="PDF Viewer"
          style={{ width: '100%', height: '600px', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
