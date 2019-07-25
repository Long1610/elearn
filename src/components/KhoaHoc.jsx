import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { layChiTietKhoaHoc, dangKiKhoaHoc } from '../redux/actions/QuanLyKhoaHoc.action';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class KhoaHoc extends Component {
    render() {
        let { khoahoc } = this.props;
        return (
            <div className="all-course">
                <Card className="mycard">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={khoahoc.tenKhoaHoc}
                            height="140"
                            image={khoahoc.hinhAnh}
                            title={khoahoc.tenKhoaHoc}
                        />
                        <CardContent>
                            <div className="detail-show">
                                <NavLink className="nav-link" onClick={() => this.props.layCTKhoaHoc(khoahoc.maKhoaHoc)} to={`/chitietkhoahoc/${khoahoc.maKhoaHoc}`}>Chi tiết</NavLink>
                            </div>
                            <Typography gutterBottom variant="h5" component="h2">
                                {khoahoc.tenKhoaHoc}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {khoahoc.moTa}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <button className="btn btn-yellow" onClick={() => this.props.dangKiKH(khoahoc.maKhoaHoc, this.props.user.taiKhoan)}>Đăng kí</button>
                    </CardActions>
                </Card>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.quanLyNguoiDungStoreReducer.thongTin
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        layCTKhoaHoc: (MaKhoaHoc) => {
            dispatch(layChiTietKhoaHoc(MaKhoaHoc))
        },
        dangKiKH: (MaKhoaHoc, TaiKhoan) => {
            dispatch(dangKiKhoaHoc(MaKhoaHoc, TaiKhoan))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(KhoaHoc)