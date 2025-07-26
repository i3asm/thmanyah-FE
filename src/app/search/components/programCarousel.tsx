import {ItunesSearchListProgram} from "@/app/types/itunesSearchListProgram";
import ProgramCard from "@/app/search/components/programCard";


export function ProgramCarousel({programs}: { programs: ItunesSearchListProgram }) {
  return (
      <div className="flex gap-4 overflow-x-scroll snap-x snap-mandatory max-w-full">
        {
          programs.results.map((item, i) => {
            return (
                <div className="snap-start shrink-0" key={i}>
                  <ProgramCard program={item}/>
                </div>
            )
          })
        }
      </div>
  )
}