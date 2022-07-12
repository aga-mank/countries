import { useEffect, useState } from 'react';

const App = ( ) => {

  const [count, setCount] = useState(0);

  const modifyNumber = () => {
    setCount(count + 1)
  }


  return (
    <div>
        {count}
        <button
          onClick={modifyNumber} 
          style={{ 
            width: "50px", 
            height: "20px"}}>
              +1
        </button>
        
    </div>
  );
}

export default App;