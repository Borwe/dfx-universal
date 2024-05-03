import {exec, ChildProcess} from "child_process"

export async function doProcess(cmd: string): Promise<boolean>{
  return new Promise<boolean>((resolve)=>{

    const proc: ChildProcess = exec(cmd,(err)=>{
      if(err == null || err.code==0){
        return resolve(true)
      }
      return resolve(false)
    })

    proc.stdout?.pipe(process.stdout)
    proc.stderr?.pipe(process.stderr)
    proc.stdin?.pipe(process.stdin)
  })
}
