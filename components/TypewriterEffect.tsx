import { Typewriter } from "react-simple-typewriter";

export default function TypewriterEffect() {
  return (
    <div className="text-center text-4xl font-bold flex mt-4 mb-4">
      <p className="text-primary">
        <Typewriter
          words={[
              "FullStack Developer",
            "AI Enthusiast",
            "Frontend Developer",
            "Backend Developer",
            "UI/UX Designer",            
            "Blogger",
            "YouTuber",
          ]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
    </div>
  );
}
