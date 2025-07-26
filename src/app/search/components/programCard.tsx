import {ItunesProgramResponse} from "@/app/types/itunesProgramResponse";

export default function ProgramCard({program}: { program: ItunesProgramResponse }) {
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