import { Hero, PromptInput, EnhancedPromptDisplay } from "./components";
import { usePromptEnhancer } from "./hooks/usePromptEnhancer";

function App() {
  const {
    idea,
    setIdea,
    improvedPrompt,
    setImprovedPrompt,
    isLoading,
    error,
    copied,
    handleSubmit,
    handleCopy,
    handleReset,
  } = usePromptEnhancer();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-16">
        <Hero />

        <div className="space-y-6">
          <PromptInput
            idea={idea}
            setIdea={setIdea}
            isLoading={isLoading}
            error={error}
            onSubmit={handleSubmit}
          />
        </div>
      </div>

      <EnhancedPromptDisplay
        improvedPrompt={improvedPrompt}
        copied={copied}
        onCopy={handleCopy}
        onReset={handleReset}
        isOpen={!!improvedPrompt}
        onClose={() => setImprovedPrompt("")}
      />
    </div>
  );
}

export default App;
