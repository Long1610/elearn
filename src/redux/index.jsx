import {combineReducers} from 'redux';
import {quanLyNguoiDungStoreReducer} from './reducers/QuanLyNguoiDung.reducer';
// import {danhMucKhoaHocStoreReducer} from './reducers/QuanLyKhoaHoc.reducer';
// import {danhSachKhoaHocStoreReducer} from './reducers/QuanLyKhoaHoc.reducer';
import {quanLyKhoaHocStoreReducer} from './reducers/QuanLyKhoaHoc.reducer';

//store tổng của ứng dụng
const rootReducer = combineReducers({
    quanLyNguoiDungStoreReducer,
    quanLyKhoaHocStoreReducer
})

export default rootReducer;