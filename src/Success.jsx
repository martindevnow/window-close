import React from 'react'

const Consent = () => {
  React.useEffect(() => {
    const to = setTimeout(() => window.close(), 3000);
    return () => clearTimeout(to)
  }, []);
  
  return (
    <div><h1>Success</h1>
    Thank you. The window will now close (or <a onClick={() => window.close()}>click here to close it</a>)</div>
  )
}

export default Consent