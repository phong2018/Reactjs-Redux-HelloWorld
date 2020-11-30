import {NHAP } from "./actionTypes";
 
export const nhap = name => ({
  type: NHAP,
  payload: {
    name
  }
});

