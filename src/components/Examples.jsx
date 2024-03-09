import TabButton from "./TabButton"
import { EXAMPLES } from "../data"
import { useState } from "react"
import Tabs from "./Tabs"

export default function Examples() {

    // whatever inside useState("is a default value")
  const [selectedTopic, setSelectedTopic] = useState()

  function handleselect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedButton)
  }
return(
<section id="examples">
        <h2>Examples</h2>
        {/* SO As you can see instead of using attributes as props
         we can also pass child of custom component inside the tag */}

         {/* When passing paramether in handleselect 
         make sure you are sending exact string existing in data Example object */}
        <Tabs buttons={
         <>
         <TabButton 
         isActive = {selectedTopic === "components"}
         onSelect ={() => handleselect("components")} >Components</TabButton>
         <TabButton
          isActive = {selectedTopic === "jsx"}
         onSelect ={() => handleselect("jsx")}>JSX</TabButton>
         <TabButton
          isActive = {selectedTopic === "props"}
         onSelect ={() => handleselect("props")}>Props</TabButton>
         <TabButton
          isActive = {selectedTopic === "state"} 
         onSelect ={() => handleselect("state")}>State</TabButton></>}>
        
         
        

         { (!selectedTopic) ? <p>Please select a button</p>: <div id="tab-content">
          {/* dont forget that you can have access to objects in JS also by bracket notation like this */}
          <h3>{EXAMPLES[selectedTopic].title}</h3>
         <p>{EXAMPLES[selectedTopic].description}</p>
         <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
         </pre>

         </div>}

         </Tabs>
         

        </section>

)}
        