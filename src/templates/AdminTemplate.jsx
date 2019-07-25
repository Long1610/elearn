import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import QLKH from '../pages/QuanLyKhoaHoc/QLKH';
import QLND from '../pages/QuanLyNguoiDung/QLND';
import { layThongtinTaiKhoan } from '../redux/actions/QuanLyNguoiDung.action';
import { connect } from 'react-redux';
import * as CauHinh from '../common/CauHinh';
import QLGD from '../pages/QuanLyGhiDanh/QLGD';
class AdminTemplate extends Component {
    componentDidMount() {
        this.props.layThongTinTK();
    }
    dangXuat = () => {
        localStorage.clear();
        window.location.href = "/";
    }
    render() {
        return (

            <BrowserRouter>
                <Fragment>
                    <div className="my-admin">
                        <div className="column-left">

                            <img src="./img/avatar.png" alt="" />
                            <p>Xin chào : {this.props.user.taiKhoan}</p>


                            <NavLink className="nav-link" to="/nguoidung">Quản lý người dùng</NavLink>
                            <NavLink className="nav-link" to="/khoahoc">Quản lý khóa học</NavLink>
                            {/* <NavLink className="nav-link" to="/ghidanh">Quản lý ghi danh</NavLink> */}
                            <NavLink className="nav-link" to="/home">Cài đặt</NavLink>
                            <NavLink className="nav-link" onClick={this.dangXuat}>Thoát</NavLink>
                        </div>

                    </div>
                    <div className="table-admin">
                        <div className="column-right">
                            <Switch>
                                <Route path='/nguoidung' component={QLND} ></Route>
                                <Route path='/khoahoc' component={QLKH} ></Route>
                                <Route path='/ghidanh' component={QLGD} ></Route>
                                <Route path='/' component={QLND} ></Route>
                            </Switch>
                        </div>
                    </div>
                </Fragment>
            </BrowserRouter>

        )
    }
}
const mapStateToProp = (state) => {
    return {
        isLogin: state.quanLyNguoiDungStoreReducer.isLogin,
        user: state.quanLyNguoiDungStoreReducer.thongTin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        }
    }

}
export default connect(mapStateToProp, mapDispatchToProps)(AdminTemplate);