import * as types from '../constant/QuanLyKhoaHoc.constant'
import Axios from 'axios';
import swal from 'sweetalert2';
import * as CauHinh from '../../common/CauHinh';
export const layDanhMucKhoaHoc = () => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: 'GET',

        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: types.LAY_DANH_MUC_KHOA_HOC,
                mangDMKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const layDSKhoaHoc = () => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
            method: 'GET',

        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: types.LAY_DANH_SACH_KHOA_HOC,
                mangKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const timKiemKhoaHoc = (tenKH) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKH}&MaNhom=GP01`,
            method: 'GET',
            data:tenKH
        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: types.TIM_KIEM_KHOA_HOC,
                khoaHocTim: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const layDSKhoaHocTheoDM = (maDM) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDM}&MaNhom=GP01`,
            method: 'GET',
            data: maDM
        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: types.LAY_KHOA_HOC_THEO_DANH_MUC,
                mangKHTheoDM: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const layChiTietKhoaHoc = (MaKhoaHoc) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${MaKhoaHoc}`,
            method: 'GET',
            data: MaKhoaHoc
        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: types.LAY_CHI_TIET_KHOA_HOC,
                chiTietKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const themKhoaHoc = (khoaHoc, fd) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`,
            method: 'POST',
            data: khoaHoc,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Axios.post('http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', fd)
                .then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error.response.data);
                })
            swal.fire({
                title: 'Thêm thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type: types.THEM_KHOA_HOC,
                khoaHoc: result.data
            })
        }).catch((error) => {
            swal.fire("Thông báo", error.response.data, 'error');
        })
    }
}
export const dangKiKhoaHoc = (MaKhoaHoc,TaiKhoan) => {
    return (dispatch) => {
        Axios({
            method:"POST",
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc',
            data:{MaKhoaHoc
                ,TaiKhoan},
            headers:{
                "Authorization":"Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Đăng kí thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            console.log(result.data)
            dispatch({
                type: types.DANG_KI_KHOA_HOC
                ,thongTinDangKi: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi",error.response.data,'error');
        })
    }
}
export const huyDangKiKhoaHoc = (MaKhoaHoc,TaiKhoan) => {
    return (dispatch) => {
        Axios({
            method:"POST",
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',
            data:{MaKhoaHoc
                ,TaiKhoan},
            headers:{
                "Authorization":"Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Hủy thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            console.log(result.data)
            dispatch({
                type: types.DANG_KI_KHOA_HOC
                ,thongTinDangKi: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi",error.response.data,'error');
        })
    }
}
export const xoaKhoaHoc = (MaKhoaHoc) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${MaKhoaHoc}`,
            method: 'DELETE',
            data: MaKhoaHoc,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Xóa thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type: types.XOA_KHOA_HOC,
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const capNhatKhoaHoc = (khoaHoc, fd) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,
            method: 'PUT',
            data: khoaHoc,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            Axios.post('http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', fd)
                .then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error.response.data);
                })
            swal.fire({
                title: 'Cập nhật thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type: types.CAP_NHAT_KHOA_HOC,
                khoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const suaKhoaHocAction = (khoaHoc) => {
    return {
        type: types.SUA_KHOA_HOC,
        khoaHoc
    }
}
