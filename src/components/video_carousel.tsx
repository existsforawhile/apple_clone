import {useRef, useState, useEffect} from "react"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
export default function VideoCarousel() {

	const videoRef = useRef([])
	const videoSpanRef = useRef([])
	const videoDivRef = useRef([])

	const [video, setVideo] = useState({
		idEnd: false,
		StartPlay: false,
		videoId: 0,
		isLastVideo: false,
		isPLaying: false,
	})

	const {isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

	const [loadedData, setLoadedData] = useState([])

	useGSAP(() => {
		gsap.to("#video", {
		scrollTrigger: {
			trigger: "#video",
			toggleActions: "restart none none none"
		},
		onComplete: (pre) => ({
			...pre,
			startPlay: true,
			isPlaying: true,
		})	
		})
	}, [isEnd, videoId])

	useEffect(() => {
		if(loadedData.length > 3) {
			videoRef.current[videoId].pause()
		} else {
			startPlay && videoREf.current[videoId].play()
		}

	}, [startPlay, videoId, isPlaying, loadedData])

	const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e])

	useEffect(() => {
		const currentProgress = 0;
		let span = videoSpanRef.current;

		if(span[videoId]) {
			let anim = gsap.to(span[videoId], {
		onUpdate: () => {},
		onComplete: () => {},
			})
		}

	}, [videoId, startPlay])

	  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: "/assets/videos/highlight-first.mp4",
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: "/assets/videos/highlight-first.mp4",
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: "/assets/videos/highlight-first.mp4",
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: "/assets/videos/highlight-first.mp4",
    videoDuration: 3.63,
  },
];


	return(
		<>
			<div className="flex items-center">
				{highlightsSlides.map((list, i) => (
	<div key={list.id} id="slider" className="sm:pr-20 pr-10">
	<div className="video-carousel_container">
	<div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
		<video id="video"
		ref={(el) => (videoRef.current[i] = el)} 
		onPlay={() => {
			setVideo((prevVideo) => (
		{
		...prevVideo, isPlaying: true
		}
			))
		}}
		playsInline={true}
		preload="auto"
		muted
		onLoadedMetadata={(e) =>
		handleLoadedMetadata(i, e)
		}
		>
		<source src={list.video} type="video/mp4"/>
		</video>
	</div>
	<div className="absolute top-12 left-[5%] z-10">
	{list.textLists.map((text) => (
		<p key={text} className="text-xl font-medium md:text-2xl">{text}</p>
	))}
	</div>
	</div>	
	</div>
				))}
			</div>

			<div className="relative flex-center mt-10 flex">
			<div className="flex flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
			{videoRef.current.map(
			(_, i) => (
				<span 
				key={i}
				ref={(el) => (videoDivRef.current[i] = el)}		
				className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
				>
				<span className="absolute h-full w-full rounded-full" 	ref={(el) => (videoSpanRef.current[i] = el)} />
	
				
				</span>
			)
			)}	
			</div>
		<button className="control-btn">
	          <img
            src={isLastVideo ? "/assets/images/replay.svg" : !isPlaying ? "/assets/images/replay.svg" : "/assets/images/replay.svg"}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />	
		</button>		
			</div>
		</>
	)
}
