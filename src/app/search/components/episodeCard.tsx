import {ItunesEpisodeResponse} from "@/app/types/itunesEpisodeResponse";

export default function EpisodeCard({episode}: { episode: ItunesEpisodeResponse }) {
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