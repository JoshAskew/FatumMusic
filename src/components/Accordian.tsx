import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Collapse,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import '../styles/index.css'
  
  const CustomAccordion: React.FC = () => {
    return (
      <div style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}>
        <Typography variant="h4" align="center" gutterBottom className="FAQ">
          FAQ with Custom Transition
        </Typography>
  
        <Accordion
          slots={{ transition: Collapse }} // Custom transition slot
          slotProps={{
            transition: {
              timeout: 300, // Custom timeout for the transition
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>What is your return policy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             Return Policy
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        <Accordion
          slots={{ transition: Collapse }}
          slotProps={{
            transition: {
              timeout: 300, // Slower transition for this panel
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>FAQ 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              FAQ 2 Answer
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
  
  export default CustomAccordion;