import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import { Segment, Container } from 'semantic-ui-react';
import PdfViewer from './components/PdfViewer';

export default function CaseView() {
  return (
    <div>
      <Container text style={{ marginTop: '7em' }}>
        <MyHeader></MyHeader>
        <Segment>
          <a href="/case-study-aws.pdf" class="resbutton" download>
            Click Here to download My Case Study
          </a>
        </Segment>
        <PdfViewer></PdfViewer>
        <MyFooter></MyFooter>
      </Container>
    </div>
  );
}