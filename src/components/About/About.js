import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './About.css'
const About = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="container">
                <div className="card bg-dark text-white">
                    <img className="w-100 opacity-50" src="https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2020/11/01125750/indian-classical-music-FB.jpg" alt="..." />
                    <div className="card-img-overlay">
                        <h1 className="card-title">About Us</h1>
                        <h4 className="card-text">Since 1947, the Music Academy of the West has been making a unique and enduring contribution to the world of music by
                            Advancing the development of the next generation of great classically trained musicians
                            Cultivating discerning, appreciative, and adventurous audiences
                            The Music Academy of the West is among the nation’s preeminent summer schools and festivals for gifted young classically-trained musicians. At its ocean-side, ten-acre campus in Santa Barbara, California, the Academy provides these musicians with the opportunity for advanced study and performance under the guidance of internationally renowned faculty artists, guest conductors, and soloists during its Summer School and Festival, presenting nearly 200 public events on campus and in downtown Santa Barbara. The 2022 Summer </h4>

                    </div>

                </div>
            </div>
            <div className="cart-details">
                <img className="w-25 col-md-2 border border-primary border-3 m-3" src={"https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2020/11/01125750/indian-classical-music-FB.jpg"
                } alt="" />
                <img className="w-25 col-md-2 border border-primary border-3 m-3 " src={"https://th.bing.com/th/id/OIP.spWhKKCTsC9U3TNkg4Se-AHaEN?pid=ImgDet&rs=1"} alt="" />
                <img className="w-25 col-md-2 border border-primary border-3 m-3 " src={"https://th.bing.com/th/id/OIP.81-KE3ym1CbaqUFrgKJ5pgHaDt?pid=ImgDet&rs=1"} alt="" />
            </div>

            <div className="cart-detail">
                <img className=" imgs col-md-3 border border-primary border-3 m-3" src={"https://th.bing.com/th/id/OIP.7lEafq8YVZmhXECLArwuHQHaEg?pid=ImgDet&rs=1"
                } alt="" />
                <img className="img col-md-3 border border-primary border-3 m-3 " src={"https://media1.santabanta.com/full1/Indian%20%20Celebrities(M)/Lucky%20Ali/lucky-ali-0a.jpg"} alt="" />
                <img className=" img col-md-3 border border-primary border-3 m-3 " src={"https://img.docbao.vn/images/fullsize/2018/07/13/khac-han-cac-my-nhan-vline-jennie-black-pink-mat-tron-nhu-banh-bao-nhung-van-dep-xuat-sac-nho-bi-quyet-nay.jpg"} alt="" />
            </div>

        </div>
    );
};

export default About;