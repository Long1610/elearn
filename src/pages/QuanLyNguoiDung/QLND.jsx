import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layDSNguoiDung, xoaNguoiDung, suaNguoiDungAction } from '../../redux/actions/QuanLyNguoiDung.action';

import ModalThem from './ModalThem';
import ModalCapNhat from './ModalCapNhat';
import $ from '../../../node_modules/jquery/dist/jquery'
class QLND extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            todosPerPage: 5,
            upperPageBound: 3,
            lowerPageBound: 0,
            isPrevBtnActive: 'disabled',
            isNextBtnActive: '',
            pageBound: 3,
        }
        this.handleClick = this.handleClick.bind(this);
        this.btnDecrementClick = this.btnDecrementClick.bind(this);
        this.btnIncrementClick = this.btnIncrementClick.bind(this);
        this.btnNextClick = this.btnNextClick.bind(this);
        this.btnPrevClick = this.btnPrevClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }
    componentDidUpdate() {
        $("ul li.active").removeClass('active');
        $('ul li#' + this.state.currentPage).addClass('active');
    }

    handleClick(event) {
        let listid = Number(event.target.id);
        this.setState({
            currentPage: listid
        });
        $("ul li.active").removeClass('active');
        $('ul li#' + listid).addClass('active');
        this.setPrevAndNextBtnClass(listid);
    }
    setPrevAndNextBtnClass(listid) {
        let totalPage = Math.ceil(this.props.mangND.length / this.state.todosPerPage);
        this.setState({ isNextBtnActive: 'disabled' });
        this.setState({ isPrevBtnActive: 'disabled' });
        if (totalPage === listid && totalPage > 1) {
            this.setState({ isPrevBtnActive: '' });
        }
        else if (listid === 1 && totalPage > 1) {
            this.setState({ isNextBtnActive: '' });
        }
        else if (totalPage > 1) {
            this.setState({ isNextBtnActive: '' });
            this.setState({ isPrevBtnActive: '' });
        }
    }
    btnIncrementClick() {
        this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
        this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
        let listid = this.state.upperPageBound + 1;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }
    btnDecrementClick() {
        this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
        this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
        let listid = this.state.upperPageBound - this.state.pageBound;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }
    btnPrevClick() {
        if ((this.state.currentPage - 1) % this.state.pageBound === 0) {
            this.setState({ upperPageBound: this.state.upperPageBound - this.state.pageBound });
            this.setState({ lowerPageBound: this.state.lowerPageBound - this.state.pageBound });
        }
        let listid = this.state.currentPage - 1;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }
    btnNextClick() {
        if ((this.state.currentPage + 1) > this.state.upperPageBound) {
            this.setState({ upperPageBound: this.state.upperPageBound + this.state.pageBound });
            this.setState({ lowerPageBound: this.state.lowerPageBound + this.state.pageBound });
        }
        let listid = this.state.currentPage + 1;
        this.setState({ currentPage: listid });
        this.setPrevAndNextBtnClass(listid);
    }
    // renderNguoiDung = () => {
    //     return this.props.mangND.map((nd, index) => {
    //     return (
    //             <tr key={index}>
    //                 <td>{nd.taiKhoan}</td>
    //                 <td>{nd.hoTen}</td>
    //                 <td>{nd.soDt}</td>
    //                 <td>{nd.email}</td>
    //                 <td>
    //                     <button className="btn btn-success" data-toggle="modal" data-target="#modelCapNhat" onClick={() => this.props.suaNguoiDung(nd)}>Sửa</button>
    //                     <button className="btn btn-danger" onClick={() => this.props.xoaNguoiDung(nd.taiKhoan)}>Xóa</button></td>

    //             </tr>
    //     )
    //     })
    // }
    componentDidMount() {
        this.props.layDanhSachNguoiDung();
    }
    render() {
        const { currentPage, todosPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.mangND.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo, index) => {
            return (<tr key={index}>
                <td>{todo.taiKhoan}</td>
                <td>{todo.hoTen}</td>
                <td>{todo.soDt}</td>
                <td>{todo.email}</td>
                <td>
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelCapNhat" onClick={() => this.props.suaNguoiDung(todo)}>Sửa</button>
                    <button className="btn btn-danger" onClick={() => this.props.xoaNguoiDung(todo.taiKhoan)}>Xóa</button></td>
            </tr>)
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.mangND.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            if (number === 1 && currentPage === 1) {
                return (
                    <li key={number} className='active' id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
            else if ((number < upperPageBound + 1) && number > lowerPageBound) {
                return (
                    <li key={number} id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
                )
            }
        });
        let pageIncrementBtn = null;
        if (pageNumbers.length > upperPageBound) {
            pageIncrementBtn = <li className=''><a href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
        }
        let pageDecrementBtn = null;
        if (lowerPageBound >= 1) {
            pageDecrementBtn = <li className=''><a href='#' onClick={this.btnDecrementClick}> &hellip; </a></li>
        }
        let renderPrevBtn = null;
        if (isPrevBtnActive === 'disabled') {
            renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> Prev </span></li>
        }
        else {
            renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a></li>
        }
        let renderNextBtn = null;
        if (isNextBtnActive === 'disabled') {
            renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next </span></li>
        }
        else {
            renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}> Next </a></li>
        }
        return (
            <div className="my-cousre">
                {/* <input id="myInput" type="text"  placeholder="Search.."></input> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tài Khoản</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th><button className="btn btn-primary" data-toggle="modal" data-target="#modelThem">Thêm</button></th>
                        </tr>
                    </thead>
                    {/* <div className="user-content"> */}
                    <tbody id="myTable">
                        {renderTodos}
                    </tbody>
                    {/* </div> */}
                </table>
                <ul id="page-numbers" className="pagination">
                    {renderPrevBtn}
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                    {renderNextBtn}
                </ul>

                <ModalThem />
                <ModalCapNhat />
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangND: state.quanLyNguoiDungStoreReducer.mangND,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachNguoiDung: () => {
            dispatch(layDSNguoiDung())
        },
        xoaNguoiDung: (TaiKhoan) => {
            dispatch(xoaNguoiDung(TaiKhoan))
        },
        suaNguoiDung: (nguoiDung) => {
            dispatch(suaNguoiDungAction(nguoiDung))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QLND)
