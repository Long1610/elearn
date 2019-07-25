import React, { Component, Fragment } from 'react'
import CacDanhMuc from './CacDanhMuc';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { layThongtinTaiKhoan } from '../redux/actions/QuanLyNguoiDung.action';
import { timKiemKhoaHoc } from '../redux/actions/QuanLyKhoaHoc.action';
import { Redirect } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenKhoaHoc: '',
            trangThai: false,
            click: false,
        }
    }
    componentDidMount() {
        // this.props.layThongTinTK();
        this.props.timKiemKH(this.state.tenKhoaHoc);
    }
    dangXuat = () => {
        localStorage.clear();
        window.location.href = "/";
    }
    layThongTin = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,

        })
        this.setState({
            trangThai: true
        })
        console.log(this.state);
    }
    hienthiDangNhap = () => {
        if (this.props.isLogin) {
            return (
                <div className="dropdown account">
                    <a className="btn btn-secondary dropdown-toggle account" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p>Xin chào : {this.props.user.taiKhoan}</p>
                    </a>
                    <div className="dropdown-menu user-in" aria-labelledby="dropdownMenuLink">
                        <NavLink className="dropdown-item" to="/thongtintaikhoan">Thông tin cá nhân</NavLink>
                        <NavLink className="dropdown-item" onClick={this.dangXuat}>Thoát</NavLink>
                    </div>
                </div>

            )
        }
        return (
            <div className="lg-sup">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dangnhap">Đăng nhập</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/dangki">Đăng Ký</NavLink>
                </li>
            </div>
        )

    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            click: true
        })
        this.props.timKiemKH(this.state.tenKhoaHoc);
    }
    render() {
        if (this.state.click === true) {
            this.setState({
                click: false
            })
            return (
                <Redirect to={`/timkiemkhoahoc/tenkhoahoc/${this.state.tenKhoaHoc}`} />
            )
        }
        return (
            <header>
                <nav className="navbar navbar-expand-sm">
                    <div className="col-sm-8 d-flex align-items-center left">
                        <NavLink className="nav-link navbar-brand" to="/trangchu"><img src="./img/logocy.png" alt="" /></NavLink>
                        <div className="categories">
                            <div id="dropdownButton" class="dropdownButton dropdown dropdown--topics">
                                <a href="#" className="dropdown-toggle tglink font-family" data-toggle="dropdown"><i className="fa fa-bars" aria-hidden="true" /> KHÓA HỌC &nbsp; <b className="caret" /></a>
                                <ul className="dropdown-menu_ dropdown-menu multi-column columns-3 nav-menu-child  menu-course">
                                    <li className="liMenuMain row">
                                        <ul className="multi-column-dropdown">
                                            <NavLink className="nav-link ml-3" to="/lienhe">Tất cả khóa học</NavLink>
                                            <CacDanhMuc />
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="input-search">
                            <form>
                                <div className="input-group">
                                    <input type="text" name="tenKhoaHoc" onChange={this.layThongTin} className="form-control" placeholder="Nhập tên khóa học" />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-yellow" onClick={this.handleClick}><i class="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex align-items-center right">
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <div className="liHotline">
                                        <span className="titleHotLine">&nbsp;HOT LINE</span>
                                        <br />
                                        <span className="titlePhone">&nbsp;0961.05.10.14</span>
                                    </div>
                                </li>
                                <li>
                                    {this.hienthiDangNhap()}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#myMenu" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                </nav>
            </header>
        )

    }
}
const mapStateToProp = (state) => {
    return {
        isLogin: state.quanLyNguoiDungStoreReducer.isLogin,
        user: state.quanLyNguoiDungStoreReducer.thongTin,
        KHTim: state.quanLyKhoaHocStoreReducer.khoaHocTim
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        },
        timKiemKH: (tenKH) => {
            dispatch(timKiemKhoaHoc(tenKH));
        }
    }

}
export default connect(mapStateToProp, mapDispatchToProps)(Header);


