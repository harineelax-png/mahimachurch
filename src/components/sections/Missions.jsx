

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Eye, Target } from 'lucide-react'; // Using lucide-react for the icons

// const MissionVision = () => {
//   const cards = [
//     {
//       title: "Our Vision",
//       icon: <Eye className="text-white w-8 h-8" />,
//       iconBg: "bg-teal-500",
//       content: "Sharing the Good News of God’s Love and seeing all Indians loving God - like Jesus did and loving one another – like Jesus did!",
//       footer: "To create thriving generations in an academically excellent, culturally diverse, and spiritually strong community."
//     },
//     {
//       title: "Our Mission",
//       icon: <Target className="text-white w-8 h-8" />,
//       iconBg: "bg-orange-500",
//       content: "In the Service of God - by preaching the Gospel of Jesus Christ, reaching the lost and transforming lives through the power of God’s Word and Spirit.",
//       subContent: "In the Service of Nation - by being the Body of Christ, serving the needy, healing the broken, and bringing hope through acts of love, mercy, and kindness."
//     }
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-8 p-10 bg-gray-50">
//       {cards.map((card, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(0,0,0,0.1)" }}
//           transition={{ type: "spring", stiffness: 300 }}
//           className="max-w-md bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-start cursor-pointer"
//         >
//           {/* Icon Header */}
//           <div className="flex items-center gap-4 mb-6">
//             <div className={`${card.iconBg} p-4 rounded-2xl shadow-lg`}>
//               {card.icon}
//             </div>
//             <h2 className="text-4xl font-bold text-slate-800">{card.title}</h2>
//           </div>

//           {/* Body Content */}
//           <div className="text-slate-600 leading-relaxed text-lg space-y-4">
//             <p className="font-medium text-slate-700">{card.content}</p>
//             {card.subContent && <p>{card.subContent}</p>}
//             {card.footer && <p className="text-sm italic text-slate-500 pt-4 border-t">{card.footer}</p>}
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default MissionVision;

import React from "react";
import "./Missions.css";
import { Eye, Target } from "lucide-react";

function MissionVision() {
  return (
    <section className="mv-section">
      <div className="mv-container">
        
        {/* Vision Card */}
        <div className="mv-card">
          <div className="mv-icon vision">
            <Eye size={26} />
          </div>
          <h2>Our Vision</h2>
          <p>
            To share the Good News of God’s love and to see all Indians loving
            God wholeheartedly and loving one another—just as Jesus did.
          </p>
        </div>

        {/* Mission Card */}
        <div className="mv-card">
          <div className="mv-icon mission">
            <Target size={26} />
          </div>
          <h2>Our Mission</h2>
          <p>
            In the service of God and in the service of the nation—by proclaiming
            the Gospel of Jesus Christ, transforming lives through God’s Word
            and Spirit, and serving the needy, healing the broken, and bringing
            hope through acts of love, mercy, and compassion.
          </p>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;
