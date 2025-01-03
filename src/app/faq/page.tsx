import { FaPlus } from "react-icons/fa6";

export default function Faq() {
  return (
    <div className="max-w-screen-xl mx-auto mt-16 text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#333333] font-bold mb-4">
        Questions Looks Here
      </h1>

      <p className="text-base sm:text-lg leading-relaxed text-[#4F4F4F] mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the
      </p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 mb-24">
        {[
          "What types of chairs do you offer?",
          "Do your chairs come with a warranty?",
          "Can I try a chair before purchasing?",
          "How can we get in touch with you?",
          "What will be delivered? And When?",
          "How do I clean and maintain my Comforty chair?",
        ].map((question, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-left"
          >
            <h3 className="text-lg sm:text-xl font-bold flex justify-between items-center">
              {question}
              <FaPlus />
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#4F4F4F]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}