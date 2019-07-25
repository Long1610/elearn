import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { layDSKhoaHocTheoDM } from '../redux/actions/QuanLyKhoaHoc.action';
import { connect } from 'react-redux';
class DanhMucKhoaHoc extends Component {
    // componentDidMount() {
    //     this.props.layDanhSachKhoaHocTheoDM(maDM);
    // }
    render() {
        let { danhmuc } = this.props;
        return (
            <div>
                <NavLink className="nav-link" onClick={() => this.props.layDanhSachKhoaHocTheoDM(danhmuc.maDanhMuc)} to={`/cackhoahoc/${danhmuc.maDanhMuc}`}>{danhmuc.tenDanhMuc}</NavLink>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHocTheoDM: (maDM) => {
            dispatch(layDSKhoaHocTheoDM(maDM))
        },
    }
}
export default connect(null, mapDispatchToProps)(DanhMucKhoaHoc)