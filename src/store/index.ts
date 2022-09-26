//import User from "@/models/user";
import Task from "@/models/task";
import { v4 } from "uuid";

import { InjectionKey } from "vue";

export interface State {
  tasks: Array<Task>;
}

export const StoreState = {
  state: {
    tasks: [
      new Task({
        id: v4(),
        title: "Task 1",
        subtitle: "Task 1 Description",
        expiresAt: new Date(2022, 8, 26, 10, 22),
        isCompleted: false,
        category: "normal",
      }),
      new Task({
        id: v4(),
        title: "Task 2",
        subtitle: "Task 2 Description",
        expiresAt: new Date(2022, 8, 24, 10, 22),
        isCompleted: false,
        category: "normal",
      }),
      new Task({
        id: v4(),
        title: "Task 3",
        subtitle: "Task 3 Description",
        expiresAt: new Date(2022, 8, 20, 10, 22),
        isCompleted: true,
        category: "urgent",
      }),
      new Task({
        id: v4(),
        title: "Task 4",
        subtitle: "Task 4 Description",
        expiresAt: new Date(2022, 8, 22, 10, 22),
        isCompleted: true,
        category: "urgent",
      }),
      new Task({
        id: v4(),
        title: "Task 5",
        subtitle: "Task 5 Description",
        expiresAt: new Date(2022, 8, 19, 10, 22),
        isCompleted: false,
        category: "normal",
      }),
      new Task({
        id: v4(),
        title: "Task 6",
        subtitle: "Task 6 Description",
        expiresAt: new Date(2022, 8, 10, 10, 22),
        isCompleted: false,
        category: "normal",
      }),
    ],
  },
};
