import React, { useRef, useEffect } from 'react';
import Prism from 'prismjs';

// TODO: Find a better way to do this
import './prism.css';

export type Language = Prism.Languages | 'none';
export type Code = string;
type CodeEl = HTMLElement;
type CodeRef = React.RefObject<CodeEl>;
export interface ICodeBlockProps {
  language?: Language;
  code: Code;
}

const useCode = (ref: CodeRef) => {
  return useEffect(() => {
    if (ref && ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [ref]);
};

const CodeBlock: React.FC<ICodeBlockProps> = ({ code, language = 'none' }) => {
  const ref = useRef<CodeEl>(null);
  useCode(ref);

  return (
    <pre>
      <code className={`language-${language}`} ref={ref}>
        {code.trim()}
      </code>
    </pre>
  );
};

export default CodeBlock;
