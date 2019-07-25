import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="up mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 left">
                                <img src="./img/hoc-lt.png" alt="" width='100%' />
                            </div>
                            <div className="col-sm-6 right">
                                <form action="">
                                    <h3 className="text-center">Liên hệ tư vấn</h3>
                                    <div className="name wrap-input">
                                        <input type="text" placeholder="họ tên" />
                                        <span className="icon"><i class="fa fa-user"></i></span>
                                    </div>
                                    <div className="email wrap-input">
                                        <input type="text" placeholder="email" />
                                        <span className="icon"><i class="fa fa-envelope"></i></span>
                                    </div>
                                    <div className="phone wrap-input">
                                        <input type="text" placeholder="điện thoại" />
                                        <span className="icon"><i class="fa fa-phone"></i></span>
                                    </div>
                                    <div className="question">
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Bạn cần tư vấn thêm về chương trình, vui lòng để lại tin nhắn tại đây..."></textarea>
                                    </div>
                                    <button className="btn">Đăng kí tư vấn</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="down pt-4 pb-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 colum-one">
                                <div className="item-one">
                                    <img src="./img/cybersoft-logo-min.png" alt="" />
                                    <p>CyberSoft Academy – Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>
                                </div>
                                <div className="item-two">
                                    <h4>NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h4>
                                    <p>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                                    <form>
                                        <input type="text" />
                                        <button className="btn">Đăng kí</button>
                                    </form>
                                </div>
                                <div className="item-three">
                                    <ul>
                                        <li>  Cơ sở 1: 376 Võ Văn Tần – Quận 3</li>
                                        <li>Cơ sở 2: 459 Sư Vạn Hạnh – Quận 10</li>
                                        <li> Cơ sở 3: 82 Ung Văn Khiêm – Bình Thạnh</li>
                                        <li>  Cơ sở 4: Đà Nẵng – Quận Hải Châu</li>
                                        <li>  096.105.1014 – 098.407.5835</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-sm-4 colum-two">
                                <div className="item-one">
                                    <form action="">
                                        <h3>Liên hệ tư vấn</h3>
                                        <div className="name">
                                            <input type="text" placeholder="họ tên" />

                                        </div>
                                        <div className="email">
                                            <input type="text" placeholder="email" />

                                        </div>
                                        <div className="phone">
                                            <input type="text" placeholder="điện thoại" />

                                        </div>

                                        <button className="btn">Đăng kí tư vấn</button>
                                    </form>
                                </div>
                                <div className="item-two">
                                    <p>Lập trình Front End    Lập trình React JS    Lập trình React Angular     Lập trình tư duy    Lập trình NodeJS      Lập trình Backend   Lập trình Java Web   Lập trình Java Spring – Java Boot      Tôi Đi Code Dạo     Học SEO Hà Nội ở Vietmoz    Học lập trình trực tuyến</p>
                                </div>

                            </div>
                            <div className="col-sm-4">
                                <iframe name="f37a792fb8f1748" width="340px" height="325px" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D44%23cb%3Df3e063d8fd70a5c%26domain%3Dcybersoft.edu.vn%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Ff27c99a6438b36c%26relation%3Dparent.parent&amp;container_width=0&amp;height=325&amp;hide_cover=false&amp;hide_cta=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;tabs=timeline&amp;width=340"></iframe>
                                <p>Anh ngữ giao tiếp nền tảng – Foundation Anh ngữ giao tiếp thông dụng Anh ngữ giao tiếp –Môi trường làm việc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
