import React, { useEffect } from 'react';

function Route({pathname, path, element}) {

  

  return (
    <>
      {
        pathname === path && element
      }
    </>
  );
}

export default Route;