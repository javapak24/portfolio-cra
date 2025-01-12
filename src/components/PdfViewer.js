import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  pdfUrl = './case-study-aws.pdf';
  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="750px"
      style={{ border: 'none' }}
      title="Case Study AWS"
      scrolling="yes"
      display="block"
      overflow="auto"
    />
  );
};

export default PdfViewer;
