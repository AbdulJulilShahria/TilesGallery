import { getTilesInfo } from "@/lib/data";
import Marquee from "react-fast-marquee";
import { FcLike } from "react-icons/fc";


const MarqueePage = async({}) => {

    const marqueeData = await getTilesInfo();
    console.log(marqueeData, "marquee Data");
    return (
    <div className="bg-white text-blue-500 py-3">
      <Marquee pauseOnHover speed={50} gradient={false}>
        <span className="mx-10 flex">🆕 New Arrivals: {marqueeData.map((d) =>{ return <h2 key={d.id}> | {d.title} | </h2> })} </span>
        <span className="mx-8">⭐ Weekly Feature: Modern Geometric Patterns</span>
        <span className="mx-8">🤝 Join the Community of Tile Designers</span>
        <span className="mx-8">🔥 Premium Marble Collection Now Available</span>
      </Marquee>
    </div>
  );
};

export default MarqueePage;