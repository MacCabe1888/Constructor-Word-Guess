const Word = require("./Word");

let wordArrDescriptions = [];
let wordArr = [];

wordArrDescriptions[0] = "Terms from the Code Which Powers This Very Game (How Meta!)";
wordArr[0] = [
  new Word(characters = [j,a,v,a,s,c,r,i,p,t]),
  new Word(characters = [n,o,d,e,".",j,s]),
  new Word(characters = [c,l,a,s,s]),
  new Word(characters = [l,e,t,t,e,r]),
  new Word(characters = [c,o,n,s,t,r,u,c,t,o,r]),
  new Word(characters = [f,u,n,c,t,i,o,n]),
  new Word(characters = [r,e,t,u,r,n]),
  new Word(characters = [m,o,d,u,l,e,".",e,x,p,o,r,t,s]),
  new Word(characters = [c,o,n,s,t,a,n,t]),
  new Word(characters = [r,e,q,u,i,r,e]),
  new Word(characters = [a,l,p,h,a,b,e,t]),
  new Word(characters = [a,r,r,a,y]),
  new Word(characters = [i,n,d,e,x]),
  new Word(characters = [l,e,n,g,t,h]),
  new Word(characters = [l,o,w,e,r,c,a,s,e]),
  new Word(characters = [e,v,a,l,u,a,t,e]),
  new Word(characters = [c,h,a,r,a,c,t,e,r,s]),
  new Word(characters = [u,n,d,e,f,i,n,e,d]),
  new Word(characters = [c,o,n,c,a,t,e,n,a,t,i,o,n]),
  new Word(characters = [s,t,r,i,n,g]),
  new Word(characters = [i,n,c,l,u,d,e,s]),
  new Word(characters = [c,o,n,s,o,l,e,".",l,o,g]),
  new Word(characters = [i,n,q,u,i,r,e,r]),
  new Word(characters = [j,o,i,n]),
  new Word(characters = [p,r,o,m,p,t]),
  new Word(characters = [m,a,t,h,".",f,l,o,o,r]),
  new Word(characters = [m,a,t,h,".",r,a,n,d,o,m])
];

