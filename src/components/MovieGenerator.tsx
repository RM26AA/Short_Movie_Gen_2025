import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Camera, Film, Download, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MovieResult } from "./MovieResult";

interface MovieData {
  movieName: string;
  genre: string;
  tagline: string;
  plotSummary: string;
  keyCharacters: string;
  keyThemes: string;
  storyStructure: string;
  coreConflict: string;
  setting: string;
  finalScene: string;
  endCredits: string;
  musicTheme: string;
}

const MovieGenerator = () => {
  const [movieIdea, setMovieIdea] = useState("");
  const [generatedMovie, setGeneratedMovie] = useState<MovieData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateMovie = async () => {
    if (!movieIdea.trim()) {
      toast({
        title: "Movie idea required",
        description: "Please enter your movie idea before generating.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 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",
          "HTTP-Referer": window.location.href,
          "X-Title": "Movie Idea Generator",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "deepseek/deepseek-chat-v3.1:free",
          "messages": [
            {
              "role": "user",
              "content": `Based on this movie idea: "${movieIdea}", please create a comprehensive movie breakdown. Return ONLY a JSON object with these exact keys (no markdown, no explanation):
              {
                "movieName": "Creative movie title",
                "genre": "Primary genre",
                "tagline": "Compelling tagline",
                "plotSummary": "2-3 paragraph plot summary",
                "keyCharacters": "Main characters with brief descriptions",
                "keyThemes": "Major themes explored",
                "storyStructure": "Three-act structure breakdown",
                "coreConflict": "Central conflict driving the story",
                "setting": "Time period and locations",
                "finalScene": "Description of the climactic final scene",
                "endCredits": "Special end credits sequence or post-credits scene",
                "musicTheme": "Musical style and key musical moments"
              }`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      try {
        const movieData = JSON.parse(content);
        setGeneratedMovie(movieData);
        toast({
          title: "Movie generated successfully!",
          description: "Your movie concept is ready to explore.",
        });
      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError);
        toast({
          title: "Generation Error",
          description: "Failed to process the generated movie. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error generating movie:", error);
      toast({
        title: "Generation failed",
        description: "Failed to generate movie. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetGenerator = () => {
    setMovieIdea("");
    setGeneratedMovie(null);
  };

  return (
    <div className="min-h-screen bg-cinema-gradient p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film className="h-10 w-10 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Movie Idea Generator
            </h1>
            <Camera className="h-10 w-10 text-white" />
          </div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Transform your simple ideas into comprehensive movie concepts with AI-powered creativity
          </p>
        </div>

        {!generatedMovie ? (
          /* Input Form */
          <Card className="p-8 shadow-film backdrop-blur-sm bg-white/95 animate-scale-in">
            <div className="space-y-6">
              <div>
                <label htmlFor="movie-idea" className="block text-lg font-semibold text-foreground mb-3">
                  <Sparkles className="inline h-5 w-5 mr-2 text-cinema-blue" />
                  Your Movie Idea (1-2 sentences)
                </label>
                <Textarea
                  id="movie-idea"
                  placeholder="A group of friends discover a mysterious portal in their basement that leads to different time periods..."
                  value={movieIdea}
                  onChange={(e) => setMovieIdea(e.target.value)}
                  className="min-h-[120px] text-base resize-none border-2 focus:border-cinema-blue"
                  disabled={isLoading}
                />
              </div>
              
              <Button
                onClick={generateMovie}
                disabled={isLoading || !movieIdea.trim()}
                variant="cinema"
                size="lg"
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Your Movie...
                  </>
                ) : (
                  <>
                    <Film className="mr-2 h-5 w-5" />
                    Generate Movie Concept
                  </>
                )}
              </Button>
            </div>
          </Card>
        ) : (
          /* Movie Result */
          <div className="space-y-6">
            <MovieResult movieData={generatedMovie} />
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={resetGenerator}
                variant="outline"
                size="lg"
                className="bg-white/90"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Another
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieGenerator;