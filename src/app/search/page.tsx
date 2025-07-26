'use client'
import {Suspense, useEffect} from "react";
import {usePodcastSearch} from "@/app/hooks/usePodcastSearch";
import {ProgramCarousel} from "@/app/search/components/programCarousel";
import EpisodesList from "@/app/search/components/episodesList";


function SearchPageContent() {

  const {searchResult, isLoading, error, searchTerm} = usePodcastSearch();

  useEffect(() => {

  }, [searchTerm]);

  if (!searchTerm) {
    return (
        <div className="">
          <h2 className="p-30 text-center text-gray-400">Type in a search term to start. </h2>
        </div>
    );
  }

  if (isLoading) {
    return (
        <div className="">
          <h2 className="p-30 text-center text-gray-400">Loading...</h2>
        </div>
    )
  }

  if (error) {
    return (
        <div className="">
          <h2 className="p-30 text-center text-gray-400">Error!!</h2>
          <h2 className="p-30 text-center text-gray-400">{error.toString()}</h2>
        </div>
    )
  }

  if (!searchResult) {
    return (
        <div className="">
          <h2 className="p-30 text-center text-gray-400">no results found</h2>
        </div>
    )
  }

  return (
      <div className="">
        <div className="p-4 text-lg flex justify-between border-b border-b-gray-800 bg-background sticky top-0">
          <div className="">
            Top podcasts for {searchTerm}
          </div>

          <div className="p-1 hover:cursor-pointer" onClick={(e) => console.log('clicked')}>
            <svg className="fill-gray-200 h-6 cursor-pointer" strokeWidth="0" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>
        </div>
        <div className=" p-4 overflow-hidden">
          <ProgramCarousel programs={searchResult.programs}></ProgramCarousel>
        </div>


        <div className="p-4 text-lg flex justify-between border-b border-b-gray-800 bg-background sticky top-0">
          <div className="">
            Top episodes for {searchTerm}
          </div>

          <div className="p-1 hover:cursor-pointer" onClick={(e) => console.log('clicked')}>
            <svg className="fill-gray-200 h-6 cursor-pointer" strokeWidth="0" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                  d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </div>

        </div>
        <div className=" p-4 overflow-hidden">
          <EpisodesList episodes={searchResult.episodes}></EpisodesList>
        </div>
      </div>
  );
}


export default function SearchPage() {
  return (
      <Suspense fallback={<div>Loading search...</div>}>
        <SearchPageContent/>
      </Suspense>
  );
}