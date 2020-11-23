--------
store: de luu state cua app
+ store = createStore(reducer, initialState);
--------
reducers: Nhận state hiện tại và action -> xử lý -> trả về state
+ reducer(STATE,ACTION)
+ trả về STATE mới