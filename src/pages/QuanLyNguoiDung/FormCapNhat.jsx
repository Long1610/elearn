import React, { Component } from 'react'
import { Prompt, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { capNhatNguoiDung } from '../../redux/actions/QuanLyNguoiDung.action';
class FormCapNhat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            soDt: '',
            maLoaiNguoiDung: '',
            maNhom: '',
            email: ''
        }

    }
    capNhatND = (event) => {
        event.preventDefault();
        this.props.capNhatND(this.state);
    }
    componentWillReceiveProps = (nextProp) => {
        this.setState(nextProp.nguoiDungSua);
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
            <form onSubmit={this.capNhatND} className="container">
                <div className="form-group">
                    <span>Tài khoản</span>
                    <input name="taiKhoan" value={this.state.taiKhoan} type="text" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mật khẩu</span>
                    <input type="text" name="matKhau" value={this.state.matKhau} className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Họ tên</span>
                    <input type="text" name="hoTen" value={this.state.hoTen} className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Số điện thoại</span>
                    <input type="text" name="soDt" value={this.state.soDt} className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mã loại người dùng</span>
                    <input type="text" name="maLoaiNguoiDung" value={this.state.maLoaiNguoiDung} className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mã nhóm</span>
                    <input type="text" name="maNhom" value={this.state.maNhom} className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Email</span>
                    <input type="text" name="email" value={this.state.email} className="form-control" onChange={this.layThongTin} />
                </div>
                <div className="form-group">
                    <button className="btn btn-success">Cập nhật</button>
                </div>
                {/* <Prompt when={this.state.TrangThai} message={location => 'Bạn có chắc muốn rời khỏi trang ?'}>
                </Prompt> */}
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        capNhatND: (nguoiDung) => {
            dispatch(capNhatNguoiDung(nguoiDung))
        }
    }
}
const mapStateToProp = (state) => {
    return {
        nguoiDungSua: state.quanLyNguoiDungStoreReducer.nguoiDungSua,
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(FormCapNhat)