import React from 'react';

const ShowFiles = ({files}) => {
    
   
  return (
    <section>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
};

export default ShowFiles;
