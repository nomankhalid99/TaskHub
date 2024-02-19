import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Grid, Typography, Box, Divider } from "@mui/material";
import CustomButton from "../components/global/CustomButton";
import { FaPlusCircle } from "react-icons/fa";
import TaskProgress from "../components/tasksPageComponents/TaskProgress";
import TaskRecentActivity from "../components/tasksPageComponents/TaskRecentActivity";
import TaskAllocated from "../components/tasksPageComponents/TaskAllocated";
import { tasksData } from "../data/mockData";
import CreateTaskModal from "../components/tasksPageComponents/CreateTaskModal";
import { ColumnProps } from "../constants/types";

const Column = React.lazy(
  () => import("../components/tasksPageComponents/Column")
);

const reorderColumnList = (
  sourceCol: ColumnProps,
  startIndex: number,
  endIndex: number
) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

interface Props {
  menuCollapse: boolean;
}


const Tasks: React.FC<Props> = ({menuCollapse}) => {
  const [state, setState] = useState(tasksData);
  const [taskModal, setTaskModal] = useState(false);

  const onDragEnd = (result: any) => {
    const { destination, source } = result;

    // If user tries to drop in an unknown destination
    if (!destination) return;

    // if the user drags and drops back in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If the user drops within the same column but in a different position
    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }

    // If the user moves from one column to another
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  useEffect(() => {
    document.title = "Tasks-TaskHub"
  }, [])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container mb={2} mt={3}  sx={{ pl: { xs: 0, lg: menuCollapse ? 14 : 36 }}} spacing={2}>
        <Grid item mb={1} xs={12}>
          <Box
            display="flex"
            mb={2}
            flexDirection={{ sm: "row", xs: "column" }}
            justifyContent="space-between"
            alignItems={{ sm: "center", xs: "" }}
          >
            <Typography mb={{ sm: 0, xs: 1 }} variant="h4" fontWeight="bold">
              Tasks Managment
            </Typography>
            <Box
              gap={2}
              display="flex"
              flexDirection={{ sm: "row", xs: "column" }}
            >
              <CustomButton
                title="Create Task"
                containerStyles="w-full py-3 px-4 rounded-md bg-[#4C3575] "
                textStyles="text-white text-[16px] leading-[17px]"
                leftIcon={<FaPlusCircle className="text-white" />}
                handleClick={() => setTaskModal(true)}
              />
            </Box>
          </Box>
          <Divider />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TaskProgress />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <TaskRecentActivity />
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <TaskAllocated />
        </Grid>
        {state.columnOrder.map((columnId) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided) => (
              <Grid
                item
                md={4}
                xs={12}
                key={columnId}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Column
                    column={state.columns[columnId]}
                    tasks={state.columns[columnId].taskIds.map(
                      (taskId) => state.tasks[taskId]
                    )}
                  />
                </React.Suspense>
              </Grid>
            )}
          </Droppable>
        ))}
        <CreateTaskModal
          isOpen={taskModal}
          closeModal={() => setTaskModal(false)}
        />
      </Grid>
    </DragDropContext>
  );
};

export default Tasks;
