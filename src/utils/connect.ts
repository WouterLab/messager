import Block, { Props } from "#core/Block/Block";
import { StoreEvents } from "#core/Store/Store";
import { AppState } from "#types/types";
import isEqual from "./isEqual";

export const connect = <T extends Props = Record<string, never>>(
  Component: typeof Block,
  mapStateToProps?: (state: AppState, props: T) => T,
) =>
  class extends Component {
    constructor(props = {} as T) {
      const state = mapStateToProps
        ? mapStateToProps(window.store.getState(), props)
        : window.store.getState();

      super({ ...props, ...state });

      window.store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps
          ? mapStateToProps(window.store.getState(), props)
          : window.store.getState();

        if (!isEqual(state, newState)) {
          this.setProps({
            ...newState,
          });
        }
      });
    }
  } as unknown as typeof Block;
