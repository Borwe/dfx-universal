#!/usr/bin/env node

import { buildDockerDfxu } from "./dfxu";


async function main(){
  const success = await buildDockerDfxu()
  if(!success){
    return -1;
  }
  console.log("SUCCESS: ",success)
}

main()
