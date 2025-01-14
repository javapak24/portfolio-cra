import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import { Segment, Container, SegmentGroup } from 'semantic-ui-react';
import PdfViewer from './components/PdfViewer';

export default function BbbCaseStudyView() {
  return (
    <div className="App">
      <Container text style={{ marginTop: '7em' }}>
        <MyHeader />
        <SegmentGroup style={{ margin: '20px' }}>
          <h2>
            <a href="#/case-study-bbb">
              Case Study for my Freelance Black Belt Boxing Website Project
            </a>
          </h2>
          <Segment>
            <a
              href="/portfolio-cra/case-study-bbb.pdf"
              class="resbutton"
              download
            >
              Click Here to Download a PDF of My Case Study!
            </a>
          </Segment>
          <Segment>
            <a
              href="/portfolio-cra/case-study-bbb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              Click Here to Open a PDF of My Case Study!
            </a>
          </Segment>
        </SegmentGroup>
        <PdfViewer pdfUrl={'/portfolio-cra/case-study-bbb.pdf'}></PdfViewer>
        <MyFooter />
      </Container>
    </div>
  );
}
