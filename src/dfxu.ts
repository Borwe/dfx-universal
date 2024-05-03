import { doProcess } from "./utils"

export async function  buildDockerDfxu(): Promise<boolean>{
  return doProcess("docker build --tag dfxu-img:latest "+__dirname+"/../")
}
