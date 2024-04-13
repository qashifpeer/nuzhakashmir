import Image from "next/image";
import featureImage from '/public/images/forest_sunlight.jpg'


const FeatureCard = ({postData}) => {
  return (
    <div className="feature-card flex flex-col shadow-lg w-[33%] mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
            <div className="relative">
              <Image
                src={postData.image}
                alt="forest with sunlight"
                width={400}
                height={500}
              />
              <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">
                explore
              </span>
            </div>
            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                {postData.title}
              </h2>
              <p className="text-sm text-gray-400 py-2">{postData.author.name}</p>
              <p className="text-lg text-gray-500 line-clamp-4">
                {postData.shortDescription}
              </p>
            </div>
          </div>
  )
}

export default FeatureCard