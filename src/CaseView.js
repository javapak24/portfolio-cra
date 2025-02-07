import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import {
  Segment,
  Container,
  SegmentGroup,
  Grid,
  GridRow,
  GridColumn,
} from 'semantic-ui-react';
import PdfViewer from './components/PdfViewer';

export default function CaseView() {
  return (
    <div>
      <Container text style={{ marginTop: '7em' }}>
        <MyHeader></MyHeader>
        <Grid columns={3} divided>
          <GridRow>
            <GridColumn>
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
              <PdfViewer
                pdfUrl={'/portfolio-cra/case-study-aws.pdf'}
              ></PdfViewer>
            </GridColumn>
            <GridColumn>
              <SegmentGroup style={{ margin: '20px' }}>
                <h2>
                  <a href="#/case-study-bbb">
                    Case Study for my Freelance Black Belt Boxing Website
                    Project
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
              <PdfViewer
                pdfUrl={'/portfolio-cra/case-study-bbb.pdf'}
              ></PdfViewer>
            </GridColumn>
            <GridColumn>
              <SegmentGroup style={{ margin: '20px' }}>
                <h2>
                  <a href="#/case-study-twilio">
                    Case Study for my Twilio Project
                  </a>
                </h2>
                <Segment>
                  <a
                    href="/portfolio-cra/case-study-twilio.pdf"
                    class="resbutton"
                    download
                  >
                    Click Here to Download a PDF of My Case Study!
                  </a>
                </Segment>
                <Segment>
                  <a
                    href="/portfolio-cra/case-study-twilio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    Click Here to Open a PDF of My Case Study!
                  </a>
                </Segment>
              </SegmentGroup>
              <PdfViewer
                pdfUrl={'/portfolio-cra/case-study-twilio.pdf'}
              ></PdfViewer>
            </GridColumn>
          </GridRow>
        </Grid>
        <MyFooter></MyFooter>
      </Container>
    </div>
  );
}
