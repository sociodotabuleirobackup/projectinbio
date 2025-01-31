import { Facebook, Github , Instagram , Linkedin, Twitter, Plus} from "lucide-react"


export default function UseCard(){
  return (
    <div className="w-[340px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img 
        src="../../../public/me.jpeg" 
        alt="bruno dev" 
        className="rounded-full object-cover w-full h-full"
        />
      </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-2">
               <h3 className="text-xl font-bold">
                Bruno Dev
                </h3> 
            </div>
            <p className="opacity-40">Eu Faço produtos para a internet</p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="uppercase text-xl font-medium">Link</span>
          <div className="flex gap-3">
            <Github/>
            <Instagram/>
            <Linkedin/>
            <Twitter/>
            <Facebook/>
            <Plus/>

            

          </div>
        </div>
    </div>
  )
}