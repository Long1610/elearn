import React, { Component } from 'react'
import { Prompt, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { layDanhMucKhoaHoc, capNhatKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
import { layThongtinTaiKhoan } from '../../redux/actions/QuanLyNguoiDung.action';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
class FormCapNhat extends Component {
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
            maDanhMucKhoaHoc: '',
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
    capNhatKH = (event) => {
        event.preventDefault();
        const fd = new FormData();
        fd.append('File', this.state.hinhAnh, this.state.hinhAnh.name);
        fd.append('tenKhoaHoc', this.state.tenKhoaHoc);
        this.state.hinhAnh = this.state.hinhAnh.name;
        this.props.capNhatKH(this.state, fd);
    }
    componentDidMount() {
        this.props.layThongTinTK();
        this.props.layDanhMucKhoaHoc();
    }
    componentWillReceiveProps = (nextProp) => {
        this.setState(nextProp.khoaHocSua);
    }
    uploadHinhAnh = (event) => {
        this.setState({
            hinhAnh: event.target.files[0]
        })
    }
    uploadClick = () => {
        const fd = new FormData();
        fd.append('Files', this.state.hinhAnh, this.state.hinhAnh.name)
        Axios.post('http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', fd)
            .then(res => {
                console.log(res);
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
            <form onSubmit={this.capNhatKH} className="container">
                <div className="form-group">
                    <span>Mã Khóa học</span>
                    <input name="maKhoaHoc" value={this.state.maKhoaHoc} type="text" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Bí danh </span>
                    <input type="text" value={this.state.biDanh} name="biDanh" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Tên khóa học</span>
                    <input type="text" value={this.state.tenKhoaHoc} name="tenKhoaHoc" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mô tả</span>
                    <input type="text" value={this.state.moTa} name="moTa" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Lượt xem</span>
                    <input type="text" value={this.state.luotXem} name="luotXem" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Hình ảnh</span>
                    {/* <input type="text" value={this.state.hinhAnh} name="hinhAnh" className="form-control" onChange={this.layThongTin} /> */}
                    <input type="file"  name="hinhAnh" className="form-control" onChange={this.uploadHinhAnh} />

                </div>
                <div className="form-group">
                    <span>Ngày tạo</span>
                    <input type="text" value={this.state.ngayTao} name="ngayTao" className="form-control" onChange={this.layThongTin} />
                    {/* <input name="ngayTao" type="date" class="form-control" onChange={this.layThongTin} /> */}

                </div>
                <div className="form-group">
                    <span className="mr-3">Mã danh mục</span>
                    <input type="text" value={this.state.maDanhMucKhoaHoc} name="maDanhMucKhoaHoc" className="form-control" onChange={this.layThongTinDanhMuc} />
                    {/* <select  name="maDanhMucKhoaHoc" className="form-control" onChange={this.layThongTin}> */}
                    {/* {this.renderDanhMuc()} */}
                    {/* <option value={this.state.maDanhMucKhoaHoc}></option>
                    </select> */}

                </div>
                <div className="form-group">
                    <button className="btn btn-success">Lưu</button>
                </div>
                {/* <Prompt when={this.state.TrangThai} message={location => 'Bạn có chắc muốn rời khỏi trang ?'}>
                </Prompt> */}
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        },
        layDanhMucKhoaHoc: () => {
            dispatch(layDanhMucKhoaHoc())
        },
        capNhatKH: (khoaHoc, fd) => {
            dispatch(capNhatKhoaHoc(khoaHoc, fd))
        }
    }
}
const mapStateToProp = (state) => {
    return {
        user: state.quanLyNguoiDungStoreReducer.thongTin,
        mangDMKhoaHoc: state.quanLyKhoaHocStoreReducer.mangDMKhoaHoc,
        khoaHocSua: state.quanLyKhoaHocStoreReducer.khoaHocSua,
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(FormCapNhat)