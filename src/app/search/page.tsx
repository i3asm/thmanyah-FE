'use client'
import {ItunesProgramResponse} from "@/app/types/itunesProgramResponse";
import {useEffect} from "react";
import {usePodcastSearch} from "@/app/hooks/usePodcastSearch";
import {ItunesSearchListProgram} from "@/app/types/itunesSearchListProgram";
import {ItunesSearchListEpisode} from "@/app/types/itunesSearchListEpisode";
import {ItunesEpisodeResponse} from "@/app/types/itunesEpisodeResponse";


export default function SearchPage() {
  // const searchParams = useSearchParams();
  // const query = searchParams.get('q')?.trim();

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


export function EpisodesList({episodes}: { episodes: ItunesSearchListEpisode }) {
  return (
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {
          episodes.results.map((item, i) => {
            return (
                <div className="" key={i}>
                  <EpisodeCard episode={item}></EpisodeCard>
                </div>
            )
          })
        }
      </div>
  )
}

export function EpisodeCard({episode}: { episode: ItunesEpisodeResponse }) {
  return (
      <a className="p-1 flex align-middle justify-between gap-2" href={episode.trackViewUrl}>
        <div className="flex gap-2">
          <div className="aspect-square">
            <img className="rounded-sm aspect-square max-w-[8vh] min-w-[8vh]" src={episode.artworkUrl600}
                 alt={episode.trackName}/>
          </div>
          <div className="">
            <div className="text-sm line-clamp-2">{episode.trackName}</div>
            <div className="text-sm text-orange-400 line-clamp-1">{episode.collectionName}</div>
          </div>
        </div>
        <div className="p-1 hover:cursor-pointer" onClick={(e) => console.log('clicked')}>
          <svg className="fill-gray-400 h-6 cursor-pointer" strokeWidth="0" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div>
      </a>
  )
}

export function ProgramCarousel({programs}: { programs: ItunesSearchListProgram }) {
  return (
      <div className="flex gap-4 overflow-x-scroll snap-x snap-mandatory max-w-full">
        {
          programs.results.map((item, i) => {
            return (
                <div className="snap-start shrink-0" key={i}>
                  <ProgramCard program={item}></ProgramCard>
                </div>
            )
          })
        }
      </div>
  )
}

export function ProgramCard({program}: { program: ItunesProgramResponse }) {
  return (
      <a className="p-1 max-w-[20vh] block" href={program.trackViewUrl}>
        <div className="aspect-square">
          <img className="rounded-md aspect-square min-w-[20vh]" src={program.artworkUrl100} alt={program.trackName}/>
        </div>
        <div className="text-sm line-clamp-2">{program.collectionName}</div>
        <div className="text-sm text-orange-400 line-clamp-1">{program.artistName}</div>
      </a>
  )
}
