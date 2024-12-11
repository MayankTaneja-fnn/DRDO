import icon1 from "../../public/table_left_align.png"
import { format } from 'date-fns';
import { Link } from "react-router-dom";

const tableContent=[{link:"admin",name:"प्रशासन",name_eng:"Admin",num:"253",num2:"253",job:"OFFICIAL BAG/LADIES PURSE REI",by:"boardadmin",date:"10 Sep 2024, 16:51"},
  {link:"cghs", name:"सीजीएचएस",name_eng:"CGHS",num:"12",num2:"12",job:"CGHS LATEST GUIDELINES",by:"saketmital",date:"01 Jul 2024, 12:30"}
]

function Home() {
  const time=new Date();
  const formatted = format(time, 'dd MMMM yyyy, HH:mm');
  return (
    <div className="pt-52">
      <div className="w-full flex justify-end">
                <div className="mr-5">
                    It is currently {formatted}
                </div>
      </div>
      <div className="w-screen pr-2 pt-5 pl-2">
      <table className="w-full border-solid border-2 border-black">
        {tableContent.map((table,index)=>(
          <Link to={table.link}>
          <tr key={index} className="flex items-center border-b-2 border-solid border-black">
            <td className="ml-2 w-[5vw]">
              <img src={icon1} className="w-10 h-10"/>
            </td>
            <td className="w-[55vw] font-bold ">
              {table.name} / {table.name_eng}
            </td>
            <td className="w-[8vw]">
              {table.num}
            </td>
            <td className="w-[8vw]">
              {table.num2}
            </td>
            <td className="mt-1 mb-1">
              <div className="font-bold">
                {table.job}
              </div>
              <div>
                <span>by</span> <span className="font-bold">{table.by}</span>
              </div>
              <div>
                {table.date}
              </div>
            </td>
          </tr>
          </Link>
        ))}  
      </table>
      </div>
    </div>
  )
}

export default Home