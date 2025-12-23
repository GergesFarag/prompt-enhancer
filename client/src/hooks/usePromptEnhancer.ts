import { useState } from "react";

const API_URL = "http://localhost:3000/api/v1/enhancer";

export function usePromptEnhancer() {
  const [idea, setIdea] = useState("");
  const [improvedPrompt, setImprovedPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!idea.trim()) {
      setError("Please enter your website idea first");
      return;
    }

    setIsLoading(true);
    setError("");
    setImprovedPrompt("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: idea }),
      });

      if (!response.ok) {
        throw new Error("Failed to improve prompt");
      }
      const data = await response.json();
      console.log(data);
      setImprovedPrompt(data.data.enhancedPrompt);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(improvedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleReset = () => {
    setIdea("");
    setImprovedPrompt("");
    setError("");
  };

  const setImprovedPromptDirectly = (value: string) => {
    setImprovedPrompt(value);
  };

  return {
    idea,
    setIdea,
    improvedPrompt,
    setImprovedPrompt: setImprovedPromptDirectly,
    isLoading,
    error,
    copied,
    handleSubmit,
    handleCopy,
    handleReset,
  };
}
