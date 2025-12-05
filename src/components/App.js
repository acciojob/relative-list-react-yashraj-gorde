import React from 'react'

const App = () => {

  const relatives = ["Nishant", "Vaibhav", "Priya", "Prajwal", "Sumit", "Pooja"];

  return (
    <div id="main">
               {/* Do not remove the main div */}
        <ol key={"relativeList"}>
          {relatives.map((r, index)=>(
            <li key={relativeListItem ${index}} >{r}</li>
          ))}
        </ol>
    </div>
  )
}

export default App