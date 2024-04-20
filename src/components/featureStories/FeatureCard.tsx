import Image from "next/image";
import featureImage from '/public/images/forest_sunlight.jpg'
import Link from "next/link";

interface Props {
  postData : PostType
}

const FeatureCard = ({postData}:Props) => {
  return (
    <Link href={postData.slug}>
    <div className="feature-card flex flex-col shadow-lg lg:w-[33%] w-full  mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
            <div className="relative">
              <Image
                src={postData?.image}
                alt="forest with sunlight"
                width={400}
                height={500}
                className="w-full"
              />
              <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">
                explore
              </span>
            </div>
            <div className="flex flex-col px-6 py-4">
              <h2 className="text-lg md:text-3xl font-semibold text-gray-600">
                {postData?.title}
              </h2>
              <p className="text-sm text-gray-400 py-2">{postData?.author.name}, {(postData?.publishedAt).substring(0,10)}</p>
              <p className="md:text-lg text-sm text-gray-500 line-clamp-3">
                {postData?.shortDescription}
              </p>
            </div>
          </div>
          </Link>
  )
}

export default FeatureCard
