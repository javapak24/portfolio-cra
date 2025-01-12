import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  pdfUrl = './case-study-aws.pdf';
  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="750px"
      style={{ border: 'none' }}
      title="PDF Viewer"
    />
  );
};

export default PdfViewer;
