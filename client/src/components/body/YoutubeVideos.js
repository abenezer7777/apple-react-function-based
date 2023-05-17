import React, { useState, useEffect } from "react";
const API_KEY = process.env.REACT_APP_API_KEY;
function YoutubeVideos() {
  const [youTubeVideos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAQpNs_Y0A-Apzy55V6AC2QPiwPidljt94"
    )
      .then((response) => response.json())
      .then((data) => {
        const youTubeVideosData = data.items;
        setVideo(youTubeVideosData);
      });
  }, []);
  console.log(youTubeVideos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              latest Videos <br />
            </div>
          </div>
          {youTubeVideos.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}
export default YoutubeVideos;
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAQpNs_Y0A-Apzy55V6AC2QPiwPidljt94&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=1
// https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyAQpNs_Y0A-Apzy55V6AC2QPiwPidljt94;

//  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyAQpNs_Y0A-Apzy55V6AC2QPiwPidljt94
//  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCgdecrMD1EfiqFL_jlnPxvg&maxResults=10&order=date&key=AIzaSyAQpNs_Y0A-Apzy55V6AC2QPiwPidljt94
