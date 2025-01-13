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
              <SegmentGroup>
                <h2>Case Study for AWS S3 File Upload Project</h2>
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
              <SegmentGroup>
                <h2>
                  Case Study for my freelance Black Belt Boxing Website Project
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
          </GridRow>
        </Grid>
        <MyFooter></MyFooter>
      </Container>
    </div>
  );
}
