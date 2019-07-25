import React, { Component } from 'react'
import { connect } from 'react-redux';
import { dangNhapAction, layDSLoaiNDung, layThongtinTaiKhoan } from '../../redux/actions/QuanLyNguoiDung.action';
import { layDSKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
import { Redirect } from 'react-router-dom';
import AdminTemplate from '../../templates/AdminTemplate';
class DangNhap extends Component {
    // renderSinhVien = () => {
    //     return this.props.mangKhoaHoc.map((sv, index) => {
    //         return this.props.mangLoaiNguoidung.map((loai,index) => {
    //             if(sv.nguoiTao.maLoaiNguoiDung === loai.maLoaiNguoiDung)
    //             return (
    //                 <Redirect to='/admin' />
    //             )
    //         })

    //     })
    // }
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            maLoaiNguoiDung: '',
        }
    }

    componentDidMount() {
        this.props.layDSLoaiNguoiDung();
        this.props.layDanhSachKhoaHoc();
        // this.props.layThongTinTK();
    }
    dangNhap = (event) => {
        event.preventDefault();
        //Gọi phương thức đăng nhập redux
        this.props.dangNhap(this.state);
    }

    capNhatThongTin = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogin & nextProps.user.maLoaiNguoiDung !== 'GV') {
            return (
                <Redirect to='/trangchu' />
            )
        }
        if (nextProps.isLogin & nextProps.user.maLoaiNguoiDung === 'GV') {
            return (
                <Redirect to='/admin' />
            )
        }
        
    }
    render() {
        if (this.props.isLogin & this.props.user.maLoaiNguoiDung === 'GV') {
            return (<Redirect to='/admin' />)
        }
        else if (this.props.isLogin & this.props.user.maLoaiNguoiDung !== 'GV') {
            return (<Redirect to='/trangchu' />)
        }
        else if (this.props.isLogin === false) {
            return (
                <div className="wrap-login" >
                    <div className="over-play"></div>
                    <div className="my-form">
                        <div className="header"><h3>Đăng nhập</h3></div>
                        <div className="form-input">
                            <form onSubmit={this.dangNhap}>
                                <div className="form-group" >
                                    <span>Tài khoản</span>
                                    <input className="form-control" placeholder="Nhập tài khoản" name="taiKhoan" onChange={this.capNhatThongTin} required />
                                    <span className="icon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                <div className="form-group" >
                                    <span>Mật khẩu</span>
                                    <input type="password" className="form-control" placeholder="Nhập mật khẩu" name="matKhau" onChange={this.capNhatThongTin} required />
                                    <span className="icon2"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                                </div>
                                <div className="clear"></div>
                                <div className="form-group btn-center" >
                                    <button type="submit" className="btn btn-yellow">Đăng nhập</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dangNhap: (thongTinDangNhap) => {
            dispatch(dangNhapAction(thongTinDangNhap));
        },
        layDSLoaiNguoiDung: () => {
            dispatch(layDSLoaiNDung());
        },
        layDanhSachKhoaHoc: () => {
            dispatch(layDSKhoaHoc())
        },
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        }
    }
}
const mapStateToProp = (state) => {
    return {
        isLogin: state.quanLyNguoiDungStoreReducer.isLogin,
        mangLoaiNguoidung: state.quanLyNguoiDungStoreReducer.mangLoaiND,
        mangKhoaHoc: state.quanLyKhoaHocStoreReducer.mangKhoaHoc,
        // user: state.quanLyNguoiDungStoreReducer.user,
        user: state.quanLyNguoiDungStoreReducer.thongTin
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(DangNhap)