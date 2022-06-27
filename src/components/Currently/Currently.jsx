import React, { useState, useEffect } from "react";
import { api } from "../../constants";
import ParagraphSkeleton from "../ParagraphSkeleton/ParagraphSkeleton";

function Currently(props) {
  const [currently, setCurrently] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("settings").then((result) => {
      setCurrently(result.response.currently);
      setLoading(false);
    });
  }, []);

  return (
    <section {...props}>
      {loading ? (
        <>
          <ParagraphSkeleton />
          <ParagraphSkeleton />
          <ParagraphSkeleton />
        </>
      ) : (
        <p>{currently}</p>
      )}
    </section>
  );
}

export default Currently;
