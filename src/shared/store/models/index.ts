import { Models } from "@rematch/core";
import header from "./header";

export interface RootModel extends Models<RootModel> {
  header: typeof header;
}

export const models: RootModel = {
  header,
};
