import { useEffect } from "react";
import Robot from "../components/Robot";
import useRobots from "../hooks/useRobots";
import { useNavigate } from "react-router-dom";

function RobotsPage() {
  const { robots, loadRobots, deleteRobot } = useRobots();
  let navigate = useNavigate();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  const onClickDelete = (robotId) => {
    deleteRobot(robotId);
  };
  const updateRobot = (robotId) => {
    navigate("/form/" + robotId);
  };

  return (
    <>
      <div className="md:px-4 md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
        {robots.map((robot) => (
          <Robot
            robot={robot}
            key={robot.id}
            deleteClick={onClickDelete}
            updateClick={updateRobot}
          />
        ))}
      </div>
    </>
  );
}

export default RobotsPage;
