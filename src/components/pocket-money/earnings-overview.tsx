"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function EarningsOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const tasks = [
    {
      id: 1,
      task: "Share 1 video + 1 banner on Instagram, Facebook & WhatsApp",
      reward: "₹50",
      image: "", // Replace with your actual image path
    },
    {
      id: 2,
      task: "Post the second creative set following caption guidelines",
      reward: "₹50",
      image: "", // Replace with your actual image path
    },
    {
      id: 3,
      task: "Share final content set with call-to-action message",
      reward: "₹50",
      image: "", // Replace with your actual image path
    },
  ];

  return (
    <section className="py-16 md:py-18 bg-darkest text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-manrope">
            Earnings Overview
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Complete simple tasks and earn real money. No referrals. No fees.
            Just simple sharing tasks and fast UPI rewards.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Image gallery above the table */}
          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {tasks.map((item) => (
              <div
                key={`img-${item.id}`}
                className="aspect-square relative rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <Image
                  src={item.image}
                  alt={`Task ${item.id} illustration`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback image if loading fails
                    e.currentTarget.src = "";
                  }}
                />
                <div className="absolute bottom-2 left-2 z-20 text-white font-medium text-sm">
                  <span className="bg-[#c8f65d] text-[#0a2a2f] px-2 py-1 rounded-full">
                    Step {item.id}
                  </span>
                </div>
              </div>
            ))}
          </motion.div> */}

          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-2 text-left text-[#c8f65d] font-medium">
                      Task
                    </th>
                    <th className="py-4 px-2 text-left text-[#c8f65d] font-medium">
                      Action
                    </th>
                    <th className="py-4 px-2 text-right text-[#c8f65d] font-medium">
                      Reward
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((item, index) => (
                    <motion.tr
                      key={item.id}
                      className="border-b border-white/5 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <td className="py-4 px-2 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#c8f65d]/20 flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-[#c8f65d] font-bold">
                              {item.id}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-medium">Offer</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-gray-300">{item.task}</td>
                      <td className="py-4 px-2 text-right font-bold text-[#c8f65d]">
                        {item.reward}
                      </td>
                    </motion.tr>
                  ))}
                  <motion.tr
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="bg-[#c8f65d]/10"
                  >
                    <td className="py-4 px-2 text-left font-bold" colSpan={2}>
                      Total Possible Earnings
                    </td>
                    <td className="py-4 px-2 text-right font-bold text-[#c8f65d] text-xl">
                      ₹ 150+
                    </td>
                  </motion.tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-[#c8f65d] mr-2" />
              <span className="text-gray-300">No referrals</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-[#c8f65d] mr-2" />
              <span className="text-gray-300">No fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-[#c8f65d] mr-2" />
              <span className="text-gray-300">Fast UPI rewards</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
