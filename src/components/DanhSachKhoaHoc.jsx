import React, { Component } from 'react';
import { layDSKhoaHoc } from '../redux/actions/QuanLyKhoaHoc.action';
import { connect } from 'react-redux';
import KhoaHoc from './KhoaHoc';

class DanhSachKhoahoc extends Component {
    renderKhoaHoc = () => {
        return this.props.mangKhoaHoc.map((item, index) => {
            return (
                <div className="col-3 mb-3" key={index}>
                    <KhoaHoc khoahoc={item}/>
                </div>
            )
        })
    }
    componentDidMount() {
        this.props.layDanhSachKhoaHoc();
    }
    render() {
        return (
            <div className="container">
                <h2 className="mt-4 mb-3">Các khóa học mới nhất</h2>
                <div className="row">
                    {this.renderKhoaHoc().slice(0,8)}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: () => {
            dispatch(layDSKhoaHoc())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        mangKhoaHoc: state.quanLyKhoaHocStoreReducer.mangKhoaHoc
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoahoc)