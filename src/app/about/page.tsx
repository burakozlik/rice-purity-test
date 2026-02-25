import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Rice Purity Test - History & Mission',
  description: 'Discover the history of the Rice Purity Test, how it works, and why it\'s trusted by college students worldwide. Learn scoring system and cultural impact.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary-indigo hover:text-primary-violet transition-colors mb-6 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7 7l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-slate-400">
            The story behind the Rice Purity Test and our mission.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-slate-300">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg">
              We believe in creating tools that help people reflect on themselves honestly and without judgment. The Rice Purity Test serves as a fun, engaging way for people to assess their life experiences in a lighthearted manner.
            </p>
          </section>

          {/* History */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The History</h2>
            <p>
              The Rice Purity Test originated in the 1980s at Rice University in Houston, Texas. It was created as a tongue-in-cheek campus tradition during O-Week (Orientation Week), serving as an icebreaker for new students and a humorous reflection on college experiences.
            </p>
            <p className="mt-4">
              What started as a simple 100-question list shared among Rice students quickly spread to other universities and eventually reached millions of people worldwide. The test became a cultural phenomenon, remain largely unchanged in structure over the decades as a testament to its timeless appeal.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <p>
              We provide a modern, beautifully designed platform for taking and sharing the classic Rice Purity Test. Our platform:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Maintains the original 100 questions and scoring system</li>
              <li>Provides instant, anonymous results</li>
              <li>Respects your privacy completely—no data collection</li>
              <li>Offers easy sharing on social media</li>
              <li>Presents the test with a modern, premium design</li>
              <li>Works seamlessly on all devices</li>
            </ul>
          </section>

          {/* Why Purity Test */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why the Purity Test?</h2>
            <p>
              The &quot;purity&quot; aspect is intentionally metaphorical and humorous. The test doesn&apos;t judge you—it simply reflects the breadth of experiences you&apos;ve had. A lower score doesn&apos;t mean you&apos;re &quot;bad,&quot; and a higher score doesn&apos;t mean you&apos;re &quot;good.&quot; It&apos;s just a fun snapshot of where you are in your life journey.
            </p>
            <p className="mt-4">
              The appeal lies in its:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><span className="font-semibold">Honesty:</span> It encourages genuine self-reflection without judgment</li>
              <li><span className="font-semibold">Fun Factor:</span> The results are shareable and often spark entertaining conversations</li>
              <li><span className="font-semibold">Tradition:</span> It carries decades of campus culture and nostalgia</li>
              <li><span className="font-semibold">Relatability:</span> Most people can see themselves in the questions</li>
            </ul>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Core Values</h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-indigo mb-2">Privacy First</h3>
                <p>
                  We believe privacy is a fundamental right. We don&apos;t collect, store, or sell your data. Your responses are yours alone.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-indigo mb-2">No Judgment</h3>
                <p>
                  There&apos;s no moral hierarchy in the test. All scores are equally valid. We celebrate every person&apos;s unique journey.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-indigo mb-2">Authenticity</h3>
                <p>
                  We encourage honest self-assessment without pretense. The test works best when you&apos;re truthful with yourself.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary-indigo mb-2">Connection</h3>
                <p>
                  The test is meant to spark conversations and connections with others. Shared experiences create shared understanding.
                </p>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section className="border-t border-slate-700 pt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Take the Test?</h2>
            <p>
              Discover your purity score and see where you stand. It takes about 5-10 minutes, and your results are completely anonymous.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-gradient-button text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-indigo/40 hover:scale-105 transform transition-all"
            >
              Start the Test Now
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
