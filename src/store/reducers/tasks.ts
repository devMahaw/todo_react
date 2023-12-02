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
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex(
        (t) => t.id === action.payload.id
      );

      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload;
      }
    },
    register: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const taskAlreadyExists = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      );

      if (taskAlreadyExists) {
        alert("Já existe uma tarefa com esse nome");
      } else {
        const lastTask = state.items[state.items.length - 1];
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1
        };
        state.items.push(newTask);
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const taskIndex = state.items.findIndex(
        (t) => t.id === action.payload.id
      );

      if (taskIndex >= 0) {
        state.items[taskIndex].status = action.payload.finished
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
      }
    }
  }
});

export const { remove, edit, register, changeStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
