import React, { Component } from 'react'
import { Prompt, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { themNguoiDung } from '../../redux/actions/QuanLyNguoiDung.action';
class FormThem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDT: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: ''
        }

    }
    renderDanhMuc = () => {
        return this.props.mangDMKhoaHoc.map((dm, index) => {
            return (
                <option key={index}>{dm.maDanhMuc}</option>
            )
        })
    }
    themND = (event) => {
        event.preventDefault();
        this.props.themNguoiDung(this.state);
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
            <form onSubmit={this.themND} className="container">
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input name="taiKhoan" type="text" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input type="text" name="matKhau" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Họ tên</span>
                    <input type="text" name="hoTen" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Số điện thoại</span>
                    <input type="text" name="soDT" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mã loại người dùng</span>
                    <input type="text" name="maLoaiNguoiDung" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mã nhóm</span>
                    <input type="text" name="maNhom" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input type="text" name="email" className="form-control" onChange={this.layThongTin} />


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
        themNguoiDung: (nguoiDung) => {
            dispatch(themNguoiDung(nguoiDung));
        },
    }
}
export default connect(null, mapDispatchToProps)(FormThem)