import React, { Component } from 'react'
import { Prompt, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { themKhoaHoc, layHinhAnhKhoaHoc, layDanhMucKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
import { layThongtinTaiKhoan } from '../../redux/actions/QuanLyNguoiDung.action';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
class FormThem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: 0,
            hinhAnh: '',
            maNhom: 'GP01',
            ngayTao: '',
            maDanhMucKhoaHoc: 'BackEnd',
            taiKhoanNguoiTao: this.props.user.taiKhoan,
        }

    }
    renderDanhMuc = () => {
        return this.props.mangDMKhoaHoc.map((dm, index) => {
            return (
                <option key={index}>{dm.maDanhMuc}</option>
            )
        })
    }
    themKH = (event) => {
        event.preventDefault();
        const fd = new FormData();
        fd.append('File', this.state.hinhAnh, this.state.hinhAnh.name);
        fd.append('tenKhoaHoc', this.state.tenKhoaHoc);
        this.state.hinhAnh = this.state.hinhAnh.name;
        this.props.themKhoaHoc(this.state, fd);
    }
    componentDidMount() {
        this.props.layThongTinTK();
        this.props.layDanhMucKhoaHoc();
    }
    uploadHinhAnh = (event) => {
        this.setState({
           hinhAnh: event.target.files[0]
        }, () => {
            console.log(this.state.hinhAnh)
        })
    }
    layThongTinDanhMuc = (event) => {
        this.setState({
            maDanhMucKhoaHoc: event.target.value,

        })
    }
    layThongTin = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,

        })
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.themKH} className="container">
                <div className="form-group">
                    <span>Mã Khóa học</span>
                    <input name="maKhoaHoc" type="text" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Bí danh </span>
                    <input type="text" name="biDanh" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Tên khóa học</span>
                    <input type="text" name="tenKhoaHoc" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mô tả</span>
                    <input type="text" name="moTa" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Lượt xem</span>
                    <input type="text" name="luotXem" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <label htmlFor='image'>
                        <span>Hình ảnh</span>
                    </label>
                    {/* <input type="text" name="hinhAnh" className="form-control" onChange={this.layThongTin} /> */}
                    <input id='image' type="file" name="hinhAnh" className="form-control" onChange={this.uploadHinhAnh} />
                </div>
                <div className="form-group">
                    <span>Ngày tạo</span>
                    <input type="text" name="ngayTao" className="form-control" onChange={this.layThongTin} />
                    {/* <input name="ngayTao" type="date" dateformat="d M y" class="form-control" onChange={this.layThongTin} /> */}

                </div>
                <div className="form-group">
                    <span className="mr-3">Mã danh mục</span>
                    <select name="maDanhMucKhoaHoc" className="form-control" onChange={this.layThongTin}>
                        {this.renderDanhMuc()}
                    </select>

                </div>
                <div className="form-group">
                    <button className="btn btn-success">Thêm</button>
                </div>
                {/* <Prompt when={this.state.TrangThai} message={location => 'Bạn có chắc muốn rời khỏi trang ?'}>
                </Prompt> */}
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themKhoaHoc: (khoaHoc, fd) => {
            dispatch(themKhoaHoc(khoaHoc, fd));
        },
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        },
        layDanhMucKhoaHoc: () => {
            dispatch(layDanhMucKhoaHoc())
        }
    }
}
const mapStateToProp = (state) => {
    return {
        user: state.quanLyNguoiDungStoreReducer.thongTin,
        mangDMKhoaHoc: state.quanLyKhoaHocStoreReducer.mangDMKhoaHoc,
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(FormThem)