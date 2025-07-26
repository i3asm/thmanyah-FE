import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {ItunesSearchResponse} from "@/app/types/itunesSearchResponse";

const apiEndPoint = "https:/127.0.0.1:3030";

export function useSearch() {
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


    const fetchResults = async () => {
      setIsLoading(true);
      setError(null);

      try {

        const response = await fetch(`${apiEndPoint}/podcasts/search?q=${encodeURIComponent(searchTerm)}`);
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


  }, [searchTerm]);

  return {searchResult, isLoading, error, searchTerm};
}