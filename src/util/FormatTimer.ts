

export const FormatTimer=(timer:number)=>{
    let minutes=Math.floor(timer / 60)
    timer=timer -(minutes *60)

    let transformTimerSeg=`${timer < 10 ? '0' + timer : timer}`
    let transformMinutes=`${minutes < 10 ? '0' + minutes : minutes}`

    return `${transformMinutes} : ${transformTimerSeg}`
}