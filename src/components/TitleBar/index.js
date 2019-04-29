

import React from 'react'

const Titlebar = (props) => { 
  const styles = {
    width: '100%',
    height: '40px',
    background: 'white',
    WebkitUserSelect: "none", 
    WebkitAppRegion: "drag", 
  }
  return (
    <React.Fragment>
      <div style={styles}>
        
      </div>
    </React.Fragment>
  );
}

export default Titlebar;