
import { memo } from "react";
function TestHooks({username, callNewMethod}) {
    console.log('Child component');
  return (
    <div>
      <h3>Hi i am child component {username}</h3>
      <button onClick={callNewMethod}> Child button</button>
    </div>
  )
}

export default memo(TestHooks)
//export default TestHooks;