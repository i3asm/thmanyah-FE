import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {ItunesSearchResponse} from "@/app/types/itunesSearchResponse";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://thmanyahapi.i3asm.xyz';

export function usePodcastSearch() {
  const [searchResult, setSearchResult] = useState<ItunesSearchResponse | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('q') || '';

  useEffect(() => {
    if (!searchTerm) {
      setSearchResult(null);
      return;
    }


    const timer = setTimeout(() => {
      setIsLoading(true);
      setError(null);

      const fetchResults = async () => {

        try {
          const response = await fetch(`${API_BASE_URL}/podcasts/search?term=${encodeURIComponent(searchTerm)}`);
          if (!response.ok) throw new Error('Search failed');

          const data: ItunesSearchResponse = await response.json();
          setSearchResult(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Search failed');
          setSearchResult(null);
        } finally {
          setIsLoading(false);
        }
      };

      fetchResults();

    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  return {searchResult, isLoading, error, searchTerm};
}