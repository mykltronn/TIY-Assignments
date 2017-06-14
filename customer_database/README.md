*** Here's teh Customer Database 

This repo contains a "failedattempt.js" which contains all my work before I was told about fetching twelve randos at once.  
  
Since that's the work that took me most of the day, I wanted to submit it anyway. Maybe somebody can tell me how I could make it work.  
It looks to me like the problem is that the function that does the 'fetch' ends up pushing the fetch/promise out of the event stack, so by the time my for-loop runs,  
we're still waiting on the actual fetch data and therefore the redefined variables.  
 
