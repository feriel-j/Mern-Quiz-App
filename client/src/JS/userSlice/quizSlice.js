import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addQuizz = createAsyncThunk("quiz/add", async (quiz) => {
  try {
    let result = axios.post("http://localhost:5000/quizz/", quiz);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const quizzget = createAsyncThunk("quiz/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/quizz/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const quizzDelete = createAsyncThunk("quiz/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/quizz/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const QuizzUpdate = createAsyncThunk(
  "quiz/update",
  async ({ id, quiz }) => {
    try {
      let response = axios.put(`http://localhost:5000/quizz/${id}`, quiz);
      console.log(quiz);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const questionAdd = createAsyncThunk(
  "quiz/question/add",
  async ({ quizId, userid, quest }) => {
    try {
      let result = axios.post(
        `http://localhost:5000/quizz/question/${quizId}/${userid}`,
        quest
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  quiz: null,
  status: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: {
    [addQuizz.pending]: (state) => {
      state.status = "pending";
    },
    [addQuizz.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [addQuizz.rejected]: (state) => {
      state.status = "fail";
    },

    [quizzget.pending]: (state) => {
      state.status = "pending";
    },
    [quizzget.fulfilled]: (state, action) => {
      state.status = "success";
      state.quiz = action.payload.data?.quizs;
    },
    [quizzget.rejected]: (state) => {
      state.status = "fail";
    },
    [quizzDelete.pending]: (state) => {
      state.status = "pending";
    },
    [quizzDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [quizzDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [QuizzUpdate.pending]: (state) => {
      state.status = "pending";
    },
    [QuizzUpdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [QuizzUpdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default quizSlice.reducer;