wordArrDescriptions[1] = "Animals";
wordArr[1] = [
  new Word(characters = [a,a,r,d,v,a,r,k]),
  new Word(characters = [a,l,b,a,t,r,o,s,s]),
  new Word(characters = [a,l,l,i,g,a,t,o,r]),
  new Word(characters = [a,n,a,c,o,n,d,a]),
  new Word(characters = [a,n,g,e,l,f,i,s,h]),
  new Word(characters = [a,n,t]),
  new Word(characters = [a,n,t,e,a,t,e,r]),
  new Word(characters = [a,n,t,e,l,o,p,e]),
  new Word(characters = [a,r,m,a,d,i,l,l,o]),
  new Word(characters = [b,a,b,o,o,n]),
  new Word(characters = [b,a,d,g,e,r]),
  new Word(characters = [b,a,l,d," ",e,a,g,l,e]),
  new Word(characters = [b,a,n,d,i,c,o,o,t]),
  new Word(characters = [b,a,r,n," ",o,w,l]),
  new Word(characters = [b,a,s,i,l,i,s,k]),
  new Word(characters = [b,a,t]),
  new Word(characters = [b,e,a,r]),
  new Word(characters = [b,e,a,v,e,r]),
  new Word(characters = [b,e,e]),
  new Word(characters = [b,e,l,u,g,a," ",w,h,a,l,e]),
  new Word(characters = [b,i,s,o,n]),
  new Word(characters = [b,l,a,c,k," ",b,e,a,r]),
  new Word(characters = [b,l,u,e,b,i,r,d]),
  new Word(characters = [b,l,u,e," ",w,h,a,l,e]),
  new Word(characters = [b,u,f,f,a,l,o]),
  new Word(characters = [b,u,t,t,e,r,f,l,y]),
  new Word(characters = [b,u,z,z,a,r,d]),
  new Word(characters = [c,a,m,e,l]),
  new Word(characters = [c,a,n,a,r,y]),
  new Word(characters = [c,a,p,y,b,a,r,a]),
  new Word(characters = [c,a,r,d,i,n,a,l]),
  new Word(characters = [c,a,r,i,b,o,u]),
  new Word(characters = [c,a,t]),
  new Word(characters = [c,e,n,t,i,p,e,d,e]),
  new Word(characters = [c,h,e,e,t,a,h]),
  new Word(characters = [c,h,i,c,k,e,n]),
  new Word(characters = [c,h,i,m,p,a,n,z,e,e]),
  new Word(characters = [c,h,i,n,c,h,i,l,l,a]),
  new Word(characters = [c,h,i,p,m,u,n,k]),
  new Word(characters = [c,l,o,w,n,f,i,s,h]),
  new Word(characters = [c,o,b,r,a]),
  new Word(characters = [c,o,c,k,a,t,o,o]),
  new Word(characters = [c,o,c,k,r,o,a,c,h]),
  new Word(characters = [c,o,n,d,o,r]),
  new Word(characters = [c,o,r,a,l]),
  new Word(characters = [c,o,u,g,a,r]),
  new Word(characters = [c,o,w]),
  new Word(characters = [c,o,y,o,t,e]),
  new Word(characters = [c,r,a,b]),
  new Word(characters = [c,r,a,n,e]),
  new Word(characters = [c,r,o,c,o,d,i,l,e]),
  new Word(characters = [c,r,o,w]),
  new Word(characters = [d,e,e,r]),
  new Word(characters = [d,i,n,g,o]),
  new Word(characters = [d,o,d,o]),
  new Word(characters = [d,i,n,o,s,a,u,r]),
  new Word(characters = [d,o,g]),
  new Word(characters = [d,o,l,p,h,i,n]),
  new Word(characters = [d,o,n,k,e,y]),
  new Word(characters = [d,o,v,e]),
  new Word(characters = [d,r,a,g,o,n,f,l,y]),
  new Word(characters = [d,u,c,k]),
  new Word(characters = [d,u,n,g," ",b,e,e,t,l,e]),
  new Word(characters = [e,a,g,l,e]),
  new Word(characters = [e,a,r,t,h,w,o,r,m]),
  new Word(characters = [e,c,h,i,d,n,a]),
  new Word(characters = [e,e,l]),
  new Word(characters = [e,l,e,p,h,a,n,t]),
  new Word(characters = [e,l,e,p,h,a,n,t," ",s,e,a,l]),
  new Word(characters = [e,l,k]),
  new Word(characters = [e,m,p,e,r,o,r," ",p,e,n,g,u,i,n]),
  new Word(characters = [e,r,m,i,n,e]),
  new Word(characters = [f,a,l,c,o,n]),
  new Word(characters = [f,e,r,r,e,t]),
  new Word(characters = [f,i,n,c,h]),
  new Word(characters = [f,i,r,e," ",a,n,t]),
  new Word(characters = [f,i,r,e,f,l,y]),
  new Word(characters = [f,l,a,m,i,n,g,o]),
  new Word(characters = [f,l,e,a]),
  new Word(characters = [f,l,y]),
  new Word(characters = [f,o,x]),
  new Word(characters = [f,r,o,g]),
  new Word(characters = [g,a,z,e,l,l,e]),
  new Word(characters = [g,e,c,k,o]),
  new Word(characters = [g,e,r,b,i,l]),
  new Word(characters = [g,i,a,n,t," ",p,a,n,d,a]),
  new Word(characters = [g,i,b,b,o,n]),
  new Word(characters = [g,i,l,a," ",m,o,n,s,t,e,r]),
  new Word(characters = [g,i,r,a,f,f,e]),
  new Word(characters = [g,n,u]),
  new Word(characters = [g,o,a,t]),
  new Word(characters = [g,o,l,d,f,i,s,h]),
  new Word(characters = [g,o,o,s,e]),
  new Word(characters = [g,o,p,h,e,r]),
  new Word(characters = [g,o,r,i,l,l,a]),
  new Word(characters = [g,r,a,s,s,h,o,p,p,e,r]),
  new Word(characters = [g,r,e,a,t," ",w,h,i,t,e," ",s,h,a,r,k]),
  new Word(characters = [g,r,i,z,z,l,y," ",b,e,a,r]),
  new Word(characters = [g,r,o,u,n,d,h,o,g]),
  new Word(characters = [g,u,i,n,e,a," ",p,i,g]),
  new Word(characters = [h,a,m,m,e,r,h,e,a,d," ",s,h,a,r,k]),
  new Word(characters = [h,a,m,s,t,e,r]),
  new Word(characters = [h,a,r,e]),
  new Word(characters = [h,a,w,k]),
  new Word(characters = [h,e,d,g,e,h,o,g]),
  new Word(characters = [h,e,r,m,i,t," ",c,r,a,b]),
  new Word(characters = [h,e,r,o,n]),
  new Word(characters = [h,i,p,p,o,p,o,t,a,m,u,s]),
  new Word(characters = [h,o,r,s,e]),
  new Word(characters = [h,o,r,s,e,s,h,o,e," ",c,r,a,b]),
  new Word(characters = [h,u,m,m,i,n,g,b,i,r,d]),
  new Word(characters = [h,y,e,n,a]),
  new Word(characters = [i,g,u,a,n,a]),
  new Word(characters = [j,a,c,k,a,l]),
  new Word(characters = [j,a,c,k,r,a,b,b,i,t]),
  new Word(characters = [j,a,g,u,a,r]),
  new Word(characters = [j,e,l,l,y,f,i,s,h]),
  new Word(characters = [k,a,n,g,a,r,o,o]),
  new Word(characters = [k,e,s,t,r,e,l]),
  new Word(characters = [k,i,l,l,e,r," ",w,h,a,l,e]),
  new Word(characters = [k,i,w,i]),
  new Word(characters = [k,o,a,l,a]),
  new Word(characters = [k,o,i]),
  new Word(characters = [k,o,m,o,d,o," ",d,r,a,g,o,n]),
  new Word(characters = [k,r,i,l,l]),
  new Word(characters = [l,a,d,y,b,u,g]),
  new Word(characters = [l,a,m,p,r,e,y]),
  new Word(characters = [l,e,m,m,i,n,g]),
  new Word(characters = [l,e,m,u,r]),
  new Word(characters = [l,e,o,p,a,r,d]),
  new Word(characters = [l,i,o,n]),
  new Word(characters = [l,i,z,a,r,d]),
  new Word(characters = [l,l,a,m,a]),
  new Word(characters = [l,o,b,s,t,e,r]),
  new Word(characters = [l,y,n,x]),
  new Word(characters = [m,a,n,a,t,e,e]),
  new Word(characters = [m,a,n,t,a," ",r,a,y]),
  new Word(characters = [m,a,r,m,o,s,e,t]),
  new Word(characters = [m,a,r,m,o,t]),
  new Word(characters = [m,e,e,r,k,a,t]),
  new Word(characters = [m,i,l,l,i,p,e,d,e]),
  new Word(characters = [m,o,c,k,i,n,g,b,i,r,d]),
  new Word(characters = [m,o,l,e]),
  new Word(characters = [m,o,n,a,r,c,h," ",b,u,t,t,e,r,f,l,y]),
  new Word(characters = [m,o,n,g,o,o,s,e]),
  new Word(characters = [m,o,n,k,e,y]),
  new Word(characters = [m,o,o,s,e]),
  new Word(characters = [m,o,s,q,u,i,t,o]),
  new Word(characters = [m,o,t,h]),
  new Word(characters = [m,o,u,s,e]),
  new Word(characters = [n,a,r,w,h,a,l]),
  new Word(characters = [n,e,w,t]),
  new Word(characters = [n,i,g,h,t,i,n,g,a,l,e]),
  new Word(characters = [o,c,e,l,o,t]),
  new Word(characters = [o,c,t,o,p,u,s]),
  new Word(characters = [o,p,o,s,s,u,m]),
  new Word(characters = [o,r,a,n,g,u,t,a,n]),
  new Word(characters = [o,r,c,a]),
  new Word(characters = [o,r,i,o,l,e]),
  new Word(characters = [o,s,t,r,i,c,h]),
  new Word(characters = [o,t,t,e,r]),
  new Word(characters = [o,w,l]),
  new Word(characters = [o,x]),
  new Word(characters = [o,y,s,t,e,r]),
  new Word(characters = [p,a,n,d,a]),
  new Word(characters = [p,a,n,t,h,e,r]),
  new Word(characters = [p,a,r,a,k,e,e,t]),
  new Word(characters = [p,a,r,r,o,t]),
  new Word(characters = [p,a,r,t,r,i,d,g,e]),
  new Word(characters = [p,e,a,c,o,c,k]),
  new Word(characters = [p,e,l,i,c,a,n]),
  new Word(characters = [p,e,n,g,u,i,n]),
  new Word(characters = [p,h,e,a,s,a,n,t]),
  new Word(characters = [p,i,g]),
  new Word(characters = [p,i,g,e,o,n]),
  new Word(characters = [p,i,r,a,n,h,a]),
  new Word(characters = [p,l,a,t,y,p,u,s]),
  new Word(characters = [p,o,l,a,r," ",b,e,a,r]),
  new Word(characters = [p,o,r,c,u,p,i,n,e]),
  new Word(characters = [p,o,s,s,u,m]),
  new Word(characters = [p,r,a,i,r,i,e," ",d,o,g]),
  new Word(characters = [p,r,a,y,i,n,g," ",m,a,n,t,i,s]),
  new Word(characters = [p,u,f,f,e,r,f,i,s,h]),
  new Word(characters = [p,u,f,f,i,n]),
  new Word(characters = [p,u,m,a]),
  new Word(characters = [p,y,t,h,o,n]),
  new Word(characters = [q,u,a,i,l]),
  new Word(characters = [r,a,b,b,i,t]),
  new Word(characters = [r,a,c,c,o,o,n]),
  new Word(characters = [r,a,m]),
  new Word(characters = [r,a,t]),
  new Word(characters = [r,a,t,t,l,e,s,n,a,k,e]),
  new Word(characters = [r,a,v,e,n]),
  new Word(characters = [r,e,d," ",p,a,n,d,a]),
  new Word(characters = [r,e,i,n,d,e,e,r]),
  new Word(characters = [r,h,i,n,o,c,e,r,o,s]),
  new Word(characters = [r,o,a,d,r,u,n,n,e,r]),
  new Word(characters = [s,a,l,a,m,a,n,d,e,r]),
  new Word(characters = [s,a,l,m,o,n]),
  new Word(characters = [s,c,o,r,p,i,o,n]),
  new Word(characters = [s,c,r,e,e,c,h," ",o,w,l]),
  new Word(characters = [s,e,a," ",l,i,o,n]),
  new Word(characters = [s,e,a," ",t,u,r,t,l,e]),
  new Word(characters = [s,e,a," ",u,r,c,h,i,n]),
  new Word(characters = [s,e,a,h,o,r,s,e]),
  new Word(characters = [s,h,a,r,k]),
  new Word(characters = [s,h,e,e,p]),
  new Word(characters = [s,h,r,i,m,p]),
  new Word(characters = [s,k,u,n,k]),
  new Word(characters = [s,l,o,t,h]),
  new Word(characters = [s,l,u,g]),
  new Word(characters = [s,n,a,i,l]),
  new Word(characters = [s,n,a,k,e]),
  new Word(characters = [s,n,o,w," ",l,e,o,p,a,r,d]),
  new Word(characters = [s,n,o,w,y," ",o,w,l]),
  new Word(characters = [s,p,a,r,r,o,w]),
  new Word(characters = [s,p,e,r,m," ",w,h,a,l,e]),
  new Word(characters = [s,p,i,d,e,r]),
  new Word(characters = [s,p,o,n,g,e]),
  new Word(characters = [s,q,u,i,d]),
  new Word(characters = [s,q,u,i,r,r,e,l]),
  new Word(characters = [s,t,a,r,f,i,s,h]),
  new Word(characters = [s,t,o,r,k]),
  new Word(characters = [s,w,a,l,l,o,w]),
  new Word(characters = [s,w,a,n]),
  new Word(characters = [s,w,o,r,d,f,i,s,h]),
  new Word(characters = [t,a,p,i,r]),
  new Word(characters = [t,a,r,a,n,t,u,l,a]),
  new Word(characters = [t,a,s,m,a,n,i,a,n," ",d,e,v,i,l]),
  new Word(characters = [t,i,g,e,r]),
  new Word(characters = [t,o,a,d]),
  new Word(characters = [t,o,u,c,a,n]),
  new Word(characters = [t,u,r,k,e,y]),
  new Word(characters = [t,u,r,t,l,e]),
  new Word(characters = [v,a,m,p,i,r,e," ",b,a,t]),
  new Word(characters = [v,i,p,e,r]),
  new Word(characters = [v,u,l,t,u,r,e]),
  new Word(characters = [w,a,l,l,a,b,y]),
  new Word(characters = [w,a,l,r,u,s]),
  new Word(characters = [w,a,s,p]),
  new Word(characters = [w,a,t,e,r," ",b,u,f,f,a,l,o]),
  new Word(characters = [w,e,a,s,e,l]),
  new Word(characters = [w,h,a,l,e]),
  new Word(characters = [w,i,l,d,e,b,e,e,s,t]),
  new Word(characters = [w,o,l,f]),
  new Word(characters = [w,o,m,b,a,t]),
  new Word(characters = [w,o,o,d,p,e,c,k,e,r]),
  new Word(characters = [w,o,r,m]),
  new Word(characters = [y,a,k]),
  new Word(characters = [z,e,b,r,a])
];

