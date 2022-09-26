import Vue from "vue";
import Vuex from "vuex";
import { StoreState } from "@/store";

Vue.use(Vuex);

export const store = new Vuex.Store(StoreState);
