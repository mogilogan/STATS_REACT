import { createAction } from "@reduxjs/toolkit";

export const apiRequest = createAction("api/callBegan");
export const dataLoaded = createAction("api/callSuccess");
export const dataLoadedFailed = createAction("api/callFailed");
