import bannerImg from "../../assets/banner.png";

export default function Banner() {
  return (
    <div className="flex flex-col justify-between items-center gap-8 py-6 md:flex-row-reverse">
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end">
        <img src={bannerImg} alt="Image du banner" />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="text-3xl pb-4">New Releases This Week</h1>
        <p className="pb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          nisi earum veniam quod minima laboriosam amet veritatis odio
          praesentium illo inventore porro temporibus, vel ipsam unde.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
}
