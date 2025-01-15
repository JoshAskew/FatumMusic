import  { useState } from 'react';
import '../styles/index.css';

const Accordion = ({
  title,
  content,
  isExpanded,
  onToggle,
}: {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="accordion">
      <div
        className={`accordion-summary body-bold ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className={`icon ${isExpanded ? 'rotate' : ''}`}>▶</span>
      </div>
      {isExpanded && <div className="accordion-details body-regular">{content}</div>}
    </div>
  );
};

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string | null>('panel1');

  const handleToggle = (panel: string) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <div style={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
      <h3 className="faq-title">FAQ One at a Time</h3>
      <Accordion
        title="Collapsible Group Item #1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        isExpanded={expanded === 'panel1'}
        onToggle={() => handleToggle('panel1')}
      />
      <Accordion
        title="Collapsible Group Item #2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        isExpanded={expanded === 'panel2'}
        onToggle={() => handleToggle('panel2')}
      />
      <Accordion
        title="Collapsible Group Item #3"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        isExpanded={expanded === 'panel3'}
        onToggle={() => handleToggle('panel3')}
      />
    </div>
  );
}
