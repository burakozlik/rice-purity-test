 'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const ageTableSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Average Rice Purity Scores by Age",
    "description": "Statistical data showing average Rice Purity Test scores across different age groups for both male and female participants.",
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "text/html",
        "contentUrl": "https://ricepurtytest.com/about#age-table"
      }
    ]
  };

  const countryTableSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Average Rice Purity Scores by Country",
    "description": "Global statistics showing average Rice Purity Test scores and visitor percentages across different countries.",
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "text/html",
        "contentUrl": "https://ricepurtytest.com/about#country-table"
      }
    ]
  };

  return (
    <section id="about-section" className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-slate-950 to-primary-navy/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ageTableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countryTableSchema) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Discover Your Purity Score
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explore the fascinating world of the Rice Purity Test through detailed insights, statistics, and meaningful explanations.
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-indigo rounded-full mr-4"></span>
              What Is the Rice Purity Test?
            </h2>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                The <Link href="/" className="text-primary-indigo hover:text-primary-violet transition-colors">Rice Purity Test</Link> is a 100-question quiz that helps you look back at your life experiences and see how &quot;innocent&quot; or &quot;experienced&quot; you are. It was first created in 1924 at Rice University in Houston, Texas. At the time, it was meant for new college students during orientation week. The idea was simple: give freshmen a fun, private way to reflect on their past before starting a new chapter of their lives.
              </p>
              <p>
                Over the years, the test grew from a small campus tradition into a popular online quiz. Today, people of all ages take it — not just college students. The questions usually touch on relationships, social situations, rule-breaking, and other typical life experiences. You check off the things you have done, and at the end, you get a score between 0 and 100. A higher score means you have had fewer experiences, while a lower score means you have had more.
              </p>
              <p>
                There is no &quot;good&quot; or &quot;bad&quot; score. It is not a judgment or a competition. For most people, it is just a fun way to compare stories with friends or think about how much you have grown. What makes the Rice Purity Test interesting is that it turns personal experiences into a simple number — and that number often sparks laughter, surprise, or even a little self-reflection.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-indigo rounded-full mr-4"></span>
              How the Rice Purity Test Works
            </h2>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                The Rice Purity Test follows a very straightforward format. You are given a list of 100 statements describing different life experiences. As you read through them, you simply mark the ones that apply to you. There are no trick questions and no complicated scoring formulas — just honest answers based on your own experiences.
              </p>
              <p>
                Everyone begins with a score of 100. For every statement you check, one point is subtracted from that total. When you finish all 100 questions, the number you are left with becomes your final score. The more experiences you have had, the lower your score will be. If you have checked only a few, your score stays higher.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-indigo rounded-full mr-4"></span>
              Rice Purity Test Score Meaning Explained
            </h2>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                After completing the Rice Purity Test, your score ranges from 0 to 100 and reflects how many of the listed experiences you have had. Here's a simple breakdown to understand what each score range generally means:
              </p>
              <p>
                There is no &quot;good&quot; or &quot;bad&quot; score. It is not a judgment or a competition. For most people, it is just a fun way to compare stories with friends or think about how much they have grown. What makes the Rice Purity Test interesting is that it turns personal experiences into a simple number — and that number often sparks laughter, surprise, or even a little self-reflection.
              </p>
              <ul className="list-disc list-inside space-y-3 mt-6 text-slate-300">
                <li className="text-lg"><strong className="text-white">80–89 – High Purity:</strong> You are fairly innocent with some minor experiences, like first dates or small social risks. You tend to follow rules and have limited exposure to more adventurous situations.</li>
                <li className="text-lg"><strong className="text-white">70–79 – Moderate Purity:</strong> You have a mix of experiences — some romantic, some social, maybe a little experimentation. This is common for college students exploring life while still maintaining some boundaries.</li>
                <li className="text-lg"><strong className="text-white">50–69 – Average Experience:</strong> You have had a fair number of experiences, including social, romantic, and lifestyle explorations. You are learning from your choices and testing boundaries responsibly.</li>
                <li className="text-lg"><strong className="text-white">40–49 – Moderate to Low Purity:</strong> You have tried many new things, taken risks, and explored more adventurous or unconventional paths. You are curious about life and often willing to push limits.</li>
                <li className="text-lg"><strong className="text-white">0–39 – Very Experienced:</strong> You have had extensive experiences across multiple areas, from relationships to lifestyle and social experimentation. Your score reflects a life rich in experiences, not necessarily a judgment.</li>
              </ul>
              <p className="mt-6">
                This scoring system is not about being &quot;good&quot; or &quot;bad&quot;; it is a snapshot of your personal journey and choices, helping you reflect on where you have been and how you have grown.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-indigo rounded-full mr-4"></span>
              What Is the Average Rice Purity Score?
            </h2>
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              <p>
                Most people who take the Rice Purity Test score somewhere in the middle, usually around 55–60. College students often fall in this range because they've started exploring life but haven't experienced everything yet. Freshmen tend to have slightly higher scores, while seniors usually score a bit lower as they've had more experience over the years.
              </p>
              <p>
                Your score can also depend on your age, background, or even where you grew up. For example, teens under 18 often score above 90, while young adults under 25 usually land in the mid-80s. Studies also show that women often score a little higher than men, reflecting different life experiences.
              </p>
            </div>
          </div>

          <div id="age-table" className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-indigo rounded-full mr-4"></span>
              What is the average Rice Purity score by age?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full mt-6 border-collapse border border-slate-600 bg-slate-800 rounded-lg">
                <thead>
                  <tr className="bg-slate-700">
                    <th className="border border-slate-600 p-4 text-left text-white font-semibold">Age Group</th>
                    <th className="border border-slate-600 p-4 text-left text-white font-semibold">Average Score (Female)</th>
                    <th className="border border-slate-600 p-4 text-left text-white font-semibold">Average Score (Male)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">18</td>
                    <td className="border border-slate-600 p-4 text-slate-300">91.12</td>
                    <td className="border border-slate-600 p-4 text-slate-300">91.12</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">18–24</td>
                    <td className="border border-slate-600 p-4 text-slate-300">89.24</td>
                    <td className="border border-slate-600 p-4 text-slate-300">87.36</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">25–34</td>
                    <td className="border border-slate-600 p-4 text-slate-300">79.68</td>
                    <td className="border border-slate-600 p-4 text-slate-300">74.05</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">35–44</td>
                    <td className="border border-slate-600 p-4 text-slate-300">71.11</td>
                    <td className="border border-slate-600 p-4 text-slate-300">71.03</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">45–54</td>
                    <td className="border border-slate-600 p-4 text-slate-300">67.19</td>
                    <td className="border border-slate-600 p-4 text-slate-300">62.83</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">55–64</td>
                    <td className="border border-slate-600 p-4 text-slate-300">66.22</td>
                    <td className="border border-slate-600 p-4 text-slate-300">61.12</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">65+</td>
                    <td className="border border-slate-600 p-4 text-slate-300">65.39</td>
                    <td className="border border-slate-600 p-4 text-slate-300">58.33</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="country-table" className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-primary-indigo rounded-full mr-4"></span>
              What is the average Rice Purity score by country?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full mt-6 border-collapse border border-slate-600 bg-slate-800 rounded-lg">
                <thead>
                  <tr className="bg-slate-700">
                    <th className="border border-slate-600 p-4 text-left text-white font-semibold">Country</th>
                    <th className="border border-slate-600 p-4 text-left text-white font-semibold">Average Score</th>
                    <th className="border border-slate-600 p-4 text-left text-white font-semibold">% of Visitors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Japan</td>
                    <td className="border border-slate-600 p-4 text-slate-300">66.6</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.56%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Germany</td>
                    <td className="border border-slate-600 p-4 text-slate-300">66.3</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.94%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Israel</td>
                    <td className="border border-slate-600 p-4 text-slate-300">65.9</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.40%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">United Kingdom</td>
                    <td className="border border-slate-600 p-4 text-slate-300">65.7</td>
                    <td className="border border-slate-600 p-4 text-slate-300">18.69%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Ireland</td>
                    <td className="border border-slate-600 p-4 text-slate-300">65.6</td>
                    <td className="border border-slate-600 p-4 text-slate-300">1.82%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Italy</td>
                    <td className="border border-slate-600 p-4 text-slate-300">65.4</td>
                    <td className="border border-slate-600 p-4 text-slate-300">1.76%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Australia</td>
                    <td className="border border-slate-600 p-4 text-slate-300">64.3</td>
                    <td className="border border-slate-600 p-4 text-slate-300">2.26%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">United States</td>
                    <td className="border border-slate-600 p-4 text-slate-300">63.9</td>
                    <td className="border border-slate-600 p-4 text-slate-300">54.21%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Netherlands</td>
                    <td className="border border-slate-600 p-4 text-slate-300">63.7</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.43%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">New Zealand</td>
                    <td className="border border-slate-600 p-4 text-slate-300">63.3</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.74%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Brazil</td>
                    <td className="border border-slate-600 p-4 text-slate-300">63.2</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.95%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Canada</td>
                    <td className="border border-slate-600 p-4 text-slate-300">61.0</td>
                    <td className="border border-slate-600 p-4 text-slate-300">3.20%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Mexico</td>
                    <td className="border border-slate-600 p-4 text-slate-300">60.1</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.74%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Spain</td>
                    <td className="border border-slate-600 p-4 text-slate-300">59.3</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.60%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">South Africa</td>
                    <td className="border border-slate-600 p-4 text-slate-300">59.2</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.57%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">Russia</td>
                    <td className="border border-slate-600 p-4 text-slate-300">59.2</td>
                    <td className="border border-slate-600 p-4 text-slate-300">0.61%</td>
                  </tr>
                  <tr className="hover:bg-slate-700">
                    <td className="border border-slate-600 p-4 text-slate-300">France</td>
                    <td className="border border-slate-600 p-4 text-slate-300">57.9</td>
                    <td className="border border-slate-600 p-4 text-slate-300"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
