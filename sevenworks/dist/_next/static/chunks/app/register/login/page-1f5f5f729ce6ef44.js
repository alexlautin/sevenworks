(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{414:(e,t,a)=>{Promise.resolve().then(a.bind(a,1393))},8023:(e,t,a)=>{"use strict";a.d(t,{j:()=>n});var s=a(9904),r=a(4565);let l=(0,s.Wp)({apiKey:"AIzaSyBPjF9ujr8-xqtqTn7S4n9lSrwuJuP9v0w",authDomain:"seven-works.firebaseapp.com",projectId:"seven-works",storageBucket:"seven-works.firebasestorage.app",messagingSenderId:"781370327017",appId:"1:781370327017:web:0a9fadcf6de732a76f5578",measurementId:"G-YVJS29ZSLF"}),n=(0,r.xI)(l)},1393:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(5155),r=a(2115),l=a(6046),n=a(8023),d=a(4565),o=a(4367);function c(){let[e,t]=(0,r.useState)(""),[a,c]=(0,r.useState)(""),[x,i]=(0,r.useState)(!1),[u,m]=(0,r.useState)(""),[h,p]=(0,r.useState)(""),f=(0,l.useRouter)(),g=async t=>{t.preventDefault(),i(!0);try{let t=await (0,d.x9)(n.j,e,a);console.log("User logged in:",t.user),i(!1),f.push("/dashboard")}catch(e){e instanceof Error?m(e.message):m("An unknown error occurred"),i(!1)}},b=async()=>{try{await (0,d.J1)(n.j,e),p("Password reset email sent!")}catch(e){e instanceof Error?m(e.message):m("An unknown error occurred")}};return(0,s.jsxs)("div",{className:"flex justify-center items-center min-h-screen bg-gradient-to-b from-navy to-darkRed",children:[(0,s.jsx)("a",{href:"../../",className:"absolute left-2 top-3",children:(0,s.jsx)(o.m6W,{className:"text-offWhite text-[45px] hover:text-neutral-400"})}),(0,s.jsxs)("form",{onSubmit:g,className:"flex flex-col w-[450px] bg-offWhite p-6 rounded-xl shadow-2xl border-b-4 border-lightGray",children:[(0,s.jsx)("h2",{className:"text-[32px] font-extrabold text-navy text-center",children:"Welcome Back"}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"w-[90%] h-[2px] bg-navy my-2"})}),u&&(0,s.jsx)("p",{className:"text-red-500 text-center mt-2",children:u}),h&&(0,s.jsx)("p",{className:"text-green-500 text-center mt-2",children:h}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 mt-4",children:[(0,s.jsx)("p",{className:"text-lightGray text-[16px] font-medium",children:"Email"}),(0,s.jsx)("input",{type:"email",placeholder:"example@email.com",disabled:x,value:e,onChange:e=>t(e.target.value),className:"w-full h-[50px] rounded-xl pl-4 shadow-md text-navy border border-gray-200"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 mt-4",children:[(0,s.jsx)("p",{className:"text-lightGray text-[16px] font-medium",children:"Password"}),(0,s.jsx)("input",{type:"password",placeholder:"password",disabled:x,value:a,onChange:e=>c(e.target.value),className:"w-full h-[50px] rounded-xl pl-4 shadow-md text-navy border border-gray-200"}),(0,s.jsx)("button",{type:"button",onClick:b,className:"text-sky-600 text-[14px] text-right hover:underline",children:"Forgot Password?"})]}),(0,s.jsx)("div",{className:"flex justify-center mt-8",children:(0,s.jsx)("button",{type:"submit",disabled:x,className:"w-[80%] text-white text-[18px] bg-lightRed py-3 rounded-lg hover:bg-darkRed transition duration-200",children:"Log In"})}),(0,s.jsxs)("p",{className:"text-[14px] text-gray-500 text-center mt-2",children:["Don't have an account?\xa0",(0,s.jsx)("a",{href:"./signup",className:"text-sky-600 hover:underline",children:"Create one"})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[206,895,536,441,517,358],()=>t(414)),_N_E=e.O()}]);