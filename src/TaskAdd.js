import React from 'react';

const TaskAdd = ({value,changeHandler,clickHandler}) => {
    return (
      <form class="field has-addons">
        <div class="control is-expanded">
          <input class="input is-primary" type="text" value={value} onChange={changeHandler}></input>
        </div>
        <div>
          <button class="button is-primary" onClick={clickHandler}>저장</button>
        </div>
      </form>
    )
 }

 export default TaskAdd