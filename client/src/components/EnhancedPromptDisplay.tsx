import Modal from "./Modal";

interface EnhancedPromptDisplayProps {
  improvedPrompt: string;
  copied: boolean;
  onCopy: () => void;
  onReset: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedPromptDisplay({
  improvedPrompt,
  copied,
  onCopy,
  onReset,
  isOpen,
  onClose,
}: EnhancedPromptDisplayProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30 animate-slide-up">
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Your Enhanced Prompt
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onCopy}
                className="px-6 py-3 bg-white text-purple-700 rounded-xl hover:bg-purple-50 transition-all text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                {copied ? "✓ Copied!" : "Copy"}
              </button>
              <button
                onClick={() => {
                  onReset();
                  onClose();
                }}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                New Idea
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="bg-gradient-to-br from-gray-950/50 to-purple-950/30 rounded-2xl p-8 border border-purple-500/20 shadow-inner backdrop-blur-sm">
            <p className="text-gray-100 text-sm md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
              {improvedPrompt}
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 p-5 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-xl border border-purple-400/30 backdrop-blur-sm">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-purple-200 mb-1">
                Your enhanced prompt is ready!
              </p>
              <p className="text-sm text-purple-300">
                Copy this improved prompt and use it to build your website with
                AI tools, developers, or no-code platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
