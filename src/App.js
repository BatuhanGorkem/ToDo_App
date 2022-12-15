import Header from "./components/Header";
import List from "./components/List";
import Button from "./ui/Button";
import Input from "./ui/Input";

function App() {
  return (
    <div className="">
      <div className=" md:w-3/5 max-md:mx-1 transition-all my-16 p-2 h-auto md:py-10  md:px-20 rounded-3xl mx-auto bg-white">
        <div className="mb-5">
          <Header></Header>
        </div>
        <div className="relative">
          <Input
            addClass="w-full md:p-4  rounded-lg border border-gray-300 focus:border-blue-300 focus:ring-blue-500"
            placeholder="Add new list item "
            type="text"
          ></Input>
          <Button
            type="click"
            addClass="absolute right-2.5 bottom-1.5 md:bottom-2.5 px-4 py-1 md:py-2  bg-blue-700 hover:bg-blue-800 focus:ring-2 text-white rounded"
            text="Add"
          ></Button>
        </div>
        <div className="mt-5">
          <List></List>
        </div>
      </div>
    </div>
  );
}

export default App;
