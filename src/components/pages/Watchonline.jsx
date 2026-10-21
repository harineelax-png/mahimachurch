import React, { useRef, useState } from "react";
import { Play, Radio, Video } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const channelId = "UCet_qeJAbTvbjC5B_VrAtmA";
const uploadsPlaylistId = "UUet_qeJAbTvbjC5B_VrAtmA";

const channelVideos = [
  { id: "1SyI2rpSvSA", title: "Aalayam | ఆలయం by Potluri Ruthu Rathnam Garu" },
  { id: "UUxMvvT4UNs", title: "అమ్మ గారు ద్వారా ప్రకటించబడిన 105 దైవ ఆశీర్వాద వాగ్దానాలు | మహిమ కుటుంబం" },
  { id: "4ru0CDF9U9U", title: "105 prophetic promises given through Amma Garu" },
  { id: "gHjIHqocSng", title: "Generations of healing and deliverance in the Mahima Family" },
  { id: "iqUz1Wn8RpQ", title: "Hyderabad Church Anniversary · Day 7" },
  { id: "jncOMHeP0o4", title: "Hyderabad Church Anniversary · Day 6" },
  { id: "jtviKkv9cvI", title: "Hyderabad Church Anniversary · Day 5" },
  { id: "asrDVa8281o", title: "Hyderabad Church Anniversary · Day 4" },
  { id: "oMlh6BSo2O8", title: "Hyderabad Church Anniversary · Day 3" },
  { id: "nqAU0dxm0lU", title: "Hyderabad Church Anniversary · Day 2" },
  { id: "J6Z6Eg2EmWs", title: "Youth Festival · Truth Festival" },
  { id: "kqeyU-6_cbU", title: "Fathers are truly one of a kind" },
];

function VideoSection() {
  const [view, setView] = useState("latest");
  const [selectedVideo, setSelectedVideo] = useState(channelVideos[0]);
  const playerRef = useRef(null);
  const videoSrc = view === "live"
    ? `https://www.youtube-nocookie.com/embed/live_stream?channel=${channelId}&autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${selectedVideo.id}?rel=0&modestbranding=1&autoplay=1`;

  const selectVideo = (video) => {
    setSelectedVideo(video);
    setView("latest");
    window.requestAnimationFrame(() => {
      playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="watch-page">
      <section className="watch-hero">
        <ScrollReveal className="watch-hero-content">
          <span className="theme-eyebrow">Mahima Church · Watch Online</span>
          <h1>Worship with us, wherever you are.</h1>
          <p>Messages, worship, and live services from the Mahima Swaramu channel—playing right here.</p>
        </ScrollReveal>
      </section>

      <section className="watch-content" aria-labelledby="watch-title">
        <ScrollReveal className="watch-heading">
          <div>
            <span className="theme-eyebrow">Watch &amp; grow in faith</span>
            <h2 id="watch-title">{view === "live" ? "Live worship" : "Now playing"}</h2>
            {view !== "live" && <p className="watch-current-title">{selectedVideo.title}</p>}
          </div>
          <div className="watch-tabs" role="group" aria-label="Choose what to watch">
            <button
              type="button"
              className={view === "live" ? "watch-tab active" : "watch-tab"}
              onClick={() => setView("live")}
              aria-pressed={view === "live"}
            >
              <Radio size={17} aria-hidden="true" /> Live stream
            </button>
            <button
              type="button"
              className={view === "latest" ? "watch-tab active" : "watch-tab"}
              onClick={() => setView("latest")}
              aria-pressed={view === "latest"}
            >
              <Video size={17} aria-hidden="true" /> Latest messages
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal className="watch-player-wrap" ref={playerRef}>
          <div className="watch-player">
            <iframe
              key={videoSrc}
              src={videoSrc}
              title={view === "live" ? "Mahima Church live stream" : selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="watch-note">
            {view === "live"
              ? "The live player will show the service when Mahima Church is broadcasting."
              : "Select a message below to play it here without leaving the website."}
          </p>
        </ScrollReveal>

        <ScrollReveal className="watch-library-heading">
          <div>
            <span className="theme-eyebrow">From Mahima Swaramu</span>
            <h2>More to watch</h2>
            <p>Choose a video to play in the featured player above.</p>
          </div>
        </ScrollReveal>

        <div className="watch-video-grid">
          {channelVideos.map((video, index) => (
            <ScrollReveal key={video.id} delay={Math.min(index % 4, 3) * 0.06}>
              <button
                type="button"
                className={`watch-video-card${view !== "live" && selectedVideo.id === video.id ? " selected" : ""}`}
                onClick={() => selectVideo(video)}
                aria-pressed={view !== "live" && selectedVideo.id === video.id}
              >
                <span className="watch-video-thumb">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                    alt=""
                    loading="lazy"
                  />
                  <span className="watch-video-play"><Play size={18} fill="currentColor" aria-hidden="true" /></span>
                </span>
                <span className="watch-video-title">{video.title}</span>
                <span className="watch-video-channel">Mahima Swaramu</span>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="watch-archive">
          <div className="watch-archive-copy">
            <span className="theme-eyebrow">The complete collection</span>
            <h2>Explore all channel videos</h2>
            <p>Browse the full Mahima Swaramu uploads playlist below. Choose any message to watch it in the embedded player.</p>
          </div>
          <div className="watch-archive-player">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${uploadsPlaylistId}&rel=0`}
              title="All Mahima Swaramu channel videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}

export default VideoSection;
