import React, { Component } from 'react';
import { layDanhMucKhoaHoc } from '../redux/actions/QuanLyKhoaHoc.action';
import { connect } from 'react-redux';
import DanhMucKhoaHoc from './DanhMucKhoaHoc';
class CacDanhMuc extends Component {
    renderDanhMuc = () => {
        return this.props.mangDMKhoaHoc.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <DanhMucKhoaHoc danhmuc={item} />
                </div>
            )
        })
    }
    componentDidMount() {
        this.props.layDanhMucKhoaHoc();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderDanhMuc()}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhMucKhoaHoc: () => {
            dispatch(layDanhMucKhoaHoc())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        mangDMKhoaHoc: state.quanLyKhoaHocStoreReducer.mangDMKhoaHoc
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(CacDanhMuc)