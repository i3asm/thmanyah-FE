import {ItunesSearchListEpisode} from "@/app/types/itunesSearchListEpisode";
import EpisodeCard from "@/app/search/components/episodeCard";


export default function EpisodesList({episodes}: { episodes: ItunesSearchListEpisode }) {
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