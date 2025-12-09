'use client'

import { useState, FormEvent } from 'react'
import { FaRocket, FaChartLine, FaShieldAlt, FaCheckCircle, FaBullseye, FaClock, FaDollarSign, FaArrowRight } from 'react-icons/fa'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    adSpend: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>ADCRAZE</div>
          <a href="#contact" className={styles.navCta}>Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Stop Wasting Ad Spend.<br />
                <span className={styles.highlight}>Start Scaling Revenue.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Performance-based advertising that actually delivers. We only win when you win—zero fluff, 100% accountability.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>3.2x</div>
                  <div className={styles.statLabel}>Avg. ROAS</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>47%</div>
                  <div className={styles.statLabel}>Lower CPA</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>$12M+</div>
                  <div className={styles.statLabel}>Revenue Driven</div>
                </div>
              </div>
              <div className={styles.heroCtas}>
                <a href="#contact" className={styles.primaryBtn}>
                  Book Free Audit <FaArrowRight />
                </a>
                <a href="#how" className={styles.secondaryBtn}>
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problem}>
        <div className={styles.container}>
          <div className={styles.problemContent}>
            <h2 className={styles.sectionTitle}>Tired of Burning Money on Ads That Don't Convert?</h2>
            <p className={styles.sectionSubtitle}>You're not alone. Most businesses struggle with:</p>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>💸</div>
                <h3>Wasted Ad Spend</h3>
                <p>Paying thousands for clicks that never turn into customers</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📉</div>
                <h3>Poor Targeting</h3>
                <p>Reaching the wrong audience with the wrong message</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🤷</div>
                <h3>Zero Transparency</h3>
                <p>Black box reporting with no clear ROI tracking</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⏱️</div>
                <h3>Slow Results</h3>
                <p>Waiting months for "maybe" results from your agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solution}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Adcraze Difference</h2>
          <p className={styles.sectionSubtitle}>Performance-based partnerships, not just another vendor</p>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <FaBullseye />
              </div>
              <h3>Performance-Based Pricing</h3>
              <p>We eat our own cooking. Pay for results, not hours or vague "management fees."</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <FaChartLine />
              </div>
              <h3>Data-Driven Strategy</h3>
              <p>Every decision backed by real-time analytics and conversion tracking, not guesswork.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <FaShieldAlt />
              </div>
              <h3>Full Transparency</h3>
              <p>Live dashboards, weekly reports, and 24/7 access to your campaign metrics.</p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <FaClock />
              </div>
              <h3>Rapid Optimization</h3>
              <p>Daily monitoring and real-time adjustments to maximize every dollar spent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className={styles.process}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How We Scale Your Revenue</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Free Ad Account Audit</h3>
              <p>We analyze your current campaigns and identify wasted spend within 48 hours. No obligations, just insights.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Custom Growth Strategy</h3>
              <p>We build a performance roadmap tailored to your business goals, target audience, and budget.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Launch & Scale</h3>
              <p>We deploy optimized campaigns across the right channels and continuously scale what works.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Track & Optimize</h3>
              <p>Real-time reporting, weekly strategy calls, and relentless optimization for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Real Results from Real Businesses</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>"</div>
              <p className={styles.testimonialText}>
                "Adcraze cut our customer acquisition cost by 52% in 90 days. They're not just an agency—they're a revenue partner."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Sarah Mitchell</strong>
                <span>Founder, EcoGlow Beauty</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>"</div>
              <p className={styles.testimonialText}>
                "We finally have clarity on where our ad dollars go. ROAS went from 1.4x to 4.1x in six months."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Marcus Chen</strong>
                <span>CMO, FitStack Supplements</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>"</div>
              <p className={styles.testimonialText}>
                "Transparency and results—exactly what we needed. Our revenue doubled without increasing ad spend."
              </p>
              <div className={styles.testimonialAuthor}>
                <strong>Alicia Rodriguez</strong>
                <span>Director of Marketing, UrbanThreads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trust}>
        <div className={styles.container}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <FaCheckCircle className={styles.trustIcon} />
              <div>
                <h4>Certified Partners</h4>
                <p>Google & Meta Partner certified</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <FaCheckCircle className={styles.trustIcon} />
              <div>
                <h4>100+ Clients Scaled</h4>
                <p>Across e-commerce, SaaS, and services</p>
              </div>
            </div>
            <div className={styles.trustItem}>
              <FaCheckCircle className={styles.trustIcon} />
              <div>
                <h4>No Long-Term Contracts</h4>
                <p>Month-to-month. Results speak for themselves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Form */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>Ready to Stop Wasting Ad Spend?</h2>
              <p className={styles.contactSubtitle}>
                Book your free ad account audit. We'll show you exactly where you're losing money—and how to fix it.
              </p>
              <div className={styles.contactBenefits}>
                <div className={styles.benefit}>
                  <FaCheckCircle />
                  <span>Free ad audit (worth $500)</span>
                </div>
                <div className={styles.benefit}>
                  <FaCheckCircle />
                  <span>Custom growth strategy</span>
                </div>
                <div className={styles.benefit}>
                  <FaCheckCircle />
                  <span>No obligations or contracts</span>
                </div>
                <div className={styles.benefit}>
                  <FaCheckCircle />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
            <div className={styles.contactForm}>
              {submitted ? (
                <div className={styles.successMessage}>
                  <FaCheckCircle />
                  <h3>We've Got Your Request!</h3>
                  <p>Our team will reach out within 24 hours to schedule your free audit.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <select
                      value={formData.adSpend}
                      onChange={(e) => setFormData({...formData, adSpend: e.target.value})}
                      required
                    >
                      <option value="">Monthly Ad Spend *</option>
                      <option value="5k-10k">$5k - $10k</option>
                      <option value="10k-25k">$10k - $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <textarea
                      placeholder="Tell us about your biggest advertising challenge..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Get My Free Audit <FaArrowRight />
                  </button>
                  <p className={styles.formDisclaimer}>
                    🔒 Your information is secure. We'll never share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>ADCRAZE</div>
              <p>Performance-based advertising that scales your revenue.</p>
            </div>
            <div className={styles.footerLinks}>
              <a href="#how">How It Works</a>
              <a href="#contact">Get Started</a>
              <a href="mailto:hello@adcraze.com">hello@adcraze.com</a>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 Adcraze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
