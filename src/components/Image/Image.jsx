import React, { useState } from "react";
import ImageSkeleton from "../ImageSkeleton/ImageSkeleton";

function Image(props) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <ImageSkeleton />}
      <img
        style={{ display: loading ? "none" : "initial" }}
        onLoad={() => {
          setLoading(false);
        }}
        {...props}
      />
    </>
  );
}

export default Image;
