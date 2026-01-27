import react,{useEffect, useState} from 'react'
function Greetings(){
    const[Greetings,setGreetings]=usestate("")
    useEffect(()=>{
       
         const hours=new Date().getHours().toString().padStart(2,'0')
          const minutes=new Date().getMinutes.toString().padStart(2,'0')
           const seconds=new Date().getSeconds().toString().padStart(2,'0')

           if(hours<12)
            {setGreetings(`Good mornig ${hours}:${minutes}:${seconds}`)}

           else if(hours<=12 && hours<=17)
            {setGreetings(`Good afternoon ${hours}:${minutes}:${seconds}`)}

            else if(hours<=17 && hours<=19)
            {setGreetings(`Good evening ${hours}:${minutes}:${seconds}`)}

            else{
                setGreetings( `good night`)
            }
    })
    return(
    <div>
        {Greetings}
    </div>
    )
}
export default Greetings
