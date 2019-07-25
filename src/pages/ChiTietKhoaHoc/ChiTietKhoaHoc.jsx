import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layChiTietKhoaHoc, dangKiKhoaHoc, huyDangKiKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
class ChiTietKhoaHoc extends Component {
    // componentDidMount() {
    //     this.props.layCTietKhoaHoc(this.props.chitiet.maKhoaHoc);
    // }
    render() {
        let objStyle = { backgroundImage: `url(${this.props.chitiet.hinhAnh})` };
        return (
            <div className="wrap-detail">
                <div className="detail-course" style={objStyle}>
                    {/* <img src={this.props.chitiet.hinhAnh} alt=""/> */}
                    <div className="over-play"></div>
                    <div className="info-course">
                        <h3>{this.props.chitiet.tenKhoaHoc}</h3>
                        <p className="lead">
                            Đánh giá khóa học
                        <i className="fa fa-star fa-star-1" data-stt={1} data-toggle="modal" data-target="#modal-evaluate-notify" />
                            <i className="fa fa-star-2 fa-star" data-stt={2} data-toggle="modal" data-target="#modal-evaluate-notify" />
                            <i className="fa fa-star-3 fa-star" data-stt={3} data-toggle="modal" data-target="#modal-evaluate-notify" />
                            <i className="fa fa-star-4 fa-star" data-stt={4} data-toggle="modal" data-target="#modal-evaluate-notify" />
                            <i className="fa fa-star-5 fa-star" data-stt={5} data-toggle="modal" data-target="#modal-evaluate-notify" />
                        </p>

                        <button className="btn btn-yellow" onClick={() => this.props.dangKiKH(this.props.chitiet.maKhoaHoc, this.props.user.taiKhoan)}>Đăng kí</button>
                    </div>

                    {/* <button className="btn btn-danger" onClick={() => this.props.huyDangKiKH(this.props.chitiet.maKhoaHoc,this.props.user.taiKhoan)}>huy dang ki</button> */}
                </div >
                <div className="intro">
                    <h3>Giới thiệu khóa học</h3>
                    <p>{this.props.chitiet.moTa}</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        chitiet: state.quanLyKhoaHocStoreReducer.chiTietKhoaHoc,
        user: state.quanLyNguoiDungStoreReducer.thongTin
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        layCTietKhoaHoc: (MaKhoaHoc) => {
            dispatch(layChiTietKhoaHoc(MaKhoaHoc))
        },
        dangKiKH: (MaKhoaHoc, TaiKhoan) => {
            dispatch(dangKiKhoaHoc(MaKhoaHoc, TaiKhoan))
        },
        huyDangKiKH: (MaKhoaHoc, TaiKhoan) => {
            dispatch(huyDangKiKhoaHoc(MaKhoaHoc, TaiKhoan))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChiTietKhoaHoc)
