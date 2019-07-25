import * as types from '../constant/QuanLyNguoiDung.constant';
import * as CauHinh from '../../common/CauHinh';
const stateDefault = {
    isLogin: localStorage.getItem(CauHinh.userLogin) ? true : false,
    user: JSON.parse(localStorage.getItem(CauHinh.userLogin)),
    mangLoaiND: [],
    mangND: [],
    thongTin: {},
    thongTinCapNhat: {},
    DSNDXoa: [],
    nguoiDungSua: {
        taiKhoan: '',
        matKhau: '',
        hoTen: '',
        soDt: '',
        maLoaiNguoiDung: '',
        maNhom: '',
        email: ''
    },
    DSNDCapNhat:[],
    danhSachChuaGhiDanh:[],
    danhSachDaGhiDanh:[],
    danhSachChoXetDuyet:[],
    nguoiDungXacThuc:{},

}


export const quanLyNguoiDungStoreReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case types.DANG_KY: {

            return { ...state };
        };
        case types.DANG_NHAP: {
            state.isLogin = true;
            return { ...state };
        };
        case types.LAY_DANH_SACH_LOAI_NGUOI_DUNG: {
            state.mangLoaiND = action.mangLoaiND
            console.log(action.mangLoaiND);
            return { ...state }
        }
        case types.LAY_DANH_SACH_NGUOI_DUNG: {
            state.mangND = action.mangND
            console.log(action.mangND);
            return { ...state }
        }
        case types.LAY_DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH: {
            state.danhSachChuaGhiDanh = action.danhSachChuaGhiDanh
            console.log(action.danhSachChuaGhiDanh);
            return { ...state }
        }
        case types.LAY_DANH_SACH_NGUOI_DUNG_DA_GHI_DANH: {
            state.danhSachDaGhiDanh = action.danhSachDaGhiDanh
            console.log(action.danhSachDaGhiDanh);
            return { ...state }
        }
        case types.LAY_DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET: {
            state.danhSachChoXetDuyet = action.danhSachChoXetDuyet
            console.log(action.danhSachChoXetDuyet);
            return { ...state }
        }
        case types.LAY_THONG_TIN_TAI_KHOAN: {
            state.thongTin = action.thongTin;
            console.log(action.thongTin);
            return { ...state }
        }
        case types.CAP_NHAT_THONG_TIN_TAI_KHOAN: {
            state.thongTinCapNhat = action.thongTinCapNhat;
            console.log(action.thongTinCapNhat);
            return { ...state }
        }
        case types.XAC_THUC_NGUOI_DUNG: {
            state.nguoiDungXacThuc = action.nguoiDungXacThuc
            console.log(action.nguoiDungXacThuc);
            return { ...state }
        }
        case types.THEM_NGUOI_DUNG: {
            state.mangND = [...state.mangND, action.nguoiDung]
            console.log(action.mangND);
            return { ...state }
        }
        case types.XOA_NGUOI_DUNG: {
            let DSNDXoa = [...state.mangND];
            state.mangND = DSNDXoa;
            return { ...state }
        }
        case types.SUA_NGUOI_DUNG: {
            state.nguoiDungSua = action.nguoiDung;
            return { ...state };
        }
        case types.CAP_NHAT_NGUOI_DUNG: {
            let DSNDCapNhat = [...state.mangND];
            state.mangND = DSNDCapNhat;
            return { ...state }
        }
    }
    return { ...state };
}


