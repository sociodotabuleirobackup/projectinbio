import {  
  Github, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Plus,
} from "lucide-react"
import Button from "../ui/button"


const icons = [Github, Instagram, Linkedin, Twitter, Plus]

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
          <h3 className="text-xl font-bold">Bruno Dev</h3> 
        </div>
        <p className="opacity-40">Eu Faço produtos para a internet</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xl font-medium">Link</span>
        <div className="flex gap-3">
          {icons.map((IconComponent, index) => (
            <Button
              key={index}
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <IconComponent className="w-5 h-5" />
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            <Button>Template SaaS - compre agora</Button>
            <button>
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}