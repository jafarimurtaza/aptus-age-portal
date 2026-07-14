export default function ProjectHeader({project}){


return(

<div>


<img
src={project.heroImage}
className="
w-full
h-[260px]
object-cover
mb-8
"
/>



<h2 className="
text-xl
font-bold
text-slate-800
mb-4
">
{project.title}
</h2>


</div>

)

}