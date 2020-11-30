REACT-REDUX
-----------
Các file:
- index: file gốc ứng dụng gọi Component Hello
- component Hello: chua 2 component Nhap, Xuat
- reducer nhap: de luu du lieu vao store, va lay du lieu tu store theo cau truc: state.nhap.nameAntribute;
- action: chua action NHAP
=> Luong hoat dong: Tu  component nhap -> gui du lieu dua theo action NHAP -> reducer nhap -> luu vao Store
=> Component->Action->Reducer->Store.
-----------
store: de luu state cua app
- store = createStore(reducer, initialState);
-----------
reducers: Nhận state hiện tại và action -> xử lý -> trả về state
- hàm reducer(STATE,ACTION) -> trả về STATE mới
- xử lý các action để cập nhật state
-----------
actions: Để cập nhật store trong redux
- Để cập nhật store phải gửi (dispach) action -> reducer.
- là một object có trường bắt buộc là type, thương thêm payload {} chứa các thuộc tính khác
- có thể tạo hàm Action Createors để tạo các action giống nhau, khác thuộc tính.
-----------
connect: Kết nối component(react) to store(redux)
- https://vhnam.github.io/tutorials/to-da-an-hanh-voi-redux-nhu-the-nao/
- https://viblo.asia/p/huong-dan-ve-redux-connect-GrLZD89BZk0
- Component (react) gửi Action -> Reducer xử lý lưu vào Store(redux) = hàm connect()
- connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
+ mapStateToProps - dùng để map State của Component với State trong Store của Redux
+ mapDispatchToProps - dùng để map method của Component với lời gọi action từ Store tới Actions của Redux
