export default function ProjectResults({ project }) {

return (

<section className="mt-10">


<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-5
">


<div className="
rounded-xl
bg-white
border
border-slate-100
p-5
">

<p className="
text-[10px]
uppercase
tracking-wide
text-slate-400
font-bold
">
Project Result
</p>


<p className="
mt-3
text-sm
font-semibold
text-slate-700
">
{project.outcome}
</p>

</div>




<div className="
rounded-xl
bg-white
border
border-slate-100
p-5
">

<p className="
text-[10px]
uppercase
tracking-wide
text-slate-400
font-bold
">
Next Step
</p>


<p className="
mt-3
text-sm
font-semibold
text-slate-700
">
{project.nextStep}
</p>

</div>



</div>


</section>

)

}