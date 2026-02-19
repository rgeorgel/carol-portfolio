import image_7f291ae7eb5929c41191367f48341fb29801038c from '../assets/7f291ae7eb5929c41191367f48341fb29801038c.png';
import image_221329dd8d4a6723e338052c308df505f963ec90 from '../assets/221329dd8d4a6723e338052c308df505f963ec90.png';
import image_bdfd60a65603aefb9850aa2e07301fe168782c60 from '../assets/bdfd60a65603aefb9850aa2e07301fe168782c60.png';
import image_da18bbaec2a99d4e43fa85fd83de228c69da278e from '../assets/da18bbaec2a99d4e43fa85fd83de228c69da278e.png';
import image_61ef1f1c04055b9f2cbbf1d31f28fc6cf8457c2c from '../assets/61ef1f1c04055b9f2cbbf1d31f28fc6cf8457c2c.png';
import image_5788202aefc15d1d41d7724b014059bd653d0a70 from '../assets/5788202aefc15d1d41d7724b014059bd653d0a70.png';
import image_IMG_4392 from '../assets/IMG_4392.png';
import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';


export default function App() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen flex flex-col selection:bg-[#080808] selection:text-[#F2F0E9]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-6 md:px-12 md:py-8 z-50 mix-blend-difference text-[#F2F0E9] pointer-events-none">
        <div className="font-mono text-xs uppercase tracking-widest pointer-events-auto cursor-pointer group">
          <span className="block">carol chang</span>
          <span className="block opacity-50 group-hover:opacity-100 transition-opacity">PRODUCT DESIGNER</span>
        </div>

        <div className="pointer-events-auto">
          <a
            href="mailto:hello@alexmorgan.design"
            className="border border-[#F2F0E9] rounded-full px-6 py-2 font-mono text-xs uppercase tracking-widest hover:bg-[#F2F0E9] hover:text-[#080808] transition-all duration-300"
          >RESUME</a>
        </div>

        <nav className="pointer-events-auto hidden md:block">

        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-40 md:pt-48 pb-20">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-4xl">
              <span className="font-['Space_Mono'] text-xs uppercase tracking-[0.2em] opacity-60 mb-4 block">01 / FinTech / 2023</span>
              <h1 className="font-['Bodoni_Moda'] text-[clamp(50px,8vw,130px)] leading-[0.9] uppercase font-normal">Questrade <span className="font-['Italianno'] normal-case font-normal text-[1.3em] inline-block translate-y-[10px] mx-[0.1em]">design system</span></h1>
            </div>
            <div className="hidden md:block text-right">
              <p className="font-['Space_Mono'] text-[10px] uppercase tracking-widest leading-loose">Role: design system designer<br /><br />Platform: WEB/MOBILE</p>
            </div>
          </div>

          <div className="h-full w-full mb-full relative overflow-hidden bg-[#e5e2d9]">
            <img
              src={image_5788202aefc15d1d41d7724b014059bd653d0a70}
              className="w-full h-full object-cover hover:scale-[1.02] transition-all duration-500"
              alt="Vanguard Interface Hero"
            />
          </div>
        </section>

        {/* Brief & Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          <div className="md:col-span-4">
            <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest border-b border-[#080808]/10 pb-4 mb-6">
              The Brief
            </h3>
            <p className="font-['Bodoni_Moda'] text-2xl italic leading-relaxed">"Evolving a single-theme design system into a scalable, multi-brand infrastructure built for enterprise growth."</p>
          </div>
          <div className="md:col-start-6 md:col-span-6">
            <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest border-b border-[#080808]/10 pb-4 mb-6">
              Overview
            </h3>
            <p className="font-['Space_Mono'] text-sm leading-relaxed text-[#4A4A4A] mb-6">As Questrade’s digital ecosystem expanded, our objective was to evolve            <span className="">AllSpark</span> from a single-theme design system into a scalable, multi-brand platform. By grounding our strategy in user research and implementing a token-based architecture, we aimed to transform the system into a high-velocity engine that aligns design and engineering across the entire organization.</p>
            <p className="font-['Space_Mono'] text-sm leading-relaxed text-[#4A4A4A]"></p>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#080808]/10 border border-[#080808]/10">
            <div className="bg-[#F2F0E9] p-12 md:p-20">
              <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest mb-12 opacity-50">
                The Challenge
              </h3>
              <h4 className="font-['Bodoni_Moda'] text-4xl uppercase mb-8">Navigating Design System Maturity<br /></h4>
              <p className="font-['Space_Mono'] text-sm leading-relaxed text-[#4A4A4A]"><span className="">Questrade’s legacy design system, AllSpark, was suffering from an identity crisis. Despite its existence, it failed to provide value to its users, resulting in a 90% component detachment rate.</span></p>
            </div>
            <div className="bg-[#F2F0E9] p-12 md:p-20">
              <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest mb-12 opacity-50">
                The Solution
              </h3>
              <h4 className="font-['Bodoni_Moda'] text-4xl uppercase mb-8">From Static Assets to an Adaptive Platform<br /></h4>
              <p className="font-['Space_Mono'] text-sm leading-relaxed text-[#4A4A4A]"><span className="">Move from an uncoordinated collection of assets to an Integrated & Adaptive platform that drives cross-organizational velocity.</span></p>
            </div>
          </div>
        </section>

        {/* 02 / The Evidence Section */}
        <section id="testing" className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#080808] pt-12">
          <div className="md:col-span-4">
            <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest flex items-center">
              <span className="w-2 h-2 bg-[#080808] rounded-full inline-block mr-3"></span> THE RESEARCH
            </h3>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-16">
              <div className="pb-4">
                <h4 className="font-['Bodoni_Moda'] text-2xl uppercase mb-6">Identifying the Barriers to Adoption</h4>
                <p className="font-['Space_Mono'] text-sm leading-relaxed mb-8">
                  To move beyond assumptions, we did a comprehensive quantitative and qualitative research initiative. Through practice assessments, usage data audits, and deep-dive interviews with designers and engineers, four systemic failures emerged:
                  <br /><br />
                  <strong>Discovery Deficit:</strong> Fragmented documentation left teams guessing where resources lived.
                  <br /><br />
                  <strong>Design-Code Friction:</strong> Stale Figma files didn't match production code, rendering them unusable.
                  <br /><br />
                  <strong>Communication Silos:</strong> Product teams were blind to updates, leading to version drift.
                  <br /><br />
                  <strong>Rigid Architecture:</strong> The system couldn't scale from high-density trading platforms (Atlas) to expressive marketing sites (Q.com).
                </p>
                <div className="flex gap-4">


                </div>
              </div>


            </div>
          </div>
        </section>

        {/* 02 / The Evidence Section (Duplicate) */}


        {/* Vanguard Wallet Section */}
        <section className="mb-32">


          <h1 className="font-['Bodoni_Moda'] text-[clamp(50px,8vw,130px)] leading-[0.9] uppercase font-normal mb-16 text-[80px]">THE STRATEGIC <span className="font-['Italianno'] normal-case font-normal text-[1.3em] inline-block translate-y-[10px] mx-[0.1em]">approach</span></h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 overflow-hidden">
              <ImageWithFallback
                src={image_61ef1f1c04055b9f2cbbf1d31f28fc6cf8457c2c}
                alt="Main Showcase"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="md:col-span-4 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <h4 className="font-['Space_Mono'] text-[10px] uppercase tracking-widest mb-2 opacity-50">Centralizing the Source of Truth</h4>
                  <p className="font-['Space_Mono'] text-sm leading-relaxed"><span className="">We launched the AllSpark Hub, a unified portal bridging the gap between design and engineering. This ecosystem included:</span></p>
                </div>
                <div>

                  <p className="font-['Space_Mono'] text-sm leading-relaxed"><span className="font-bold">Live Documentation:</span> Integrated Storybook playgrounds and code snippets.</p>
                </div>
                <div>
                  <p className="font-['Space_Mono'] text-sm leading-relaxed"><span className="font-bold">Theme Builder:</span> A tool to visualize and test systemic changes in real-time.</p>
                </div>
                <div>
                  <p className="font-['Space_Mono'] text-sm leading-relaxed"><span className="font-bold">Strategic Visibility:</span> Public roadmaps and release notes to build trust and transparency.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12 md:mt-0">


              </div>
            </div>
          </div>
        </section>

        {/* 02 / The Evidence Section (After ImageWithFallback) */}
        <section id="testing-4" className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#080808] pt-12">
          <div className="md:col-span-4">
            <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest flex items-center">
              <span className="w-2 h-2 bg-[#080808] rounded-full inline-block mr-3"></span> Multi-Brand Architecture & Tokenization
            </h3>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-16">
              <div className="pb-12">

                <p className="font-['Space_Mono'] text-sm leading-relaxed mb-8">To solve the "rigidity" problem, I led the creation and implementation of a                <span className="">global Design Token system</span>. By abstracting visual variables (color, spacing, typography, motion) into semantic tokens, we moved away from hard-coded values to a <span className="">multi-brand, themeable architecture</span>.<br /><br /><strong>Multi-Context Support:</strong> Components now automatically adapt to different product densities and brand identities.<br /><br /> Overhauled 50+ core components to ensure 1:1 parity between Figma and production.<strong>Systemic Consistency:</strong><br /><br /><strong>Future-Proofing:</strong> The architecture is now ready to support Questrade's expanding portfolio of complex, specialized sub-brands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 / The Evidence Section (Before Pull Quote) */}


        {/* Image Gallery Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-[500px] overflow-hidden group">
              <ImageWithFallback
                src={image_bdfd60a65603aefb9850aa2e07301fe168782c60}
                className="w-full h-full object-cover group-hover:scale-102 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                alt="Analytics View"
              />
            </div>
            <div className="h-[500px] overflow-hidden group">
              <ImageWithFallback
                src={image_da18bbaec2a99d4e43fa85fd83de228c69da278e}
                className="w-full h-full object-cover group-hover:scale-102 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                alt="Dashboard View"
              />
            </div>
          </div>

        </section>

        {/* 02 / The Evidence Section (Before Pull Quote) */}
        <section id="testing-5" className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[#080808] pt-12">
          <div className="md:col-span-4">
            <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest flex items-center">
              <span className="w-2 h-2 bg-[#080808] rounded-full inline-block mr-3"></span> Closing the Feedback Loop: A Culture of Contribution
            </h3>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-16">
              <div className="pb-4">
                <p className="font-['Space_Mono'] text-sm leading-relaxed mb-8">
                  We shifted the culture from "using a tool" to "contributing to a community" by treating the design system as a living product. To build trust and keep the system relevant, we opened several lines of communication:
                  <br /><br />
                  <strong>Active Engagement:</strong> We broke down silos by launching a dedicated Slack ecosystem for real-time support, hosting monthly "show and tell" demos, and creating transparent feedback funnels to capture user needs.
                  <br /><br />
                  <strong>A Defined Contribution Lifecycle:</strong> We empowered product teams to help grow the system through a structured, four-stage process:
                  <br /><br />
                  <strong>Propose:</strong> Ideas are validated via Slack to ensure they solve real problems before any time is invested.
                  <br /><br />
                  <strong>Define & Review:</strong> Contributors provide mockups while the AllSpark team ensures technical feasibility and system alignment.
                  <br /><br />
                  <strong>The AllSpark Polish:</strong> To protect system health, our core team performs a final "system sweep"—optimizing token alignment and auto-layout before the design is finalized.
                  <br /><br />
                  <strong>Ownership & Recognition:</strong> Once AllSpark Engineering builds the pattern, we broadcast the update to the company, making sure the original contributor gets the credit they deserve.
                </p>
                <div className="flex gap-4">


                </div>
              </div>

              <div>



              </div>
            </div>
          </div>
        </section>
                <section className="mb-24">
          <div className="aspect-[21/9] w-full mb-24 relative overflow-hidden bg-[#e5e2d9]">
            <img
              src={image_IMG_4392}
              className="w-full h-auto hover:scale-[1.02] transition-all duration-500"
              alt="Vanguard Interface Hero"
            />
          </div>
        </section>

         <section className="mb-32">


          <h1 className="font-['Bodoni_Moda'] text-[24px] leading-[0.9] uppercase font-normal mb-16">proof of concept: project atlas</h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 overflow-hidden">
              <ImageWithFallback
                src={image_7f291ae7eb5929c41191367f48341fb29801038c}
                alt="Main Showcase"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="md:col-span-4 flex flex-col justify-between">
              <div className="space-y-8">
                <div>
                  <h4 className="font-['Space_Mono'] text-[10px] uppercase tracking-widest mb-2 opacity-50">Centralizing the Source of Truth</h4>
                  <p className="font-['Space_Mono'] text-sm leading-relaxed">The true test of the new architecture was Atlas, Questrade's advanced trading platform.</p>
                </div>
                <div>

                  <p className="font-['Space_Mono'] text-sm leading-relaxed"><span className="font-bold">Impact: </span>By leveraging the new tokenized system instead of building custom UI, the Atlas team saved ~$1.1M in labour costs (~17,000 hours). This proved that a flexible system isn't just a design luxury—it's a massive financial lever.</p>
                </div>
                <div>

                </div>
                <div>

                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12 md:mt-0">


              </div>
            </div>
          </div>
        </section>

        {/* Pull Quote */}
        <section className="mb-32">
          <div className="flex items-center justify-center py-12">
            <div className="max-w-2xl text-center">
              <svg
                className="w-12 h-12 mx-auto mb-8 text-[#080808] animate-[spin_12s_linear_infinite]"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <polygon points="50,0 63,38 100,50 63,62 50,100 37,62 0,50 37,38" />
              </svg>
              <p className="font-['Bodoni_Moda'] text-3xl leading-snug">Within 18 months, the maturity of the design system shifted from "Structured & Emerging" to  <span className="font-['Italianno'] text-[1.3em] inline-block translate-y-[5px]">established & scalable</span>.</p>
            </div>
          </div>
        </section>

        {/* Impact & Results Section */}
        <section className="mb-32 pt-20 border-t border-[#080808]">
          <h3 className="font-['Space_Mono'] text-xs uppercase tracking-widest mb-16">
            Impact & Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                label: 'Enterprise savings',
                value: '~$2.5M',
                description: 'Total of 40,000 developer hours saved',
              },
              {
                label: 'Reliability',
                value: '89%',
                description: 'Reduction in component detachment (90% → 0.53%)',
              },
              {
                label: 'Adoption',
                value: '+28%',
                description: 'Growth in integrated product teams (38 total)',
              },
              {
                label: 'User Satisfaction',
                value: '+46 NPS',
                description: 'Increase (Internal satisfaction jumped to 90 on Web)',
              },
            ].map((metric, index) => (
              <div key={index} className="border-t border-[#080808]/10 pt-6">
                <span className="font-['Space_Mono'] text-[10px] uppercase opacity-50 block mb-2">
                  {metric.label}
                </span>
                <div className="font-['Bodoni_Moda'] text-5xl mb-4">{metric.value}</div>
                <p className="font-['Space_Mono'] text-[11px] uppercase tracking-wider">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-[#080808] pt-20 pb-12 text-center">




          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 font-['Space_Mono'] text-[11px] uppercase tracking-widest opacity-60">
            <div className="md:text-left">TORONTO, CA<br /></div>
            <div>Socials<br /><a href="#" className="hover:text-[#080808] hover:opacity-100">IG</a>/                <a href="#" className="hover:text-[#080808] hover:opacity-100">LN</a> </div>
            <div className="md:text-right">© 2026 CAROL CHANG<br /></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
