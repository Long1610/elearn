import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { layChiTietKhoaHoc } from '../redux/actions/QuanLyKhoaHoc.action';
class CacKhoaHocTimDuoc extends Component {
    renderKhoaHoc = () => {
        return this.props.KHTim.map((kh, index) => {
            return (
                <div className="course-content d-flex" key={index}>
                    <div className="image-cour">
                        <img src={kh.hinhAnh} alt="" />
                    </div>
                    <div className="about-course">
                        <h4>{kh.tenKhoaHoc}</h4>
                        <p>{kh.moTa}</p>
                        <NavLink className="nav-link" onClick={() => this.props.layCTKhoaHoc(kh.maKhoaHoc)} to={`/chitietkhoahoc/${kh.maKhoaHoc}`}>Chi tiết</NavLink>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="all-course container mt-3 mb-4">
                <div className="title">
                    <h3 className="mt-2 mb-3">Tìm thấy: {this.props.KHTim.length} khóa học</h3>
                </div>
                {this.renderKhoaHoc()}
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        KHTim: state.quanLyKhoaHocStoreReducer.khoaHocTim
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layCTKhoaHoc: (MaKhoaHoc) => {
            dispatch(layChiTietKhoaHoc(MaKhoaHoc))
        },
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(CacKhoaHocTimDuoc)