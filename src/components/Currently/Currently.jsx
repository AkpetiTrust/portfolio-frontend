import React, { useState } from "react";

function Currently(props) {
  const [currently, setCurrently] = useState(
    "I'm currently learning the blockchain technology. When I'm not working you can find me watching a movie. Or I'm probably just sleeping 😴 ."
  );

  return (
    <section {...props}>
      <p>{currently}</p>
    </section>
  );
}

export default Currently;
