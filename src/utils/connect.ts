import Block, { Props } from "#core/Block/Block";
import { StoreEvents } from "#core/Store/Store";
import { AppState } from "#types/types";
import isEqual from "./isEqual";

export function connect(
  mapStateToProps: (state: AppState) => Partial<AppState>,
) {
  return function (Component: typeof Block) {
    return class extends Component {
      private onChangeStoreCallback: () => void;
      constructor(props: Props) {
        const store = window.store;
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        this.onChangeStoreCallback = () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          state = newState;
        };

        store.on(StoreEvents.Updated, this.onChangeStoreCallback);
      }

      componentWillUnmount() {
        super.componentWillUnmount();
        window.store.off(StoreEvents.Updated, this.onChangeStoreCallback);
      }
    };
  };
}
