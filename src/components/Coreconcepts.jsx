import Coreconcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"


export default function Coreconcepts() {

    return(
<section id="core-concepts">
      <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((eachconcept)=> <Coreconcept {...eachconcept} />)}
        
        </ul>
        </section>)
}