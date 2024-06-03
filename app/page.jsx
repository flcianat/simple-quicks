import Menu from "./components/menu";
import TaskPopover from "./components/task-popover";

export default function Home() {
  return (
    <div className="p-5">
      <h1>component test</h1>
      <TaskPopover />
      <Menu />
    </div>
  );
}
