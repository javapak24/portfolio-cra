import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  pdfUrl = './case-study-aws.pdf';
  return (
    <div className="responsive-iframe">
      <iframe src={pdfUrl} title="PDF Viewer" />
    </div>
  );
};

export default PdfViewer;
