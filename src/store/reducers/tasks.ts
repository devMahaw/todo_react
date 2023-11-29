import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import * as enums from "../../utils/enums/task";

type TasksState = {
  items: Task[];
};

const initialState: TasksState = {
  items: [
    {
      id: 1,
      description: "Revendo o exercício do módulo 7.",
      priority: enums.Priority.NORMAL,
      status: enums.Status.CONCLUIDA,
      title: "Estudar Javascript."
    },
    {
      id: 2,
      description: "Estudar material de apoio.",
      priority: enums.Priority.NORMAL,
      status: enums.Status.PENDENTE,
      title: "Estudar Typescript."
    },
    {
      id: 3,
      description: "Praticar a construção de uma landing page.",
      priority: enums.Priority.IMPORTANTE,
      status: enums.Status.PENDENTE,
      title: "Estudar Bootstrap."
    }
  ]
};

const tasksSlice = createSlice({
  name: "tarefas",
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    }
  }
});

export const { remove } = tasksSlice.actions;

export default tasksSlice.reducer;
