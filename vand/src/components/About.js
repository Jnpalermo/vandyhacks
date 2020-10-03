import React from "react";
import * as handTrack from "handtrackjs";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Question from "./question";
import ImageCarousel from "./carousel";
import ProgressBar from "react-bootstrap/ProgressBar";
const axios = require("axios");

class Video extends React.Component {
  sign_images = [
    {
      name: "A",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.49%20PM.jpg?raw=true",
    },
    {
      name: "B",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.50%20PM.jpg?raw=true",
    },
    {
      name: "C",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.50%20PM%20%232.jpg?raw=true",
    },
    {
      name: "D",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.50%20PM.jpg?raw=true",
    },
    {
      name: "E",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.53%20PM.jpg?raw=true",
    },
    {
      name: "F",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.54%20PM.jpg?raw=true",
    },
    {
      name: "G",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.54%20PM%20%232.jpg?raw=true",
    },
    {
      name: "H",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.55%20PM.jpg?raw=true",
    },
    {
      name: "I",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.56%20PM.jpg?raw=true",
    },
    {
      name: "J",
      image:
        "https://raw.githubusercontent.com/Jnpalermo/vandyhacks/master/data/Photo%20on%2010-3-20%20at%204.56%20PM.jpg?raw=true",
    },
    {
      name: "K",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.59%20PM.jpg?raw=true",
    },
    {
      name: "L",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%204.59%20PM%20%233.jpg?raw=true",
    },
    {
      name: "M",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.00%20PM%20%232.jpg?raw=true",
    },
    {
      name: "N",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.01%20PM.jpg?raw=true",
    },
    {
      name: "O",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.02%20PM%20%232.jpg?raw=true",
    },
    {
      name: "P",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.02%20PM.jpg?raw=true",
    },
    {
      name: "Q",
      image: "?raw=true",
    },
    {
      name: "R",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.02%20PM%20%233.jpg?raw=true",
    },
    {
      name: "S",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.03%20PM.jpg?raw=true",
    },
    {
      name: "T",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.03%20PM%20%232.jpg?raw=true",
    },
    {
      name: "U",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.04%20PM.jpg?raw=true",
    },
    {
      name: "V",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.04%20PM%20%232.jpg?raw=true",
    },
    {
      name: "W",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.04%20PM%20%233.jpg?raw=true",
    },
    {
      name: "X",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.05%20PM.jpg?raw=true",
    },
    {
      name: "Y",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.06%20PM.jpg?raw=true",
    },
    {
      name: "Z",
      image:
        "https://github.com/Jnpalermo/vandyhacks/blob/master/data/Photo%20on%2010-3-20%20at%205.06%20PM%20%232.jpg?raw=true",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      selected_image: this.sign_images[0],
      total_questions: this.sign_images.length,
      correct_count: 0,
      class: [],
    };
  }

  model = null;

  makeRequest = true;

  runDetection() {
    const video = document.getElementById("webcam");
    let canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    this.model.detect(video).then((predictions) => {
      if (predictions.length == 1) {
        // get the canvas context for drawing
        let screenshot_context = canvas.getContext("2d");

        // draw the video contents into the canvas x, y, width, height
        screenshot_context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // get the image data from the canvas object

        console.log("Try");

        if (this.makeRequest) {
          let ctx = canvas.getContext("2d");
          ctx.drawImage(
            video,
            predictions[0]["bbox"][0],
            predictions[0]["bbox"][1],
            predictions[0]["bbox"][2] + 15,
            predictions[0]["bbox"][3] + 15,
            0,
            0,
            canvas.width,
            canvas.height
          );
          const dataURL = canvas.toDataURL("image/png");

          //  const w = window.open('about:blank', 'image from canvas');
          //  w.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
          //  console.log('Saved!');

          // set the source of the img tag
          //  const img = document.getElementById('thumbnail_img');
          //  img.setAttribute('src', dataURL);
          console.log("Reuqets Made");
          axios
            .post("http://localhost:3000/post_image", { img: dataURL })
            .then((response) => {
              console.log(response);
              this.setState({
                class: response.data.images[0].classifiers[1].classes,
              });
            })
            .catch((error) => {});
          this.makeRequest = false;

          setTimeout(() => {
            this.makeRequest = true;
          }, 4000);
        }
      }

      // console.log("Predictions: ", predictions);
      this.model.renderPredictions(predictions, canvas, context, video);
      requestAnimationFrame(this.runDetection.bind(this));
    });
  }

  startVideo() {
    const video = document.getElementById("webcam");
    handTrack.startVideo(video).then((status) => {
      console.log("video started", status);
      this.runDetection(video);
    });
  }

  componentDidMount() {
    // Load the model.
    const modelParams = {
      flipHorizontal: false, // flip e.g for video
      maxNumBoxes: 20, // maximum number of boxes to detect
      iouThreshold: 0.5, // ioU threshold for non-max suppression
      scoreThreshold: 0.6, // confidence threshold for predictions.
    };
    handTrack.load(modelParams).then((lmodel) => {
      this.model = lmodel;
      this.startVideo();
    });
  }

  myCallback = (data) => {
    this.setState({ selected_image: data });
  };

  render() {
    var alph = new Array(26).fill(0);
    var i;
    for (i = 65; i < 91; i = i + 1) {
      alph[i - 65] = String.fromCharCode(i);
    }
    const percentage =
      ((this.state.selected_image.name.charCodeAt(0) - 64) / 26) * 100;
    const correct_val = this.state.selected_image.name;
    return (
      <div>
        <div className container>
          <div className="row">
            <div className="col mr-12"></div>
          </div>
        </div>
        <div>
          <ProgressBar
            className="myProgress"
            active
            now={Math.floor(percentage)}
            label={`${Math.floor(percentage)}%`}
          />
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Correct
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {this.state.correct_count}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                      Incorrect
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {this.state.incorrect}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Score
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      0
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Try it Yourself{" "}
                  </h6>
                </div>
                <div className="card-body">
                  <video
                    className="videobox  border canvasbox"
                    autoPlay="autoPlay"
                    id="webcam"
                  ></video>
                  <canvas id="canvas" className="border canvasbox"></canvas>
                  {/* <img id="thumbnail_img"></img>  */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Reference Sign
                  </h6>
                </div>
                <div className="card-body">
                  <ImageCarousel
                    imageList={this.sign_images}
                    imgResponse={this.state.class}
                    callbackFromParent={this.myCallback}
                  ></ImageCarousel>
                  {/* <img  id = "static_img" src="https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/episodes/1/game-of-thrones-1-1920x1080.jpg/_jcr_content/renditions/cq5dam.web.1200.675.jpeg" className="img-thumbnail" alt="Responsive image"></img> */}
                  {/* <img id="thumbnail_img"></img>  */}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card border-left-success shadow h-200 py-2">
                    <div className="card-body next-prev">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div>
                            <Question content="Complete the sign for the following letter: " />
                            <div>
                              <h1>{this.state.selected_image.name}</h1>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
