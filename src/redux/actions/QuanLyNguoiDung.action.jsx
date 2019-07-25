import * as types from '../constant/QuanLyNguoiDung.constant';
import Axios from 'axios';
import * as CauHinh from '../../common/CauHinh';
import swal from 'sweetalert2';
export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: thongTinDangNhap, //thongTinDangNhap: lấy từ state component
        }).then((result) => {
            localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            localStorage.setItem(CauHinh.token, result.data.accessToken);
            swal.fire({
                title: 'Đăng nhập thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !'
            })
            dispatch({
                type: types.DANG_NHAP
            })

        })
            .catch((error) => {
                swal.fire("Thông báo", error.response.data, 'error');
            });

    }
}

export const dangKiAction = (thongTinDangKi) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data: thongTinDangKi,

        }).then((result) => {
            swal.fire({
                title: 'Đăng ký thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            if (result.value) {
                window.location.href = ''
            }
            dispatch({
                type: types.DANG_KY
            })

        }).catch((error) => {
            swal.fire("Thông báo", error.response.data, 'error');
        });

    }
}

export const layThongtinTaiKhoan = () => {
    return (dispatch) => {
        let userLogin = JSON.parse(localStorage.getItem(CauHinh.userLogin));
        Axios({
            method: "POST",
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            data: { taiKhoan: userLogin.taiKhoan },
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result)
            localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            dispatch({
                type: types.LAY_THONG_TIN_TAI_KHOAN
                , thongTin: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi", error.response.data, 'error');
        })
    }
}
export const capNhatThongTinTaiKhoan = (taikhoan) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: 'PUT',
            data: taikhoan,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Cập nhật thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type: types.CAP_NHAT_THONG_TIN_TAI_KHOAN,
                thongTinCapNhat: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi", error.response.data, 'error');
        })
    }
}
export const layDSLoaiNDung = () => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
            method: 'GET',

        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: types.LAY_DANH_SACH_LOAI_NGUOI_DUNG,
                mangLoaiND: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const layDSNguoiDung = () => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`,
            method: 'GET',

        }).then((result) => {
            console.log(result.data);
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG,
                mangND: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const themNguoiDung = (nguoiDung) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
            method: 'POST',
            data: nguoiDung,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Thêm thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type: types.THEM_NGUOI_DUNG,
                nguoiDung: result.data
            })
        }).catch((error) => {
            swal.fire("Thông báo", error.response.data, 'error');
        })
    }
}
export const xoaNguoiDung = (TaiKhoan) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?taiKhoan=${TaiKhoan}`,
            method: 'DELETE',
            data:TaiKhoan,
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
                type: types.XOA_NGUOI_DUNG,
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const capNhatNguoiDung = (nguoiDung) => {
    return (dispatch) => {
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method: 'PUT',
            data: nguoiDung,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Cập nhật thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type: types.CAP_NHAT_NGUOI_DUNG,
                nguoiDung: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const suaNguoiDungAction = (nguoiDung) => {
    return {
        type: types.SUA_NGUOI_DUNG,
        nguoiDung
    }
}
export const layDanhSachChuaGhiDanh = (MaKhoaHoc) => {
    return (dispatch) => {
        Axios({
            method: "POST",
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh?maKhoaHoc=${MaKhoaHoc}`,
            data: MaKhoaHoc,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result)
            // localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG_CHUA_GHI_DANH
                , danhSachChuaGhiDanh: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi", error.response.data, 'error');
        })
    }
}
export const layDanhSachDaGhiDanh = (MaKhoaHoc) => {
    return (dispatch) => {
        Axios({
            method: "POST",
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc?maKhoaHoc=${MaKhoaHoc}`,
            data: MaKhoaHoc,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result)
            // localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG_DA_GHI_DANH
                , danhSachDaGhiDanh: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi", error.response.data, 'error');
        })
    }
}
export const layDanhSachChoXetDuyet = (MaKhoaHoc) => {
    return (dispatch) => {
        Axios({
            method: "POST",
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet?maKhoaHoc=${MaKhoaHoc}`,
            data: MaKhoaHoc,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result)
            // localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            dispatch({
                type: types.LAY_DANH_SACH_NGUOI_DUNG_CHO_XET_DUYET
                , danhSachChoXetDuyet: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi", error.response.data, 'error');
        })
    }
}
export const xacThucNguoiDung = (MaKhoaHoc,TaiKhoan) => {
    return (dispatch) => {
        Axios({
            method: "POST",
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc',
            data: {MaKhoaHoc,TaiKhoan},
            headers: {
                "Authorization": "Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Ghi danh thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            console.log(result)
            // localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            dispatch({
                type: types.XAC_THUC_NGUOI_DUNG
                , nguoiDungXacThuc: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi", error.response.data, 'error');
        })
    }
}