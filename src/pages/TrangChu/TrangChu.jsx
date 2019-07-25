import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DangNhap from '../../pages/DangNhap/DangNhap';
import DangKy from '../../pages/DangKi/DangKi';
import ThongTinTaiKhoan from '../../pages/ThongTinTaiKhoan/ThongTinTaiKhoan';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import DanhSachKhoaHoc from '../../components/DanhSachKhoaHoc';
import Footer from '../../components/Footer';
import KhoaHocTheoDanhMuc from '../../components/KhoaHocTheoDanhMuc';
import ChiTietKhoaHoc from '../../pages/ChiTietKhoaHoc/ChiTietKhoaHoc';
import HomeTemplate from '../../templates/HomeTemplate';
export default class TrangChu extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    {/* <Switch>
                        <Route path='/chitietkhoahoc/:id' component={ChiTietKhoaHoc} ></Route>
                    </Switch> */}
                    <Banner />
                    <DanhSachKhoaHoc />
                </Fragment>
            </BrowserRouter>
        )
    }
}
