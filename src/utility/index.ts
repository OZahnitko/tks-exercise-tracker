import data from "../data/data.json";

const EXERCISE_TYPES = ["cardio", "flexibility", "resistance"];

export interface Exercise {
  name: string;
  type: ExerciseType[];
}

export type ExerciseType = string;

export const testFunc = (): Exercise[] =>
  data.exercises.map((exercise) => ({
    name: exercise.name,
    type: exercise.type.map(
      (exerciseType: ExerciseType) =>
        EXERCISE_TYPES.find((t) => t === exerciseType) || "other"
    ),
  }));
