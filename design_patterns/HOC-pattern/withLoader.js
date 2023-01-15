// Pass reusable logic down as props to components throughout your application

import React, { useState, useEffect } from "react";

function withLoader({ Element, url }) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) return <div>Loading...</div>;

    return <Element {...props} data={data} />;
  };
}

export default withLoader;
