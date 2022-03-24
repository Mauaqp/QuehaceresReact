import React,{useState} from "react";
import Input from "./Components/Input";
import Tasks from "./Components/Tasks";

function App() {
  const [list, setList] = useState([]);

return (
  <div>
    <Input list={list} setList={setList}/>
    <div>
      {list.map((task, index) => (
        <Tasks task={task} index={index} setList={setList} list={list} />
      ))}
    </div>
  </div>
)

}

export default App;
