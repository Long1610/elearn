import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layDanhSachChuaGhiDanh, layDanhSachDaGhiDanh, layDanhSachChoXetDuyet, xacThucNguoiDung } from '../../redux/actions/QuanLyNguoiDung.action';
import { huyDangKiKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
class ModalGhiDanh extends Component {

    componentDidMount() {
        this.props.layDSChuaGDanh(this.props.MaKH);
        this.props.layDSDaGhiDanh(this.props.MaKH);
        this.props.layDanhSachChoXetDuyet(this.props.MaKH);
    }

    renderNguoiDungChuaGhiDanh = () => {
        return this.props.danhSachChuaGhiDanh.map((nd, index) => {
            return (
                <option key={index} >{nd.taiKhoan}</option>
            )
        })

    }
    renderNguoiDungDaGhiDanh = () => {
        return this.props.danhSachDaGhiDanh.map((nd, index) => {
            return (
                <tr key={index}>
                    <td>{nd.taiKhoan}</td>
                    <td>{nd.hoTen}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => this.props.huyDangKiKH(this.props.MaKH, nd.taiKhoan)}>Hủy</button></td>

                </tr>
            )
        })

    }
    renderNguoiDungChoXacThuc = () => {
        return this.props.danhSachChoXetDuyet.map((nd, index) => {
            return (
                <tr key={index}>
                    <td>{nd.taiKhoan}</td>
                    <td>{nd.hoTen}</td>
                    <td>
                        <button className="btn btn-success" onClick={() => this.props.xacThucNguoiDung(this.props.MaKH, nd.taiKhoan)}>Ghi danh</button>
                        <button className="btn btn-danger" onClick={() => this.props.huyDangKiKH(this.props.MaKH, nd.taiKhoan)}>Hủy</button></td>

                </tr>
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
    render() {
        return (
            <div onChange={this.layMaKH}>
                <div class="modal fade" id="modelGhiDanh" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Ghi danh khóa học</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Học viên chưa ghi danh</p>
                                <div className="up-combo">
                                    <select name="taiKhoan" onChange={this.layThongTin} className="form-control">
                                        {this.renderNguoiDungChuaGhiDanh()}
                                    </select>
                                    <button className="btn btn-danger" onClick={() => this.props.xacThucNguoiDung(this.props.MaKH, this.state.taiKhoan)}>Ghi danh</button>
                                </div>

                                <p>Học viên chờ xác thực </p>
                                <div className="my">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Tài khoản</th>
                                                <th>Họ tên</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderNguoiDungChoXacThuc()}
                                        </tbody>
                                    </table>

                                </div >
                                <p>Học viên đã ghi danh </p>
                                <div className="my">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Tài khoản</th>
                                                <th>Họ tên</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderNguoiDungDaGhiDanh()}
                                        </tbody>
                                    </table>

                                </div >
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layDSChuaGDanh: (MaKhoaHoc) => {
            dispatch(layDanhSachChuaGhiDanh(MaKhoaHoc));
        },
        xacThucNguoiDung: (MaKhoaHoc, TaiKhoan) => {
            dispatch(xacThucNguoiDung(MaKhoaHoc, TaiKhoan));
        },
        layDanhSachChoXetDuyet: (MaKhoaHoc) => {
            dispatch(layDanhSachChoXetDuyet(MaKhoaHoc));
        },
        huyDangKiKH: (MaKhoaHoc, TaiKhoan) => {
            dispatch(huyDangKiKhoaHoc(MaKhoaHoc, TaiKhoan))
        },
        layDSDaGhiDanh: (MaKhoaHoc) => {
            dispatch(layDanhSachDaGhiDanh(MaKhoaHoc));
        }
    }
}
const mapStateToProp = (state) => {
    return {
        danhSachChuaGhiDanh: state.quanLyNguoiDungStoreReducer.danhSachChuaGhiDanh,
        danhSachChoXetDuyet: state.quanLyNguoiDungStoreReducer.danhSachChoXetDuyet,
        danhSachDaGhiDanh: state.quanLyNguoiDungStoreReducer.danhSachDaGhiDanh,
        MaKH: state.quanLyKhoaHocStoreReducer.MaKhoaHoc,
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ModalGhiDanh)