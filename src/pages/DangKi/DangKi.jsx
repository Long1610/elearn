import React, { Component } from 'react'
import { Prompt, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { dangKiAction } from '../../redux/actions/QuanLyNguoiDung.action';

class DangKy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maNhom: "GP01",
            email: "",
            TrangThai: false,
            dangKi: false,
        }
    }
    dangKi = (event) => {
        event.preventDefault();
        //Gọi phương thức đăng nhập redux
        this.props.dangKi(this.state);
        this.setState({
            dangKi: true
        }, () => {
            this.props.history.push('/dangnhap')
        })
        // this.state.TrangThai = false;
        // this.props.history.replace('/dangnhap')
    }
    // componentWillReceiveProps(nextProps)
    // {
    //     if(nextProps.dangKi.onClick)
    //     {
    //         return (
    //             <Redirect to='/dangnhap' />
    //         )
    //     }
    // }
    layThongTin = (event) => { // khi khong co tham so thi se dai dien cho the input
        const input = event.target;
        this.setState({
            [input.name]: input.value
        })
        this.setState({
            TrangThai: true
        })
        console.log(this.state);

    }
    render() {
        // if (this.dangKi) {
        //     return (
        //         <Redirect to='/dangnhap' />
        //     )
        // }
        return (
            <div className="wrap-login wrap-regis" >
                <div className="my-form my-regis">
                    <div className="header"> <h3>Đăng kí</h3></div>
                    <div className="form-input">
                        <form onSubmit={this.dangKi}>
                            <div className="form-group">
                                <span>Tài Khoản</span>
                                <input name="taiKhoan" type="text" className="form-control" onChange={this.layThongTin} />

                            </div>
                            <div className="form-group">
                                <span>Mật khẩu</span>
                                <input type="text" name="matKhau" className="form-control" onChange={this.layThongTin} />

                            </div>
                            <div className="form-group">
                                <span>Họ tên</span>
                                <input type="text" name="hoTen" className="form-control" onChange={this.layThongTin} />

                            </div>
                            <div className="form-group">
                                <span>Số điện thoại</span>
                                <input type="text" name="soDT" className="form-control" onChange={this.layThongTin} />

                            </div>
                            <div className="form-group">
                                <span>Email</span>
                                <input type="text" name="email" className="form-control" onChange={this.layThongTin} />

                            </div>
                            <div className="form-group btn-center">
                                <button className="btn btn-yellow">Đăng ký</button>
                            </div>
                            <Prompt when={this.state.TrangThai} message={location => 'Bạn có chắc muốn rời khỏi trang ?'}>
                            </Prompt>
                        </form>
                    </div>
                </div>
            </div>
            // <form onSubmit={this.dangKi} className="container">
            //     <h2>Đăng kí</h2>
            //     <div className="form-group">
            //         <span>Tài Khoản</span>
            //         <input name="taiKhoan" type="text" className="form-control" onChange={this.layThongTin} />

            //     </div>
            //     <div className="form-group">
            //         <span>Mật khẩu</span>
            //         <input type="text" name="matKhau" className="form-control" onChange={this.layThongTin} />

            //     </div>
            //     <div className="form-group">
            //         <span>Họ tên</span>
            //         <input type="text" name="hoTen" className="form-control" onChange={this.layThongTin} />

            //     </div>
            //     <div className="form-group">
            //         <span>Số điện thoại</span>
            //         <input type="text" name="soDT" className="form-control" onChange={this.layThongTin} />

            //     </div>
            //     <div className="form-group">
            //         <span>Email</span>
            //         <input type="text" name="email" className="form-control" onChange={this.layThongTin} />

            //     </div>
            //     <div className="form-group">
            //         <button className="btn btn-success">Đăng ký</button>
            //     </div>
            //     <Prompt when={this.state.TrangThai} message={location => 'Bạn có chắc muốn rời khỏi trang ?'}>
            //     </Prompt>
            // </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dangKi: (thongTinDangKi) => {
            dispatch(dangKiAction(thongTinDangKi));
        }
    }
}

export default connect(null, mapDispatchToProps)(DangKy)