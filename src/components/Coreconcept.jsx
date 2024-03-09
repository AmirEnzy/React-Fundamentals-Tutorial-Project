

// function Coreconcept(props)
// function Coreconcept({props}) or we can destructure it like this
export default function Coreconcept({image,description,title}){

    return (
  
      <>
      <li>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
      </>
    )
  }