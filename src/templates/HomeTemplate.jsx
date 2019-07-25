import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DangNhap from '../pages/DangNhap/DangNhap';
import ThongTinTaiKhoan from '../pages/ThongTinTaiKhoan/ThongTinTaiKhoan';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KhoaHocTheoDanhMuc from '../components/KhoaHocTheoDanhMuc';
import DangKy from '../pages/DangKi/DangKi';
import TrangChu from '../pages/TrangChu/TrangChu';
import AdminTemplate from './AdminTemplate';
import ChiTietKhoaHoc from '../pages/ChiTietKhoaHoc/ChiTietKhoaHoc';
import CacKhoaHocTimDuoc from '../components/CacKhoaHocTimDuoc';
export default class HomeTemplate extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path='/dangnhap' component={DangNhap} ></Route>
                        <Route path='/dangki' component={DangKy} ></Route>
                        <Route path='/timkiemkhoahoc/tenkhoahoc/:id' component={CacKhoaHocTimDuoc} ></Route>
                        <Route path='/cackhoahoc/:id' component={KhoaHocTheoDanhMuc} ></Route>
                        <Route path='/chitietkhoahoc/:id' component={ChiTietKhoaHoc} ></Route>
                        <Route path='/thongtintaikhoan' component={ThongTinTaiKhoan} ></Route>
                        <Route path='/' component={TrangChu} ></Route>
                        <Route path='/trangchu' component={TrangChu} ></Route>
                        <Route path='/admin' component={AdminTemplate} ></Route>
                    </Switch>
                    <Footer />
                </Fragment>
            </BrowserRouter>

        )
    }
}
