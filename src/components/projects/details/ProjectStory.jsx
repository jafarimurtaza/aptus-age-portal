export default function ProjectStory({project}){


return(

<section>


{
project.paragraphs.slice(0,2).map(
(text,index)=>(

<p
key={index}
className="
text-sm
leading-7
text-slate-500
mb-5
"
>

{text}

</p>

))
}



<img

src={project.storyImage}

className="
w-full
h-[170px]
object-cover
my-8
"

/>



<p
className="
text-sm
leading-7
text-slate-500
"
>

{project.paragraphs[2]}

</p>


</section>


)

}