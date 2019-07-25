import * as types from '../constant/QuanLyKhoaHoc.constant'

const stateKhoaHoc = {
    mangKhoaHoc: [],
    mangDMKhoaHoc: [],
    khoaHocSua: {
        maKhoaHoc: '',
        biDanh: '',
        tenKhoaHoc: '',
        moTa: '',
        luotXem: '',
        hinhAnh: '',
        ngayTao: '', 
        maDanhMucKhoaHoc:'',
    },
    DSKHXoa: [],
    DSKHCapNhat: [],
    mangKHTheoDM:[],
    chiTietKhoaHoc:{},
    khoaHocTim:[],
    thongTinDangKi:{},
    MaKhoaHoc : JSON.parse(localStorage.getItem('makh'))
}
export const quanLyKhoaHocStoreReducer = (state = stateKhoaHoc, action) => {
    console.log(action)
    switch (action.type) {
        case types.LAY_DANH_MUC_KHOA_HOC: {
            state.mangDMKhoaHoc = action.mangDMKhoaHoc
            console.log(action.mangDMKhoaHoc);
            return { ...state }
        }
        case types.LAY_DANH_SACH_KHOA_HOC: {
            state.mangKhoaHoc = action.mangKhoaHoc
            console.log(action.mangKhoaHoc);
            return { ...state }
        }
        case types.TIM_KIEM_KHOA_HOC: {
            state.khoaHocTim = action.khoaHocTim
            console.log(action.khoaHocTim);
            return { ...state }
        }
        case types.LAY_KHOA_HOC_THEO_DANH_MUC: {
            state.mangKHTheoDM = action.mangKHTheoDM
            console.log(action.mangKHTheoDM);
            return { ...state }
        }
        case types.LAY_CHI_TIET_KHOA_HOC: {
            state.chiTietKhoaHoc = action.chiTietKhoaHoc
            console.log(action.chiTietKhoaHoc);
            return { ...state }
        }
        case types.THEM_KHOA_HOC: {
            state.mangKhoaHoc = [...state.mangKhoaHoc, action.khoaHoc]
            console.log(action.mangKhoaHoc);
            return { ...state }
        }
        case types.DANG_KI_KHOA_HOC: {
            state.thongTinDangKi = action.thongTinDangKi
            console.log(action.thongTinDangKi);
            return { ...state }
        }
        case types.HUY_DANG_KI_KHOA_HOC: {
            state.thongTinDangKi = action.thongTinDangKi
            console.log(action.thongTinDangKi);
            return { ...state }
        }
        case types.XOA_KHOA_HOC: {
            let DSKHXoa = [...state.mangKhoaHoc];
            state.mangKhoaHoc = DSKHXoa;
            return { ...state }
        }
        case types.SUA_KHOA_HOC: {
            state.khoaHocSua = action.khoaHoc;
            return { ...state };
        }
        case types.CAP_NHAT_KHOA_HOC: {
            let DSKHCapNhat = [...state.mangKhoaHoc];
            state.mangKhoaHoc = DSKHCapNhat;
            return { ...state }
        }
    }
    return { ...state };
}

