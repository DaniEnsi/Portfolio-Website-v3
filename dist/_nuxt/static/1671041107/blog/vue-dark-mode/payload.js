__NUXT_JSONP__("/blog/vue-dark-mode", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX){return {data:[{_img:{"/_ipx/f_webp,fit_cover,s_100x100/assets/icons/icon.svg":"\u002F_nuxt\u002Fimage\u002F078985.webp","/_ipx/f_webp,fit_cover/https://i.vgy.me/Kxexmk.jpg":"\u002F_nuxt\u002Fimage\u002F97291c.webp","/_ipx/f_webp,fit_cover/assets/images/posts/vue-nuxt-stagemanagement.jpg":"\u002F_nuxt\u002Fimage\u002F4a5dd7.webp"}}],fetch:{"0":{post:{slug:"vue-dark-mode",description:aq,title:"Vue Dark Mode",tags:["vue","nuxt","frontend"],createdAt:"2019-12-07T17:13:12.000Z",header:"https:\u002F\u002Fi.vgy.me\u002FKxexmk.jpg",related:[ar],toc:[{id:as,depth:N,text:at},{id:au,depth:N,text:av},{id:aw,depth:N,text:ax},{id:ay,depth:N,text:az},{id:aA,depth:N,text:aB},{id:aC,depth:N,text:aD}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:a,value:"The inclusion of dark color modes\u002Fthemes has become quite common in modern web applications. Not only do dark modes look attractive on screen, but creating a dark mode\u002Ftheme for your application can help improve readability, reduce eye strain, and even improve user experience."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:aq}]},{type:a,value:f},{type:b,tag:O,props:{id:as},children:[{type:a,value:at},{type:b,tag:P,props:{ariaHidden:I,href:"#the-usedark-composable",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" is a VueUse composable that provides a reactive dark mode that automatically persists inside session storage or local storage.\n"},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" first checks if there’s a value between session storage and local storage, and if there is none, it uses the system preference of the user."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Let’s go ahead and create an app that toggles between dark mode and light mode using "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:O,props:{id:au},children:[{type:a,value:av},{type:b,tag:P,props:{ariaHidden:I,href:"#project-setup",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"To get started, let’s create a simple Vue project with Vite. Run the following command in your terminal:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:aF}]},{type:b,tag:x,props:{className:[y,aG]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"\u002F\u002F Using yarn\nyarn create vite vue-darkmode-app\n\u002F\u002F Using npm\nnpm create vite@latest vue-darkmode-app\n"}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Select Vue as your preferred framework, and install project dependencies in the project directory."}]},{type:a,value:f},{type:b,tag:O,props:{id:aw},children:[{type:a,value:ax},{type:b,tag:P,props:{ariaHidden:I,href:"#install-vueuse-library",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Next, let’s make sure we have "},{type:b,tag:k,props:{},children:[{type:a,value:"@vueuse\u002Fcore"}]},{type:a,value:" installed in our project."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"We need this in order to use composables such as "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" and "},{type:b,tag:k,props:{},children:[{type:a,value:Z}]},{type:a,value:" in our project.Run the following command in your project’s root directory, in the terminal:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:aF}]},{type:b,tag:x,props:{className:[y,aG]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"\u002F\u002F Using yarn\nyarn add @vueuse\u002Fcore\n\u002F\u002F Using npm\nnpm install @vueuse\u002Fcore\n"}]}]}]},{type:a,value:f},{type:b,tag:O,props:{id:ay},children:[{type:a,value:az},{type:b,tag:P,props:{ariaHidden:I,href:"#implementing-dark-mode",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Now that we’re done with setting up, let’s go ahead and implement dark mode into our app."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:aH},{type:b,tag:af,props:{},children:[{type:a,value:ag}]},{type:a,value:" file, delete the default starter code and import "},{type:b,tag:k,props:{},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"As earlier mentioned, "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" returns a reactive variable that checks the user’s session and local storage before resorting to the user’s system preferences for its value."}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:_}]},{type:b,tag:x,props:{className:[y,$]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,n,U]},children:[{type:a,value:aj}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ak]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:" useDark "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,U]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Now lets go ahead and run the server to view what we have so far."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Whatever value is displayed on your screen at the moment is a result of your system preferences. The reason we’re seeing "},{type:b,tag:k,props:{},children:[{type:a,value:"“false”"}]},{type:a,value:" in the screenshot above is because this system does not have a dark theme preference."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"If you update your system preference to use a dark theme, the value of "},{type:b,tag:k,props:{},children:[{type:a,value:aa}]},{type:a,value:" would also update and "},{type:b,tag:k,props:{},children:[{type:a,value:"“true”"}]},{type:a,value:" should display instead."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Now, let’s add a simple button that can toggle between light and dark mode. For this function, we’ll be using the VueUse composable "},{type:b,tag:k,props:{},children:[{type:a,value:Z}]},{type:a,value:", which takes in a boolean and switches its value."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Edit your "},{type:b,tag:af,props:{},children:[{type:a,value:ag}]},{type:a,value:" file to look like this:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:_}]},{type:b,tag:x,props:{className:[y,$]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,n,U]},children:[{type:a,value:aj}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ak]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,U]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ab}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,ao]},children:[{type:b,tag:c,props:{className:[d,e,aN]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"In this code, our useToggle function takes in isDark and changes its value every time our “Toggle Color Mode” button is clicked."}]},{type:a,value:f},{type:b,tag:O,props:{id:aA},children:[{type:a,value:aB},{type:b,tag:P,props:{ariaHidden:I,href:"#styling-the-app",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"You may have noticed that adding "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" to our app and toggling between color modes didn’t change our application’s appearance. That is because "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" only handles the DOM attribute changes and does not affect the actual style, theme or CSS for you."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"However, "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" makes it easy for us to update our styles depending on what color mode is selected by adding a “dark” class to our HTML element every time "},{type:b,tag:k,props:{},children:[{type:a,value:aa}]},{type:a,value:" is "},{type:b,tag:k,props:{},children:[{type:a,value:I}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Now let’s improve our app’s appearance by adding a different style for our dark mode."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:aH},{type:b,tag:af,props:{},children:[{type:a,value:ag}]},{type:a,value:" file and edit the style:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:_}]},{type:b,tag:x,props:{className:[y,$]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:t}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,n,U]},children:[{type:a,value:aj}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ak]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:aI},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n,U]},children:[{type:a,value:al}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:am}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aL},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ab}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,ao]},children:[{type:b,tag:c,props:{className:[d,e,aN]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,aQ]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,ap]},children:[{type:b,tag:c,props:{className:[d,"class"]},children:[{type:a,value:".dark"}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad,H]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:" \u002F\u002F it's better to use a dark "},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"grey"}]},{type:a,value:" color instead of pure "},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"black"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad,H]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:O,props:{id:aC},children:[{type:a,value:aD},{type:b,tag:P,props:{ariaHidden:I,href:"#customizing-usedark",tabIndex:Q},children:[{type:b,tag:c,props:{className:[R,S]},children:[]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Another great thing about "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" is that it is completely customizable. You can choose to specify the selector, attribute, and value of dark and light modes in your app using four different properties."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Update "},{type:b,tag:k,props:{},children:[{type:a,value:l}]},{type:a,value:" to look like this:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:l}]},{type:b,tag:x,props:{className:[y,aU]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,ae,F]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\"body\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"\u002F\u002Felement to add attribute to"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,ae,F]},children:[{type:a,value:aV}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\"theme\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"\u002F\u002F attribute name"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,ae,F]},children:[{type:a,value:"valueDark"}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"\u002F\u002F attribute value for dark mode"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,ae,F]},children:[{type:a,value:"valueLight"}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"\"custom-light\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"\u002F\u002F attribute value for light mode"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"This means you’ll also need to update your styles to look like this:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:_}]},{type:b,tag:x,props:{className:[y,$]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,aQ]},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,ap]},children:[{type:b,tag:c,props:{className:[d,aV]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:"theme"}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aR}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad,H]},children:[{type:a,value:aS}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad,H]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Everything should still work the same as before."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"If this configuration isn’t enough for you, and you need even more customization, you can hook the "},{type:b,tag:k,props:{},children:[{type:a,value:aX}]},{type:a,value:" event directly to take full control over how you handle the updates."}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:f},{type:b,tag:u,props:{className:[v]},children:[{type:b,tag:c,props:{className:[w]},children:[{type:a,value:l}]},{type:b,tag:x,props:{className:[y,aU]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:s}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:aX}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,"parameter"]},children:[{type:a,value:"dark"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"\u002F\u002F update the dom or store user's preferences in a DB by making an API call"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:f}]}]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fvue-dark-mode",extension:".md",updatedAt:"2022-12-12T16:45:43.723Z"},related:[{title:"Nuxt 3 State Management in Vue",slug:ar}]},"data-v-176f9b99:0":{prev:{slug:"vue-watch-vs-watcheffect",title:"Vue’s watch vs watchEffect, which should I use?"},next:{slug:"vue-use-composables",title:"Best VueUse Composables"}}},mutations:[]}}("text","element","span","token","punctuation","\n","tag"," ","p","\u003E","kbd","useDark","\u003C","keyword",";","\u003C\u002F","\n  ","operator","=","script","div","nuxt-content-highlight","filename","pre","line-numbers","code","{","}","function","(",")","property",":","color","true","string","const","\n\n",",",2,"h2","a",-1,"icon","icon-link","attr-name","module","template","style"," isDark ","comment","useToggle","src\u002FApp.vue","language-html","isDark","button","\"","hexcode","literal-property","strong","App.vue","setup","language-javascript","import","imports","from","\"@vueuse\u002Fcore\"","Dark theme: {{isDark}}","attr-value","selector","In this article, we’ll be taking a look at how to add dark mode to a Vue application using the VueUse library.","vue-nuxt-stagemanagement","the-usedark-composable","The useDark Composable","project-setup","Project Setup","install-vueuse-library","Install VueUse Library","implementing-dark-mode","Implementing Dark Mode","styling-the-app","Styling the App","customizing-usedark","Customizing useDark",".","terminal","language-text","Open up your "," useDark"," useToggle "," toggleDark ","\n\n  ","@click","attr-equals","toggleDark()","\n    Toggle Color Mode\n  ","language-css","background","#16171d","#fff","language-js","attribute","\"custom-dark\"","onChanged")));