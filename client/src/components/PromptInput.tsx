import LoadingSpinner from "./LoadingSpinner";

interface PromptInputProps {
  idea: string;
  setIdea: (idea: string) => void;
  isLoading: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
}

export default function PromptInput({
  idea,
  setIdea,
  isLoading,
  error,
  onSubmit,
}: PromptInputProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-500/30 p-8 transition-all hover:shadow-purple-500/20 hover:shadow-2xl"
    >
      <label
        htmlFor="idea"
        className="block text-sm font-bold text-purple-300 mb-3 uppercase tracking-wide"
      >
        What's your website idea?
      </label>
      <textarea
        id="idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Example: I want a website for my coffee shop where people can order online and see our menu..."
        className="w-full h-48 px-5 py-4 bg-gray-950/50 border-2 border-purple-500/30 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all resize-none text-white placeholder-purple-300/40 text-sm md:text-lg"
        disabled={isLoading}
      />

      {error && (
        <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-300 text-sm backdrop-blur-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading || !idea.trim()}
        className="mt-6 w-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-bold py-5 px-8 rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <LoadingSpinner />
            Enhancing your prompt...
          </span>
        ) : (
          "Enhance My Prompt"
        )}
      </button>
    </form>
  );
}