wordArrDescriptions[2] = "Musical Instruments";
wordArr[2] = [
  new Word(characters = [a,c,c,o,r,d,i,o,n]),
  new Word(characters = [b,a,g,p,i,p,e]),
  new Word(characters = [b,a,n,j,o]),
  new Word(characters = [b,a,s,s," ",d,r,u,m]),
  new Word(characters = [b,a,s,s,o,o,n]),
  new Word(characters = [b,o,n,g,o," ",d,r,u,m,s]),
  new Word(characters = [c,a,l,l,i,o,p,e]),
  new Word(characters = [c,a,s,t,a,n,e,t,s]),
  new Word(characters = [c,e,l,l,o]),
  new Word(characters = [c,h,i,m,e,s]),
  new Word(characters = [c,l,a,r,i,n,e,t]),
  new Word(characters = [c,l,a,v,e,s]),
  new Word(characters = [c,l,a,v,i,c,h,o,r,d]),
  new Word(characters = [c,o,n,g,a]),
  new Word(characters = [c,o,r,n,e,t]),
  new Word(characters = [c,o,w,b,e,l,l]),
  new Word(characters = [c,y,m,b,a,l,s]),
  new Word(characters = [d,i,d,g,e,r,i,d,o,o]),
  new Word(characters = [d,o,u,b,l,e," ",b,a,s,s]),
  new Word(characters = [d,r,u,m,s]),
  new Word(characters = [d,u,l,c,i,m,e,r]),
  new Word(characters = [e,n,g,l,i,s,h," ",h,o,r,n]),
  new Word(characters = [e,u,p,h,o,n,i,u,m]),
  new Word(characters = [f,i,d,d,l,e]),
  new Word(characters = [f,l,u,t,e]),
  new Word(characters = [f,r,e,n,c,h," ",h,o,r,n]),
  new Word(characters = [g,l,o,c,k,e,n,s,p,i,e,l]),
  new Word(characters = [g,o,n,g]),
  new Word(characters = [g,u,i,r,o]),
  new Word(characters = [g,u,i,t,a,r]),
  new Word(characters = [h,a,n,d,p,a,n]),
  new Word(characters = [h,a,r,m,o,n,i,c,a]),
  new Word(characters = [h,a,r,m,o,n,i,u,m]),
  new Word(characters = [h,a,r,p]),
  new Word(characters = [h,a,r,p,s,i,c,h,o,r,d]),
  new Word(characters = [h,o,r,n]),
  new Word(characters = [h,u,r,d,y,"-",g,u,r,d,y]),
  new Word(characters = [j,u,g]),
  new Word(characters = [k,a,z,o,o]),
  new Word(characters = [k,e,y,b,o,a,r,d]),
  new Word(characters = [k,o,t,o]),
  new Word(characters = [l,u,t,e]),
  new Word(characters = [l,y,r,e]),
  new Word(characters = [m,a,n,d,o,l,i,n]),
  new Word(characters = [m,a,r,i,m,b,a]),
  new Word(characters = [m,b,i,r,a]),
  new Word(characters = [m,r,i,d,a,n,g,a,m]),
  new Word(characters = [o,b,o,e]),
  new Word(characters = [o,c,a,r,i,n,a]),
  new Word(characters = [o,r,g,a,n]),
  new Word(characters = [o,u,d]),
  new Word(characters = [p,a,n," ",f,l,u,t,e]),
  new Word(characters = [p,i,a,n,o]),
  new Word(characters = [p,i,c,c,o,l,o]),
  new Word(characters = [p,i,p,e," ",o,r,g,a,n]),
  new Word(characters = [r,e,c,o,r,d,e,r]),
  new Word(characters = [r,e,e,d," ",o,r,g,a,n]),
  new Word(characters = [s,a,x,o,p,h,o,n,e]),
  new Word(characters = [s,h,a,m,i,s,e,n]),
  new Word(characters = [s,i,t,a,r]),
  new Word(characters = [s,l,i,d,e," ",w,h,i,s,t,l,e]),
  new Word(characters = [s,n,a,r,e]),
  new Word(characters = [s,o,u,s,a,p,h,o,n,e]),
  new Word(characters = [s,y,n,t,h,e,s,i,z,e,r]),
  new Word(characters = [t,a,b,l,a]),
  new Word(characters = [t,a,i,k,o]),
  new Word(characters = [t,a,m,b,o,u,r,i,n,e]),
  new Word(characters = [t,a,n,p,u,r,a]),
  new Word(characters = [t,h,e,r,e,m,i,n]),
  new Word(characters = [t,i,m,p,a,n,i]),
  new Word(characters = [t,o,m,"-",t,o,m]),
  new Word(characters = [t,r,i,a,n,g,l,e]),
  new Word(characters = [t,r,o,m,b,o,n,e]),
  new Word(characters = [t,r,u,m,p,e,t]),
  new Word(characters = [t,u,b,a]),
  new Word(characters = [u,k,u,l,e,l,e]),
  new Word(characters = [v,i,b,r,a,p,h,o,n,e]),
  new Word(characters = [v,i,o,l]),
  new Word(characters = [v,i,o,l,a]),
  new Word(characters = [v,i,o,l,a," ",d,a," ",g,a,m,b,a]),
  new Word(characters = [v,i,o,l,i,n]),
  new Word(characters = [v,u,v,u,z,e,l,a]),
  new Word(characters = [w,h,i,p]),
  new Word(characters = [w,h,i,s,t,l,e]),
  new Word(characters = [w,o,o,d," ",b,l,o,c,k]),
  new Word(characters = [x,y,l,o,p,h,o,n,e]),
  new Word(characters = [z,i,t,h,e,r])
];

module.exports = wordArr;
module.exports.descriptions = wordArrDescriptions;
