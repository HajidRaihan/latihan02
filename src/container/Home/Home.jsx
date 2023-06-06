import { Component } from "react";
import YouTubeComp from "../../component/YoutubeComp/YouTubeComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <YouTubeComp time="7.34" title="ini adalah judul ke 1 " desc="ini adalah deskripsi 1" />
        <YouTubeComp time="5.66" title="ini adalah judul ke 2" desc="ini adalah deskripsi 2" />
        <YouTubeComp time="3.99" title="ini adalah judul ke 3" desc="ini adalah deskripsi 3" />
        <YouTubeComp time="1.34" title="ini adalah judul ke 4" desc="ini adalah deskripsi 4" />
        <YouTubeComp time="2.34" title="ini adalah judul ke 5" desc="ini adalah deskripsi 5" /> */}

        <p>counter</p>
        <hr />
        <Product />
      </div>
    );
  }
}

export default Home;
