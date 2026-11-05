import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, MapPin, MessageSquare, ArrowUpRight, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || `Inquiry from ${senderName || 'Portfolio Visitor'}`);
    const mailtoBody = encodeURIComponent(
      `Hi Munshi,\n\n${message}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`
    );
    window.location.href = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-16 border-t border-slate-800/80 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Contact & Inquiries</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">Direct Communication</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Open to discussions regarding native iOS engineering opportunities, mobile architecture reviews, and on-device AI integration.
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2.5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Direct Email Contact
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors break-all"
                >
                  {profile.email}
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <span>Write</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href={`tel:${profile.phone}`}
                className="p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="mt-2">
                  <div className="text-xs font-semibold text-white">Phone</div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">{profile.phone}</div>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="mt-2">
                  <div className="text-xs font-semibold text-white">LinkedIn</div>
                  <div className="text-[11px] text-slate-400 truncate">munshisarifulislam</div>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <Github className="w-4 h-4 text-slate-300" />
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <div className="mt-2">
                  <div className="text-xs font-semibold text-white">GitHub</div>
                  <div className="text-[11px] text-slate-400 truncate">MunshiSarifulIslam</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Based in Pune, India · Available for global iOS opportunities</span>
            </div>
          </div>

          {/* Right Column: Pre-filled Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Populates an email draft directly into your default email client.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3 py-2 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 block mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3 py-2 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Senior iOS Role / Architecture Discussion"
                    className="w-full px-3 py-2 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note or project details here..."
                    className="w-full px-3 py-2 text-xs text-white bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Dispatches to {profile.email}
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-all cursor-pointer active:scale-95"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
