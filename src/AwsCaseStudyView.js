import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import { Segment, Container, SegmentGroup } from 'semantic-ui-react';
import PdfViewer from './components/PdfViewer';

export default function AwsCaseStudyView() {
  return (
    <div className="App">
      <Container text style={{ marginTop: '7em' }}>
        <MyHeader />
        <SegmentGroup style={{ margin: '20px' }}>
          <h2>
            <a href="#/case-study-aws">
              Case Study for AWS S3 File Upload Project
            </a>
          </h2>
          <Segment>
            <a
              href="/portfolio-cra/case-study-aws.pdf"
              class="resbutton"
              download
            >
              Click Here to Download a PDF of My Case Study!
            </a>
          </Segment>
          <Segment>
            <a
              href="/portfolio-cra/case-study-aws.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              Click Here to Open a PDF of My Case Study!
            </a>
          </Segment>
        </SegmentGroup>
        <PdfViewer pdfUrl={'/portfolio-cra/case-study-aws.pdf'}></PdfViewer>
        <MyFooter />
      </Container>
    </div>
  );
}
