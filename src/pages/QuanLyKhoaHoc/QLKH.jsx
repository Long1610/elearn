import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layDSKhoaHoc, xoaKhoaHoc, suaKhoaHocAction} from '../../redux/actions/QuanLyKhoaHoc.action';
import { layDanhSachChuaGhiDanh, layDanhSachDaGhiDanh, layDanhSachChoXetDuyet } from '../../redux/actions/QuanLyNguoiDung.action';
import ModalThem from './ModalThem';
import ModalCapNhat from './ModalCapNhat';
import ModalGhiDanh from './ModalGhiDanh';
import $ from '../../../node_modules/jquery/dist/jquery'
class QLKH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            todosPerPage: 3,
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
        let totalPage = Math.ceil(this.props.mangKhoaHoc.length / this.state.todosPerPage);
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
    componentDidMount() {
        this.props.layDanhSachKhoaHoc();
    }
    layMaKH = (MaKhoaHoc) => {
        localStorage.setItem('makh', JSON.stringify(MaKhoaHoc));
        return this.MaKhoaHoc
    }
    render() {
        const { currentPage, todosPerPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.mangKhoaHoc.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderTodos = currentTodos.map((todo, index) => {
            return (<tr key={index}>
                <td>{todo.tenKhoaHoc}</td>
                <td>{todo.moTa}</td>
                <td><img width={'20%'} src={todo.hinhAnh} alt /></td>
                <td>{todo.biDanh}</td>
                <td>{todo.ngayTao}</td>
                <td>
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelCapNhat" onClick={() => this.props.suaKhoaHoc(todo)}>Sửa</button>
                    <button className="btn btn-danger" onClick={() => this.props.xoaKhoaHoc(todo.maKhoaHoc)}>Xóa</button>
                </td>
                <td>
                    <button className="btn btn-yellow" data-toggle="modal" data-target="#modelGhiDanh" onClick={() => this.layMaKH(todo.maKhoaHoc)}>Ghi danh</button>
                </td>
            </tr>)
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.mangKhoaHoc.length / todosPerPage); i++) {
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
                {/* <input id="myInput" type="text" placeholder="Search.."></input> */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên khóa học</th>
                            <th>Mô tả</th>
                            <th>Hình ảnh</th>
                            <th>Bí danh</th>
                            <th>Ngày tạo</th>
                            <th><button className="btn btn-primary" data-toggle="modal" data-target="#modelThem">Thêm</button></th>
                        </tr>
                    </thead>
                    <tbody id="myTable">
                        {renderTodos}
                    </tbody>
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
                <ModalGhiDanh />
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangKhoaHoc: state.quanLyKhoaHocStoreReducer.mangKhoaHoc,
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: () => {
            dispatch(layDSKhoaHoc())
        },
        xoaKhoaHoc: (MaKhoaHoc) => {
            dispatch(xoaKhoaHoc(MaKhoaHoc))
        },
        suaKhoaHoc: (khoaHoc) => {
            dispatch(suaKhoaHocAction(khoaHoc))
        },
        layDSChuaGD: (MaKhoaHoc) => {
            dispatch((layDanhSachChuaGhiDanh(MaKhoaHoc)))
        },
        layDSDaGD: (MaKhoaHoc) => {
            dispatch((layDanhSachDaGhiDanh(MaKhoaHoc)))
        },
        layDSChoXetDuyet: (MaKhoaHoc) => {
            dispatch((layDanhSachChoXetDuyet(MaKhoaHoc)))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QLKH)
