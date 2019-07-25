import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layThongtinTaiKhoan, capNhatThongTinTaiKhoan } from '../../redux/actions/QuanLyNguoiDung.action'
import { layChiTietKhoaHoc, huyDangKiKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
import { NavLink } from 'react-router-dom';
class ThongTinTaiKhoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: this.props.user.taiKhoan,
            matKhau: '',
            hoTen: '',
            soDT: '',
            email: '',
            maLoaiNguoiDung: 'HV',
            maNhom: 'GP01',
        }

    }
    componentDidMount() {
        // this.props.layThongTinTaiKhoan();
    }
    renderKhoaHocGhiDanh = () => {
        return this.props.user.chiTietKhoaHocGhiDanh.map((kh, index) => {
            return (
                <div className="course-content d-flex" key={index}>
                    <div className="image-cour">
                        <img src="./img/kh9.jpg" alt="" />
                    </div>
                    <div className="about-course">
                        <h4>{kh.tenKhoaHoc}</h4>
                        <p>Lorem ipsum dolor sit amet cois officia ad unde, dolor illum enim consequuntur! Voluptates, molestiae doloribus?</p>
                        <div className="btn-active d-flex">
                            <button className="btn btn-yellow" onClick={() => this.props.huyDangKiKH(kh.maKhoaHoc, this.props.user.taiKhoan)}>Hủy</button>
                            <NavLink className="nav-link" onClick={() => this.props.layCTKhoaHoc(kh.maKhoaHoc)} to={`/chitietkhoahoc/${kh.maKhoaHoc}`}>Chi tiết</NavLink>
                        </div>
                    </div>
                </div>
            )
        })
    }
    layThongTin = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,

        })
        console.log(this.state);
    }

    capNhatTT = (event) => {
        event.preventDefault();
        this.props.capNhatThongTin(this.state);
    }

    render() {
        return (
            <div className="user container">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item active">
                        <a className="nav-link nav-title active" href="#profile" role="tab" data-toggle="tab">Thông tin tài khoản</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-title" href="#buzz" role="tab" data-toggle="tab">khóa học của tôi</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane fade in active" id="profile">
                        <div className="user-info">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Tài khoản</th>
                                        <th>Họ tên</th>
                                        <th>Số điện thoại</th>
                                        <th>Mật khẩu</th>
                                        <th>email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.props.user.taiKhoan}</td>
                                        <td>{this.props.user.hoTen}</td>
                                        <td>{this.props.user.soDT} </td>
                                        <td>{this.props.user.matKhau}</td>
                                        <td>{this.props.user.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="user-form">
                            <form onSubmit={this.capNhatTT}>
                                <div className="one-line d-flex">
                                    <div className="form-group">
                                        <span>Họ tên </span>
                                        <input type="text" name="hoTen" className="form-control my-text" onChange={this.layThongTin} />
                                    </div>
                                    <div className="form-group">
                                        <span>Số điện thoại</span>
                                        <input type="text" name="soDT" className="form-control my-text" onChange={this.layThongTin} />

                                    </div>
                                </div>
                                <div className="one-line d-flex">
                                    <div className="form-group">
                                        <span>Mật khẩu</span>
                                        <input type="text" name="matKhau" className="form-control my-text" onChange={this.layThongTin} />

                                    </div>
                                    <div className="form-group">
                                        <span>Email</span>
                                        <input type="text" name="email" className="form-control my-text" onChange={this.layThongTin} />

                                    </div>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-yellow">Cập nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="buzz">
                        <div className="all-course container mt-3 mb-4">
                            {this.renderKhoaHocGhiDanh()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.quanLyNguoiDungStoreReducer.thongTin,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinTaiKhoan: () => {
            dispatch(layThongtinTaiKhoan());
        },
        capNhatThongTin: (taikhoan) => {
            dispatch(capNhatThongTinTaiKhoan(taikhoan));
        },
        layCTKhoaHoc: (MaKhoaHoc) => {
            dispatch(layChiTietKhoaHoc(MaKhoaHoc))
        },
        huyDangKiKH: (MaKhoaHoc, TaiKhoan) => {
            dispatch(huyDangKiKhoaHoc(MaKhoaHoc, TaiKhoan))
        },
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinTaiKhoan)

