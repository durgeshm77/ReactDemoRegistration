import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../Card/CardData";

export default function TabButtonList(){
    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  
    let tabContent = <p>Please select topic</p>;
    if (selectedTopic) {
      tabContent = <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>
          {EXAMPLES[selectedTopic].description}
        </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    };
    return(
    <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isActive={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
            <TabButton isActive={selectedTopic === 'props'} onClick={() => handleClick('props')}>Core React</TabButton>
          </menu>
          {tabContent}
        </section>
    )
}