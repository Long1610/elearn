import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="my-banner">
                <div className="over-play"></div>
                <div className="banner-content">
                   <p className="begin">khởi đầu sự nghiệp của bạn</p>
                   <p className="become">trở thành lập trình viên chuyên nghiệp tại cybersoft</p>
                   <button className="btn-watch">Xem khóa học</button>
                   <button className="btn-advise">Tư vấn học</button>
                </div>
            </div>
        )
    }
}