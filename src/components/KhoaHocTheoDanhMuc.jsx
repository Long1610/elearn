import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layDSKhoaHocTheoDM } from '../redux/actions/QuanLyKhoaHoc.action';
import KhoaHoc from './KhoaHoc';
class KhoaHocTheoDanhMuc extends Component {
    renderKhoaHoc = () => {
        return this.props.mangKHTheoDM.map((item, index) => {
            return (
                <div className="col-3 mb-3" key={index}>
                    <KhoaHoc khoahoc={item} />
                </div>
            )
        })
    }
    renderTenDanhMuc = () => {
        return this.props.mangKHTheoDM.map((item, index) => {
            return (
                <h2 className="name mb-4 mt-3" key={index}>
                    {item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                </h2>
            )
        })
    }
    renderMaDanhMuc = () => {
        return this.props.mangKHTheoDM.map((item, index) => {
            return (
                <div className="name" key={index}>
                    {item.maDanhMucKhoaHoc}
                </div>
            )
        })
    }
    componentDidMount() {
        this.props.layDanhSachKhoaHocTheoDM(this.renderMaDanhMuc());
    }
    render() {
        return (
            <div className="categories-course">
                <div className="name-cate">
                    {this.renderTenDanhMuc().slice(0, 1)}
                </div>
                <div className="container">
                    <h4 className="mt-3 mb-3">Các khóa học phổ biến</h4>
                    <div className="row">
                        {this.renderKhoaHoc()}
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangKHTheoDM: state.quanLyKhoaHocStoreReducer.mangKHTheoDM,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHocTheoDM: (maDM) => {
            dispatch(layDSKhoaHocTheoDM(maDM))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KhoaHocTheoDanhMuc)
