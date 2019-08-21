import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import '../src/Typography/index.css';

import CodeBlock from '../src/CodeBlock';

import Lightbox from '../src/Lightbox';
import DemoImg from './images/1.jpg';

import ReadingProgressBar from '../src/ReadingProgressBar';

const jsCode = `
// JavaScript
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`;

const cssCode = `
/* CSS */
.foo {
  property: 'yo';
}
`;

const htmlCode = `
<!-- HTML -->
<div class="foo">
  <p>Some foo</p>
</div>
`;

const reactCode = `
{/* React */}
<ParentClass>
  <p>Some foo</p>
</ParentClass>
`;

function App() {
  return (
    <div className="site">
      <header className="nav">Logo</header>
      <div style={{ paddingTop: '80px', position: 'relative' }}>
        {/* Demo ReadingProgressBar */}
        <ReadingProgressBar innerStyles={{ zIndex: 1 }} />

        <div className="site-content">
          <h1>Medium UI Kit</h1>
          <h2>Medium UI Kit</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <CodeBlock code={jsCode} language={'javascript'} />
          <CodeBlock code={cssCode} language={'css'} />
          <CodeBlock code={htmlCode} language={'html'} />
          <CodeBlock code={reactCode} language={'jsx'} />

          {/* Demo Medium LightBox */}
          <Lightbox
            src={DemoImg}
            width={475}
            height={360}
            caption="This is a cat caption. A catption!"
          />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
